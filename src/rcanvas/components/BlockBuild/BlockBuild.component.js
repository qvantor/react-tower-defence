import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphToGlobal } from '../../common/helpers'

class BlockBuild extends Component {
  render () {
    const { blockBuild, hover, square, depth } = this.props

    if (!blockBuild) return null

    return (
      <boxBuffer
        width={square}
        height={square}
        depth={depth}
        position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), 0]} />
    )
  }
}

const mapStateToProps = state => {
  return {
    square: state.config.field.square,
    depth: state.config.field.depth,
    blockBuild: state.game.blockBuild,
    hover: state.graph.hover,
  }
}
export default connect(mapStateToProps)(BlockBuild)