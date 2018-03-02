import React, { Component } from 'react'
import { Provider } from 'react-redux'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (<Provider store={store}>
      <scene camera='justCamera'>
        <boxBuffer />
        <perspectiveCamera
          position={[0, 0, 10]}
          name='justCamera' />
      </scene>
    </Provider>)
  }
}