import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import Blocks from './Blocks/Blocks.component'
import Weapons from './Weapons/Weapons.component'
import Money from './Money/Money.component'
import Waves from './Waves/Waves.component'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div className='container-fluid custom-container'>
          <div className='col-md-offset-10 col-md-2 controls'>
            <Money />
            <Blocks />
            <Weapons />
            <Waves />
          </div>
        </div>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}
