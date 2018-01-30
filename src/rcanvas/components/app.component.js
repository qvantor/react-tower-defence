import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { globalToGraph } from 'rcanvas/common/helpers'

import { setHover } from 'reducers/graph/graph.actions'

import HH from './HoverHelper.component'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (<Provider store={store}>
      <group onMouseMove={e => setHover([globalToGraph(e.point.x), globalToGraph(e.point.y)])}>
        <terrain
          width={10000}
          height={10000}
          detalization={200}
          smooth={20} />
        {/*<gridHelper*/}
        {/*size={10000}*/}
        {/*divisions={100}*/}
        {/*rotation={[90, 0, 0]} />*/}
        {/*<HH />*/}
      </group>
    </Provider>)
  }
}