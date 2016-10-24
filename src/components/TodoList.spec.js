import React from 'react'
import ReactDOM from 'react-dom'

import TodoList from './TodoList'
import {TODO_FILTERS} from '../actions/constants'

describe('TodoList component', () => {
  it('renders an empty list without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <TodoList
        todos={[]}
        filter={TODO_FILTERS.ALL}
      />,
        div)
  })
  it('renders a todo list without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <TodoList
        todos={[{id: 1, title: 'foo', completed: false}]}
        filter={TODO_FILTERS.ALL}
      />,
        div)
  })
})
