import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphToGlobal } from 'rcanvas/common/helpers'

class Blocks extends Component {
  render () {
    const { blocks, square, depth } = this.props

    return (
      <group>
        {blocks.map(({ position }, i) =>
          <boxBuffer
            key={i}
            width={square}
            height={square}
            depth={depth}
            position={[graphToGlobal(position[0]), graphToGlobal(position[1]), depth / 2]} />)}
      </group>
    )
  }
}

const mapStateToProps = state => {
  return {
    square: state.config.field.square,
    depth: state.config.field.depth,
    blocks: state.graph.blocks
  }
}

export default connect(mapStateToProps)(Blocks)