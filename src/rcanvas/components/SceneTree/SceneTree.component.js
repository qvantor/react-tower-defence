import React, { Component } from 'react'
import { connect } from 'react-redux'

import SceneObject from './SceneObject.component'

class SceneTree extends Component {
  renderTree = (nodes) => {
    return nodes.map(node => {
      return (<SceneObject key={node.id} node={node}>
        {node.children.length ? this.renderTree(node.children) : null}
      </SceneObject>)
    })
  }

  render () {
    const { scene } = this.props

    return (
      <group>
        {this.renderTree(scene)}
      </group>
    )
  }
}

const mapStateToProps = state => {
  return {
    scene: state.scene
  }
}
export default connect(mapStateToProps)(SceneTree)