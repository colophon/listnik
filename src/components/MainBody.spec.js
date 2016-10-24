import React from 'react'
import ReactDOM from 'react-dom'

import MainBody from './MainBody'
import {TODO_FILTERS} from '../actions/constants'

describe('MainBody component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MainBody
        filter={TODO_FILTERS.ACTIVE}
        todos={[]}
      />,
      div
    )
  })
})
