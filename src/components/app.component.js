import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import AddModels from './AddModels/AddModels.component'
import SceneTree from './SceneTree/SceneTree.component'
import Timeline from './Timeline/Timeline.component'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <main>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-9 bottombar'>
                <Timeline />
              </div>
              <div className='col-md-3  sidebar'>
                <AddModels />
                <SceneTree />
              </div>
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
