import React, { Component } from 'react'
import SceneTree from '../SceneTree/SceneTree.component'

class Root extends Component {

  render () {
    const {} = this.props

    return (
      <group>
        <SceneTree />
        <perspectiveCamera
          position={[0, 0, 10]}
          name='justCamera' />
      </group>
    )
  }
}

export default Root
