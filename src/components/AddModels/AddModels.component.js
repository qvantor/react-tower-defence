import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addModel} from 'reducers/scene/scene.actions'

class AddModels extends Component {

  render () {
    const { models } = this.props

    return (
      <div>
        <h4>Models</h4>

        <ul>
          {models.map((item, i) =>
            <li
              key={i}
              onClick={() => addModel(item)}>
              {item.name}
            </li>)}
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  models: state.models
})
export default connect(mapStateToProps)(AddModels)
