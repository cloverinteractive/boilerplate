port module Example exposing (..)

import Html exposing (..)


header : Html msg
header =
    h1 [] [ text "Hello world" ]


main : Html msg
main =
    header
