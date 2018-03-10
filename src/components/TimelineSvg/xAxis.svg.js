import React, { Component } from 'react'

import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'

class xAxis extends Component {

  render () {
    const { scale, transform } = this.props
    return (
      <g
        transform={transform}
        ref={(el) => {
          const axis = d3Axis.axisBottom()
            .scale(scale)
            // .tickSize(height)
            .tickPadding([12])
            .ticks([8])

          d3Select(el)
            .call(axis)
        }} />
    )
  }
}

export default xAxis