import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './redux/store'
import {INITIAL_STATE} from './core'

const store = configureStore(INITIAL_STATE)

render(
  <Root store={store} />,
  document.getElementById('root')
)
