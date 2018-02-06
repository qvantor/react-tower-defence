import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buildBlockToggle } from 'reducers/game/game.actions'

class Blocks extends Component {
  render () {
    const { blocks } = this.props

    return (
      <div>
        <h4>Blocks</h4>
        {blocks >= 1 && <h6 onClick={buildBlockToggle}>Add block ({blocks})</h6>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blocks: state.player.blocks
  }
}
export default connect(mapStateToProps)(Blocks)