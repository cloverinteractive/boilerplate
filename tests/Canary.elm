module Canary exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, list, int, string)
import Test exposing (..)
import Example exposing (..)
import Html
import Html.Attributes exposing (class)
import Test.Html.Query as Query
import Test.Html.Selector exposing (text, tag)


suite : Test
suite =
    describe "It renders an h1"
        [ test "with text Hello world" <|
            \() ->
                Html.div [ class "test-container" ]
                    [ Example.header ]
                    |> Query.fromHtml
                    |> Query.find [ tag "h1" ]
                    |> Query.has [ text "Hello world" ]
        ]
