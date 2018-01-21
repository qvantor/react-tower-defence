import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Level from './Level/Level.component'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (<Provider store={store}>
      <group>
        <Level />
      </group>
    </Provider>)
  }
}