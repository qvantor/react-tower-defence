import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calculateMainProps } from './Calculate'
import * as THREE from 'three'

class SceneObject extends Component {
  shouldComponentUpdate (nextProps) {
    // @todo update only if
    // if (nextProps.node.keyFramesStart < nextProps.time
    //   && nextProps.node.keyFramesEnd > nextProps.time) {
    //
    //   const { node: { keyFrames }, time } = nextProps
    //
    //   const { position, rotation } = calculateMainProps(keyFrames, time)
    //
    //   this.refs.this.root.position.x = position[0]
    //   this.refs.this.root.position.y = position[1]
    //   this.refs.this.root.position.z = position[2]
    //   this.refs.this.root.rotation.copy(
    //     new THREE.Euler(
    //       THREE.Math.degToRad(rotation[0]),
    //       THREE.Math.degToRad(rotation[1]),
    //       THREE.Math.degToRad(rotation[2])))
    // }
    // return nextProps.node.keyFramesStart < nextProps.time
    //   && nextProps.node.keyFramesEnd > nextProps.time

    // return nextProps.children !== this.props.children
    return true
  }

  render () {
    const { node: { Component, keyframes, start, end }, children, time } = this.props
    if (!(start <= time && time <= end)) return null

    const { position, rotation } = calculateMainProps(keyframes, time)

    return (<Component
      onClick={e => {
        e.stopPropagation()
        console.log(Component, e)
      }}
      ref='this'
      position={position}
      rotation={rotation}>{children}</Component>)
  }
}

const mapStateToProps = state => {
  return {
    time: state.timeline.time
  }
}
export default connect(mapStateToProps)(SceneObject)
