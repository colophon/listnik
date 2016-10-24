import React from 'react'
import ReactDOM from 'react-dom'

import Toolbar from './Toolbar'
import {TODO_FILTERS} from '../actions/constants'

describe('Toolbar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Toolbar filter={TODO_FILTERS.ALL} todos={[]} />,
      div
    )
  })
})
