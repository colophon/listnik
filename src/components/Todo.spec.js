import React from 'react'
import ReactDOM from 'react-dom'
import {List} from 'react-mdl'

import Todo from './Todo'


describe('Todo component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <List>
        <Todo todo={{title: 'foo', completed: true}} />
      </List>,
        div)
  })
})
