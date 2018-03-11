import React, { Component } from 'react'
import { select as d3Select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'

import { setModelProp } from 'reducers/scene/scene.actions'

class TimeEditor extends Component {
  renderScene = (scene) => {
    const { scale } = this.props
    const height = 22
    const padding = 5
    let offset = 0

    return scene.map((item, i) => {
      const width = scale(item.end - item.start)
      const start = scale(item.start)
      if (i > 0)
        offset += height + padding

      return (<g key={item.id}>
        <g className='brush' transform={`translate(${start},${offset})`}>
          <rect className='time-rect' height={height} width={width} />
          <rect
            ref={el => d3Select(el).call(drag().on('drag', () => setModelProp(item.id, { start: Math.round(scale.invert(mouse(this.refs.parent)[0])) })))}
            className='handle'
            height={height}
            width={3} />
          <rect
            ref={el => d3Select(el).call(drag().on('drag', () => setModelProp(item.id, { end: Math.round(scale.invert(mouse(this.refs.parent)[0])) })))}
            transform={`translate(${width},0)`}
            className='handle'
            height={height}
            width={3} />
        </g>
        {item.children.length > 0 && this.renderScene(item.children)}
      </g>)
    })
  }

  render () {
    const { scene } = this.props

    return (
      <g className='time-editor' ref='parent' transform={`translate(0,30)`}>
        {this.renderScene(scene)}
      </g>
    )
  }
}

export default TimeEditor
