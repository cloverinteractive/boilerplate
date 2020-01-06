[@bs.val] external setTimeout: (unit => unit, int) => float = "setTimeout";
[@bs.val] external clearTimeout: float => unit = "clearTimeout";

let noop = () => ();

[@react.component]
let make = (~dismiss=noop, ~timeout=3000, ~children) => {
  let (render, dispatch) = React.useState(() => true);

  let dismissal = () => {
    dispatch(_ => false);
    dismiss();
  };

  React.useEffect(() => {
    let timer = setTimeout(dismissal, timeout);
    Some(() => clearTimeout(timer));
  });

  if (render) {children} else {React.null};
};

let default = make;
