import React from 'react'
import ReactDOM from 'react-dom'

import Menu from './Menu'

describe('Menu component', () => {
  it('it renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Menu items={[{label: 'Foo', key: 'FOO'}]} value='FOO'/>,
      div)
  })
})
