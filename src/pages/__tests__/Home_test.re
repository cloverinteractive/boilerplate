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

describe("<Home />", () => {
  let wrapper = Enzyme.mount(<Wrapper> <Messages /> <Home /> </Wrapper>);

  test("it mounts", () =>
    wrapper
    |> Enzyme.Mount.first
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.not_
    |> Expect.toBe(0)
  );

  test("mounts with no messages", () =>
    wrapper
    |> Enzyme.Mount.find(".notification")
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.toBe(0)
  );

  ["is-success", "is-warning", "is-danger"]
  ->Belt.List.forEach(alert =>
      test(
        "it triggers " ++ alert ++ " messages",
        () => {
          ReactTestingLibrary.act(() =>
            wrapper
            |> Enzyme.Mount.find(".button." ++ alert)
            |> Enzyme.Mount.first
            |> Enzyme.Mount.simulate("click")
          );

          wrapper |> Enzyme.Mount.update;

          wrapper
          |> Enzyme.Mount.find(".notification." ++ alert)
          |> Enzyme.Mount.length
          |> Expect.expect
          |> Expect.not_
          |> Expect.toBe(0);
        },
      )
    );
});