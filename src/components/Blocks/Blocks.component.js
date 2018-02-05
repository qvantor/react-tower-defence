import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buildBlock } from 'reducers/game/game.actions'

class Blocks extends Component {
  render () {
    const { buildBlock } = this.props

    return (
      <div>
        <h4>Blocks</h4>
        <h6 onClick={buildBlock}>Add block</h6>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps, { buildBlock })(Blocks)