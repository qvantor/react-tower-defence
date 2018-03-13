import React, { Component } from 'react'
import SceneTree from '../SceneTree/SceneTree.component'

class Root extends Component {

  render () {
    const {} = this.props

    return (
      <group>
        <group name='intersections'>
          <SceneTree />
          <perspectiveCamera
            position={[0, 0, 10]}
            name='justCamera' />
        </group>
        <gridHelper />
      </group>
    )
  }
}

export default Root
