module Styles = {
  open Css;

  let messages = [
    left(`percent(50.0)),
    marginLeft(`percent(-48.0)),
    position(`fixed),
    top(`px(80)),
    width(`percent(96.0)),
    zIndex(100),
  ];

  let tablet = [
    media(
      "(min-width: 768px) and (max-width: 991)",
      [marginLeft(`px(-361)), width(`px(723))],
    ),
  ];

  let smallScreen = [
    media(
      "(min-width: 992px) and (max-width: 1199px)",
      [marginLeft(`px(-446)), width(`px(933))],
    ),
  ];

  let largeScreen = [
    media(
      "(min-width: 1200px)",
      [marginLeft(`px(-563)), width(`px(1126))],
    ),
  ];

  let responsive =
    [messages, tablet, smallScreen, largeScreen]->List.concat->Css.style;
};

[@react.component]
let make = () => {
  let (messages, dispatch) = MessageContext.useMessages();

  <div className=Styles.responsive>
    {Belt.Map.String.valuesToArray(messages)
     ->Belt.Array.map(
         ({key, className, message}: MessageContext.notification) =>
         <Notification
           key
           className
           onDismiss={_ => dispatch(MessageContext.RemoveMessage(key))}>
           message->React.string
         </Notification>
       )
     ->React.array}
  </div>;
};

let default = make;