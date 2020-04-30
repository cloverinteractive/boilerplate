open Jest;

describe("<Error500 />", () => {
  let wrapper = Enzyme.mount(<Error500 />);

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
    |> Expect.toContainString("Something went wrong")
  );
});