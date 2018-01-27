import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as THREE from 'three'

class Building extends Component {
  static propTypes = {}

  render () {
    const { buildingId, rotation, position, buildings, showRadius } = this.props
    const building = buildings.find(item => item.id === buildingId)
    const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.5, color: 0x3498db })

    return (
      <group position={position}>
        {showRadius &&
        <circleBuffer
          radius={building.radius}
          segments={16}
          material={material}
          position={[0, 0, 20]} />}

        <mesh mesh={building.model.clone()} rotation={rotation} />
      </group>
    )
  }
}

const mapStateToProps = state => {
  return {
    buildings: state.buildings.list
  }
}

export default connect(mapStateToProps)(Building)