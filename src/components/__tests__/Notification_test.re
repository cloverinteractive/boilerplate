open Jest;

describe("<Notification />", () => {
  let clicked = ref(false);
  let onDismiss = () => {
    clicked := ! clicked^;
    ();
  };

  test("It mounts", () =>
    Enzyme.mount(
      <Notification className="is-warning" onDismiss>
        "This is a warning"->React.string
      </Notification>,
    )
    |> Enzyme.Shallow.text
    |> Expect.expect
    |> Expect.toContainString("This is a warning")
  );

  test("It makes successful notifications", () =>
    Enzyme.mount(
      <Notification className="is-success" onDismiss>
        "This is dismissable"->React.string
      </Notification>,
    )
    |> Enzyme.Mount.find("Dismissable")
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.toBe(1)
  );

  test("It doest not make regular notifications dismissable", () =>
    Enzyme.mount(
      <Notification className="is-danger" onDismiss>
        "This is not dismissable"->React.string
      </Notification>,
    )
    |> Enzyme.Mount.find("Dismissable")
    |> Enzyme.Mount.length
    |> Expect.expect
    |> Expect.toBe(0)
  );

  test("it calls onDismiss when clicked", () => {
    let wrapper =
      Enzyme.mount(
        <Notification className="is-danger" onDismiss>
          "This is not dismissable"->React.string
        </Notification>,
      );

    ReactTestingLibrary.act(() =>
      wrapper
      |> Enzyme.Mount.find(".delete")
      |> Enzyme.Mount.first
      |> Enzyme.Mount.simulate("click")
    );

    Expect.expect(clicked^) |> Expect.toBe(true);
  });
});