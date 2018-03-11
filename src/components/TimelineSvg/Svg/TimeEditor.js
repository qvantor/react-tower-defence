import React, { Component } from 'react'
import { setModelProp } from 'reducers/scene/scene.actions'
import { select as d3Select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'

class TimeEditor extends Component {
  renderScene (scene) {
    const { scale } = this.props
    const height = 22
    const padding = 5
    let offset = 0
    return scene.map(item => {
      const width = scale(item.end - item.start)
      const start = scale(item.start)

      return (<div key={item.id}>
        <div className='brush' style={{ marginLeft: start }}>
          <div
            className='handle'
            style={{ width: 3, height }}
            ref={el => d3Select(el).call(drag().on('drag', () => setModelProp(item.id, { start: Math.round(scale.invert(mouse(this.refs.parent)[0])) })))} />
          <div
            className='handle'
            style={{ width: 3, height, marginLeft: width }}
            ref={el => d3Select(el).call(drag().on('drag', () => setModelProp(item.id, { end: Math.round(scale.invert(mouse(this.refs.parent)[0])) })))} />
          <div className='time-rect' style={{ height, width }} />
        </div>
        {item.children.length > 0 && this.renderScene(item.children)}
      </div>)
    })
  }

  render () {
    const { scene } = this.props

    return (
      <div className='time-editor' ref='parent'>
        {this.renderScene(scene)}
      </div>
    )
  }
}

export default TimeEditor