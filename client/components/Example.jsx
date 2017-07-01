import React from 'react'
import Elm from 'react-elm-components'
import { Example } from 'elm/Example'

export default () => (
  <div className="example">
    <h1>Elm goes below</h1>
    <Elm src={Example} />
  </div>
)

