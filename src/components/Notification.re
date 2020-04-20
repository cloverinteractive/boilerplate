[@react.component]
let make = (~children, ~className, ~onDismiss) => {
  let notificationClass = Cn.make(["notification", className]);

  let alert =
    <div className=notificationClass>
      <button className="delete" onClick={_ => onDismiss()} />
      children
    </div>;

  switch (className) {
  | "is-success" => <Dismissable onDismiss> alert </Dismissable>
  | _ => alert
  };
};

let default = make;
