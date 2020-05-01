module Styles = {
  let messages =
    Css.(
      style([
        left(`percent(50.0)),
        marginLeft(`percent(-48.0)),
        position(`fixed),
        top(`px(80)),
        width(`percent(96.0)),
        zIndex(100),
        media(
          "(min-width: 768px) and (max-width: 991)",
          [marginLeft(`px(-361)), width(`px(723))],
        ),
        media(
          "(min-width: 992px) and (max-width: 1199px)",
          [marginLeft(`px(-446)), width(`px(933))],
        ),
        media(
          "(min-width: 1200px)",
          [marginLeft(`px(-563)), width(`px(1126))],
        ),
      ])
    );
};

[@react.component]
let make = () =>
  MessageContext.(
    {
      let (messages, dispatch) = useMessages();

      <div className=Styles.messages>
        {Belt.Map.String.valuesToArray(messages)
         ->Belt.Array.map(({key, className, message}: notification) =>
             <Notification
               key className onDismiss={_ => RemoveMessage(key) |> dispatch}>
               message->React.string
             </Notification>
           )
         ->React.array}
      </div>;
    }
  );

let default = make;