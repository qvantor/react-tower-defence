import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setHover } from 'reducers/graph/graph.actions'
import { groupClicked } from 'reducers/game/game.actions'

import { globalToGraph } from 'rcanvas/common/helpers'

import Grid from './Grid.component'
import Gate from './Gate.component'
import Portal from './Portal.component'
import HoverHelper from './HoverHelper.component'
import Blocks from '../Blocks/Blocks.component'
import Path from '../Path/Path.component'
import BlockBuild from '../BlockBuild/BlockBuild.component'
import WeaponBuild from '../WeaponBuild/WeaponBuild.component'
import Weapons from '../Weapons/Weapons.component'

class Level extends Component {
  render () {
    const { setHover, groupClicked } = this.props
    return (
      <group
        onClick={groupClicked}
        onMouseMove={({ point }) => setHover([globalToGraph(point.x), globalToGraph(point.y)])}>
        <Blocks />
        <Grid />
        <Gate />
        <Portal />
        <Path />
        <BlockBuild />
        <HoverHelper />
        <WeaponBuild />
        <Weapons />
      </group>
    )
  }
}

export default connect(null, { setHover, groupClicked })(Level)