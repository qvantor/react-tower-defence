import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Root from './Root/Root.component'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (<Provider store={store}>
      <scene camera='justCamera'>
        <Root />
      </scene>
    </Provider>)
  }
}