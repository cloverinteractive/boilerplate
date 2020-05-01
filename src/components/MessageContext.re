type notification = {
  className: string,
  key: string,
  message: string,
};

type state = Belt.Map.String.t(notification);

type action =
  | AddMessage(string, string)
  | RemoveMessage(string);

type context = (state, action => unit);

let initValue: context = (Belt.Map.String.empty, _ => ());
let context = React.createContext(initValue);
let useMessages = () => React.useContext(context);

module Provider = {
  let make = React.Context.provider(context);

  let makeProps = (~value, ~children, ()) => {
    "value": value,
    "children": children,
  };
};

let uuid = Uuid.V1.uuidv1;

let reducer = (state, action) =>
  switch (action) {
  | AddMessage(className, message) =>
    let key = uuid();
    {key, className, message} |> Belt.Map.String.set(state, key);
  | RemoveMessage(id) => id |> Belt.Map.String.remove(state)
  };

let default = Provider.make;