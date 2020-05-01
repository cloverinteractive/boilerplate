[@react.component]
let make = () =>
  <div className="container is-fluid">
    <h1 className="title"> "Page not found"->React.string </h1>
    <div className="content">
      <p> "The page you we're looking for does not exist."->React.string </p>
    </div>
    <BsReactHelmet defaultTitle="Oops! Page not found" />
  </div>;

let default = make;