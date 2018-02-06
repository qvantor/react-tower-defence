import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphToGlobal } from 'common/helpers'
import models from 'common/weaponsModels'

import { checkWeaponPos } from 'reducers/graph/graph.actions'

class WeaponBuild extends Component {
  render () {
    const { weaponBuild, weapons, hover, depth } = this.props

    if (!weaponBuild) return null
    if (!checkWeaponPos(hover)) return null
    // const { model } = weapons.find(item => item.id === weaponBuild)

    return (
      <mesh
        mesh={models[weaponBuild].clone()}
        rotation={[90, 0, 0]}
        position={[graphToGlobal(hover[0]), graphToGlobal(hover[1]), depth / 2 + 30]} />
    )
  }
}

const mapStateToProps = state => {
  return {
    depth: state.config.field.depth,
    weaponBuild: state.game.weaponBuild,
    weapons: state.weapons,
    hover: state.graph.hover,
  }
}
export default connect(mapStateToProps)(WeaponBuild)