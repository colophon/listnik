import React from 'react'
import ReactDOM from 'react-dom'

import VisibleTodosFilter from './VisibleTodosFilter'
import {TODO_FILTERS} from '../actions/constants'

describe('VisibleTodosFilter component', () => {
  it('renders without crashing',() => {
    const div = document.createElement('div')
    ReactDOM.render(
      <VisibleTodosFilter handler={()=>{}} value={TODO_FILTERS.ALL}/>,
      div
    )
  })
})
