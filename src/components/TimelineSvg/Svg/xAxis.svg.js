import React, { Component } from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'

import { setTime } from 'reducers/timeline/timeline.actions'

class xAxis extends Component {
  render () {
    const { scale, transform, width } = this.props
    return (
      <g transform={transform} ref={el => {
        d3Select(el)
          .on('click', () => setTime(Math.round(scale.invert(mouse(el)[0]))))
          .call(drag().on('drag', () => setTime(Math.round(scale.invert(mouse(el)[0])))))
      }}>
        <g
          ref={(el) => {
            const axis = d3Axis.axisBottom()
              .scale(scale)
              // .tickSize(height)
              .tickPadding([12])
              .ticks([8])

            d3Select(el)
              .call(axis)
          }} />
        <rect className='bg-rect' width={width} height={30} />
      </g>
    )
  }
}

export default xAxis