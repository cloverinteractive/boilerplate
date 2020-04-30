open Jest;

describe("<Error404 />", () => {
  let wrapper = Enzyme.mount(<Error404 />);

  test("it mounts correctly", () =>
    wrapper
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.not_
    |> Expect.toBe(0)
  );

  test("it renders content", () =>
    wrapper
    |> Enzyme.Mount.text
    |> Expect.expect
    |> Expect.toContainString("Page not found")
  );
});