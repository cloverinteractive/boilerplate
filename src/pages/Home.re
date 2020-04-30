open HomePageMocks;

[@react.component]
let make = () =>
  MessageContext.(
    {
      let (_, dispatch) = useMessages();
      let highlightClass =
        Cn.make(["has-text-weight-bold", "is-family-monospace", "is-italic"]);

      <div className="container is-fluid">
        <article className="content">
          <h1 className="title"> "Everything is Running!"->React.string </h1>
          <p>
            "Awesome, you've got this far, here are some pointers to make development easier."
            ->React.string
          </p>
        </article>
        <article className="content">
          <h2 className="title"> "Bundled goodies"->React.string </h2>
          <p>
            "Here's the list of packages this boilerplate pre-configures for you."
            ->React.string
          </p>
          <ul className="libraries">
            {librariesList
             ->Belt.List.map(
                 ({description, library, url}: HomePageMocks.library) => {
                 <li key=library>
                   <a href=url rel="noopener noreferrer" target="_blank">
                     library->React.string
                   </a>
                   " - "->React.string
                   <span className="is-italic">
                     description->React.string
                   </span>
                 </li>
               })
             ->Array.of_list
             ->React.array}
          </ul>
        </article>
        <article className="content">
          <h2 className="title"> "Components"->React.string </h2>
          <p>
            "The app comes bundled with super basic notification and dismissable components
        you can try them out by clicking the buttons below."
            ->React.string
          </p>
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button
                className="button is-success"
                onClick={_ => dispatch(AddMessage("is-success", "Success!"))}
                title="Successful alerts will automatically close"
                type_="button">
                "Notice"->React.string
              </button>
            </div>
            <div className="control">
              <button
                className="button is-warning"
                onClick={_ => dispatch(AddMessage("is-warning", "Warning!"))}
                title="Warning alerts will stay until manually closed"
                type_="button">
                "Warning"->React.string
              </button>
            </div>
            <div className="control">
              <button
                className="button is-danger"
                onClick={_ => dispatch(AddMessage("is-danger", "Error!"))}
                title="Error alerts will stay until manually closed"
                type_="button">
                "Error"->React.string
              </button>
            </div>
          </div>
          <p>
            "We've also packaged 3 page components,"->React.string
            <span className=highlightClass> "<Home />"->React.string </span>
            ", "->React.string
            <span className=highlightClass>
              "<Error500 />"->React.string
            </span>
            " and "->React.string
            <span className=highlightClass>
              "<Error404 />"->React.string
            </span>
            " and organized the application in a simple structure making it easy to find everyting in the project;"
            ->React.string
          </p>
          <p>
            "This is the "->React.string
            <span className=highlightClass> "src/pages"->React.string </span>
            " structure:"->React.string
          </p>
          <pre className="is-family-monospace"> pagesTree->React.string </pre>
          <p>
            "This is the "->React.string
            <span className=highlightClass>
              "src/components"->React.string
            </span>
          </p>
          <pre className="is-family-monospace">
            componentTree->React.string
          </pre>
        </article>
        <BsReactHelmet defaultTitle="Home Page" />
      </div>;
    }
  );

let default = make;