import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import Buildings from './buildings/buildings.component'
import NextWave from './NextWave/NextWave.component'
import Construction from './Construction/Construction.component'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div className='container-fluid'>
          <div className='col-md-offset-10 col-md-2'>
            <NextWave />
            <Construction />
            <Buildings />
          </div>
        </div>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}
