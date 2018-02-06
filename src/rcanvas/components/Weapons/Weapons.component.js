import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphToGlobal } from 'common/helpers'
import models from 'common/weaponsModels'

class Weapons extends Component {
  render () {
    const { weapons, depth } = this.props

    return (
      <group>
        {weapons.map((item, i) =>
          <mesh
            key={i}
            rotation={[90, 0, 0]}
            mesh={models[item.weapon.id].clone()}
            position={[graphToGlobal(item.position[0]), graphToGlobal(item.position[1]), depth / 2 + 30]}
          />)}
      </group>
    )
  }
}

const mapStateToProps = state => {
  return {
    weapons: state.game.weapons,
    depth: state.config.field.depth
  }
}
export default connect(mapStateToProps)(Weapons)