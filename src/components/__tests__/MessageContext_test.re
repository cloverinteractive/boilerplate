open Jest;
open ReasonHooksTestingLibrary.Testing;
open MessageContext;

type hook = {
  messages: state,
  dispatch: action => unit,
};

let messagesHook = () => {
  let (messages, dispatch) =
    React.useReducer(reducer, Belt.Map.String.empty);
  {messages, dispatch};
};

describe("MessageContext", () => {
  open Result;
  let container = renderHook(() => messagesHook(), ());

  test("start up", () => {
    container->result->current.messages
    |> Expect.expect
    |> Expect.toBe(Belt.Map.String.empty)
  });

  test("it can add messages", () => {
    act(() =>
      container->result->current.dispatch(
        AddMessage("is-warning", "This is a warning"),
      )
    );

    container->result->current.messages
    |> Expect.expect
    |> Expect.not_
    |> Expect.toEqual(Belt.Map.String.empty);
  });

  test("it can remove existing messages", () => {
    let key = container->result->current.messages->Belt.Map.String.keysToArray[0];

    act(() => container->result->current.dispatch(RemoveMessage(key)));

    container->result->current.messages
    |> Expect.expect
    |> Expect.toEqual(Belt.Map.String.empty);
  });

  test("initValue is mocked", () => {
    let (state, dispatch) = initValue;

    AddMessage("is-danger", "This won't show in the state")
    |> dispatch
    |> ignore;

    state |> Expect.expect |> Expect.toEqual(Belt.Map.String.empty);
  });
});