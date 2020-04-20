open Jest;
open ReactRouter;

describe("<Nav />", () =>
  test("It mounts", () =>
    Enzyme.mount(
      <Router> <Switch> <Route> <Nav /> </Route> </Switch> </Router>,
    )
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.toBe(1)
  )
);
