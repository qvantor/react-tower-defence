import React, { Component } from 'react'

class Controls extends Component {
  renderScene = (scene) => {
    return scene.map(item =>
      <div key={item.id}>
        <div className='scene-item'>
          {item.name}
        </div>
        {item.children.length > 0 && <div className='children'>
          {this.renderScene(item.children)}
        </div>}
      </div>)
  }

  render () {
    const { width, scene } = this.props

    return (
      <div className='controls'>
        {this.renderScene(scene)}
      </div>
    )
  }
}

export default Controls
