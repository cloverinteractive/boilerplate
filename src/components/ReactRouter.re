module Link = {
  [@bs.module "react-router-dom"] [@react.component]
  external make:
    (~className: string=?, ~_to: string, ~children: 'a) => React.element =
    "Link";
};

type locationData = {
  hash: string,
  key: string,
  pathname: string,
  search: string,
};

[@bs.module "react-router-dom"]
external useLocation: unit => locationData = "useLocation";
