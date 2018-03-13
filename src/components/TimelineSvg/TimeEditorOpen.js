import React, { Component } from 'react'
import { select as d3Select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'

import { changeModelKeyframe } from 'reducers/scene/scene.actions'

class TimeEditorOpen extends Component {
  render () {
    const { id, keyframes, scale } = this.props

    return (
      <div className='open-params'>
        <div className='params-row' ref='el'>
          {keyframes.map((item, i) =>
            <div
              key={i}
              style={{ marginLeft: scale(item.time) - 4 }}
              className='keyframe'
              ref={el => {
                d3Select(el)
                  .call(drag().on('drag', () => {
                    changeModelKeyframe({
                      id,
                      keyId: item.id,
                      data: { time: Math.round(scale.invert(mouse(this.refs.el)[0])) }
                    })
                  }))
              }}
            />)}
        </div>
      </div>
    )
  }
}

export default TimeEditorOpen
