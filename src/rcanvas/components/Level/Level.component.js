import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setHover } from 'reducers/graph/graph.actions'

import { globalToGraph } from 'rcanvas/common/helpers'

import Grid from './Grid.component'
import Gate from './Gate.component'
import Portal from './Portal.component'
import HoverHelper from './HoverHelper.component'
import Blocks from '../Blocks/Blocks.component'
import Path from '../Path/Path.component'

class Level extends Component {
  render () {
    const { setHover } = this.props
    return (
      <group onMouseMove={({ point }) => setHover([globalToGraph(point.x), globalToGraph(point.y)])}>
        <Blocks />
        <Grid />
        <Gate />
        <Portal />
        <Path />
        <HoverHelper />
      </group>
    )
  }
}

export default connect(null, { setHover })(Level)