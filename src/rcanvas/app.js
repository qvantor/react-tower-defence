import React from 'react'
import render from './render'

import { store } from '../store/'

import App from './components/app.component'

const canvas = document.getElementById('canvas')

render(<App store={store} canvas={canvas} />, canvas)