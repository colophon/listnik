import React from 'react'
import ReactDOM from 'react-dom'

import TodoTextInput from './TodoTextInput'

describe('TodoTextInput component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <TodoTextInput placeholder='a label' onSave={e=> {}} />,
      div)
  })
})
