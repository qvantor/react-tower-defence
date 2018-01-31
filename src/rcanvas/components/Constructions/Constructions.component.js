import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphToGlobal } from '../../common/helpers'
import * as THREE from 'three'

class Constructions extends Component {

  render () {
    const { constructions, square } = this.props

    const material = new THREE.MeshBasicMaterial({ color: 0x6c5ce7 })

    return (
      <group>
        {constructions.map((item, i) =>
          <boxBuffer
            key={i}
            material={material}
            width={square}
            height={square}
            depth={square / 10}
            position={[graphToGlobal(item[0]), graphToGlobal(item[1]), square / 20]} />)}
      </group>
    )
  }
}

const mapStateToProps = state => {
  return {
    square: state.config.field.square,
    constructions: state.graph.constructions
  }
}
export default connect(mapStateToProps)(Constructions)