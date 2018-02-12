import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buildBlockToggle } from 'reducers/game/game.actions'

class Blocks extends Component {
  render () {
    const { blocks, waveActive } = this.props

    if (waveActive) return null

    return (
      <div>
        <h4>Blocks</h4>
        <h6
          className={blocks <= 0 ? 'unactive' : ''}
          onClick={e => blocks > 0 && buildBlockToggle()}>Add block ({blocks})</h6>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blocks: state.player.blocks,
    waveActive: state.game.waveActive
  }
}
export default connect(mapStateToProps)(Blocks)