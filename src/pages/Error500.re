[@react.component]
let make = () =>
  <div className="container is-fluid">
    <h1 className="title"> "Something went wrong"->React.string </h1>
    <div className="content">
      <p>
        "Something went wrong with the operation you tried, please try again later"
        ->React.string
      </p>
    </div>
    <BsReactHelmet title="Something went wrong" />
  </div>;

let default = make;