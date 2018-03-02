import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tree from 'antd/lib/tree'

const { TreeNode } = Tree

class SceneTree extends Component {
  renderTree = (nodes) => {
    return nodes.map(item =>
      <TreeNode key={Math.random()} title={item.name}>

      </TreeNode>)
  }

  render () {
    const { scene } = this.props
    console.log(scene)

    return (<div>
      <h4>Scene</h4>
      <Tree draggable>
        {this.renderTree(scene)}
      </Tree>
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    scene: state.scene
  }
}
export default connect(mapStateToProps)(SceneTree)