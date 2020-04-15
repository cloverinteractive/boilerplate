[@react.component]
let make = (~dismiss=?, ~timeout=3000, ~children) => {
  let (render, dispatch) = React.useState(_ => true);

  React.useEffect1(
    () => {
      let timer =
        Js.Global.setInterval(
          () => {
            dispatch(_ => false);
            switch (dismiss) {
            | Some(callback) => callback()
            | None => ()
            };
          },
          timeout,
        );
      Some(() => Js.Global.clearInterval(timer));
    },
    [||],
  );

  if (render) {children} else {React.null};
};

let default = make;
