import React, { Component } from 'react'
import { startWave } from 'reducers/game/game.actions'

class Waves extends Component {
  render () {
    const {} = this.props

    return (
      <h4 onClick={startWave}>
        Wave start
      </h4>
    )
  }
}

export default Waves