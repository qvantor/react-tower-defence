import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from 'three'

class Bullets extends Component {
  render () {
    const { bullets } = this.props

    return (
      <group>
        {bullets.map(item => {
          const startPos = new THREE.Vector2(item.direction.from.x, item.direction.from.y)
          const direction = new THREE.Vector2(item.direction.to.x, item.direction.to.y)
          const newPos = new THREE.Vector2()
            .addVectors(startPos, direction.multiplyScalar(item.position / 10, item.position / 10))
          return (<boxBuffer
            key={item.id}
            position={[newPos.x, newPos.y, 100]}
            width={5}
            height={5}
            depth={5} />)
        })}
      </group>
    )
  }
}

const mapStateToProps = state => {
  return {
    bullets: state.bullets
  }
}
export default connect(mapStateToProps)(Bullets)