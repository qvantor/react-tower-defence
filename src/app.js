import React from 'react'
import { render } from 'react-dom'
// import './canvas'
import 'babel-polyfill'
import './rcanvas/app'

import './styles/main.scss'

import App from './components/app.component.js'
import { store } from './store'
import './sagas'

render(<App store={store} />, document.getElementById('app'))