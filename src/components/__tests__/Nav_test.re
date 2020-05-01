open Jest;
open ReactRouter;

describe("<Nav />", () => {
  test("It mounts", () =>
    Enzyme.mount(
      <Router> <Switch> <Route> <Nav /> </Route> </Switch> </Router>,
    )
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.toBe(1)
  );

  test("It changes class on click", () => {
    let wrapper =
      Enzyme.mount(
        <Router> <Switch> <Route> <Nav /> </Route> </Switch> </Router>,
      );

    let burger =
      wrapper
      |> Enzyme.Mount.find(".navbar-burger.burger")
      |> Enzyme.Mount.first;

    burger |> Enzyme.Mount.length |> Expect.expect |> Expect.toBe(1) |> ignore;

    ReactTestingLibrary.act(() => burger |> Enzyme.Mount.simulate("click"));

    wrapper |> Enzyme.Mount.update;

    wrapper
    |> Enzyme.Mount.find(".navbar-burger.burger.is-active")
    |> Enzyme.Mount.first
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.toBe(1);
  });
});