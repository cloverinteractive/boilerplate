open Jest;

module Wrapper = {
  [@react.component]
  let make = (~children) =>
    MessageContext.(
      {
        let value = React.useReducer(reducer, Belt.Map.String.empty);

        <Provider value> children </Provider>;
      }
    );
};

module NotificationButton = {
  [@react.component]
  let make = () =>
    MessageContext.(
      {
        let (_, dispatch) = useMessages();

        <button
          className="addWarning"
          onClick={_ =>
            dispatch(AddMessage("is-warning", "This is a warning"))
          }>
          "Add Message"->React.string
        </button>;
      }
    );
};

describe("<Messages />", () => {
  let wrapper =
    Enzyme.mount(<Wrapper> <NotificationButton /> <Messages /> </Wrapper>);

  test("it mounts", () =>
    wrapper |> Enzyme.Mount.length |> Expect.expect |> Expect.toBe(1)
  );

  test("it mounts empty", () =>
    wrapper
    |> Enzyme.Mount.find(".notification")
    |> Enzyme.Mount.first
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.toBe(0)
  );

  test("it adds notifications", () => {
    ReactTestingLibrary.act(() =>
      wrapper
      |> Enzyme.Mount.find(".addWarning")
      |> Enzyme.Mount.first
      |> Enzyme.Mount.simulate("click")
    );

    wrapper |> Enzyme.Mount.update;

    wrapper
    |> Enzyme.Mount.find(".notification")
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.toBe(1);
  });

  test("it removes notifications", () => {
    ReactTestingLibrary.act(() =>
      wrapper
      |> Enzyme.Mount.find(".delete")
      |> Enzyme.Mount.first
      |> Enzyme.Mount.simulate("click")
    );

    wrapper |> Enzyme.Mount.update;

    wrapper
    |> Enzyme.Mount.find(".notification")
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.toBe(0);
  });
});