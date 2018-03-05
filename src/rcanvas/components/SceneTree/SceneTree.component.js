import React, { Component } from 'react'
import { connect } from 'react-redux'

class SceneTree extends Component {
  renderTree = (nodes) => {
    return nodes.map(({ component, id, children }) => {
      const TagName = component
      return (<TagName key={id}>
        {children.length && this.renderTree(children)}
      </TagName>)
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