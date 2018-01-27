import React, { Component } from 'react'
import { Provider } from 'react-redux'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (<Provider store={store}>
      <group>

      </group>
    </Provider>)
  }
}