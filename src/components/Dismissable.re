[@react.component]
let make = (~dismiss=?, ~timeout=3000, ~children) => {
  let (render, dispatch) = React.useState(_ => true);

  React.useEffect0(() => {
    Js.Global.setTimeout(
      () => {
        dispatch(_ => false);
        dismiss->Belt.Option.mapWithDefault((), x => x());
      },
      timeout,
    )
    ->ignore;
    None;
  });

  if (render) {children} else {React.null};
};

let default = make;
