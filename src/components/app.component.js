import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import AddModels from './AddModels/AddModels.component'
import SceneTree from './SceneTree/SceneTree.component'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <main>
          <div className='container-fluid'>
            <div className='col-md-3 col-md-offset-9 sidebar'>
              <AddModels />
              <SceneTree />
            </div>
          </div>
        </main>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}
