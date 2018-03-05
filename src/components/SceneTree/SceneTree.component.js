import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tree from 'antd/lib/tree'
import { putChildInParent } from 'reducers/scene/scene.actions'

const { TreeNode } = Tree

class SceneTree extends Component {
  renderTree = (nodes) => {
    return nodes.map(item =>
      <TreeNode key={item.id} title={item.name}>
        {item.children.length ? this.renderTree(item.children) : null}
      </TreeNode>)
  }

  onDrop = ({ dragNode, node }) => {
    putChildInParent(dragNode.props.eventKey, node.props.eventKey)
  }

  render () {
    const { scene } = this.props

    return (<div>
      <h4>Scene</h4>
      <Tree
        onDrop={this.onDrop}
        draggable>
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