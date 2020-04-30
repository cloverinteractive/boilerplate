open Jest;

describe("<Dismissable />", () => {
  let onDismiss = () => ();

  let getChildrenLength = (child, wrapper) =>
    wrapper |> Enzyme.Mount.find(child) |> Enzyme.Mount.length;

  test("renders children", () =>
    Enzyme.mount(
      <Dismissable onDismiss>
        <h1> "This is a heading"->React.string </h1>
      </Dismissable>,
    )
    |> getChildrenLength("h1")
    |> Expect.expect
    |> Expect.toBe(1)
  );

  test("dismisses children after time runs out", () => {
    Jest.useFakeTimers();

    let wrapper =
      Enzyme.mount(
        <Dismissable onDismiss timeout=3000>
          <h1> "This is a heading"->React.string </h1>
        </Dismissable>,
      );

    wrapper
    |> getChildrenLength("h1")
    |> Expect.expect
    |> Expect.toBe(1)
    |> ignore;

    ReactTestingLibrary.act(() => Jest.advanceTimersByTime(3000));

    wrapper |> Enzyme.Mount.update;
    wrapper |> getChildrenLength("h1") |> Expect.expect |> Expect.toBe(0);
  });
});
