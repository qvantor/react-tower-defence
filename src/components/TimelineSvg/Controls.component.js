import React, { Component } from 'react'
import Icon from 'antd/lib/icon'

import { setModelProp } from 'reducers/scene/scene.actions'

class Controls extends Component {
  renderScene = (scene) => {
    return scene.map(item =>
      <div key={item.id}>

        <div className='scene-item'>
          <Icon
            onClick={e => setModelProp(item.id, { open: !item.open })}
            type={item.open ? 'caret-down' : 'caret-right'}
            className='m-right-5' />
          {item.name}

          {item.open &&
          <div className='open-params'>
            <div className='params-row'>Transform</div>
          </div>}
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
