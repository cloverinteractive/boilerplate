module Link = ReactRouter.Link;

module Burger = {
  [@react.component]
  let make = (~children, ~className, ~expanded, ~onClick) =>
    ReactDOMRe.createElementVariadic(
      "a",
      ~props=
        ReactDOMRe.objToDOMProps({
          "aria-label": "menu",
          "aria-expanded": expanded,
          "className": className,
          "data-target": "navbar",
          "onClick": onClick,
          "role": "button",
        }),
      [|children|],
    );
};

[@react.component]
let make = () => {
  let (expanded, dispatch) = React.useState(_ => false);
  let {pathname}: ReactRouter.locationData = ReactRouter.useLocation();

  React.useEffect1(
    () => {
      dispatch(_ => false);
      None;
    },
    [|pathname|],
  );

  let burgerClass =
    Cn.make(["navbar-burger", "burger", Cn.ifTrue("is-active", expanded)]);

  let menuClass = Cn.make(["navbar-menu", Cn.ifTrue("is-active", expanded)]);

  let onClick = _ => dispatch(_ => !expanded);

  <nav
    className="navbar is-fixed-top  is-link"
    role="navigation"
    ariaLabel="main navigation">
    <div className="navbar-brand">
      <Burger className=burgerClass expanded onClick>
        <span ariaHidden=true />
        <span ariaHidden=true />
        <span ariaHidden=true />
      </Burger>
    </div>
    <div id="navbar" className=menuClass>
      <Link className="navbar-item" _to="/"> "Home"->React.string </Link>
      <Link className="navbar-item" _to="/about"> "About"->React.string </Link>
    </div>
  </nav>;
};

let default = make;
