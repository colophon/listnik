import React, {PropTypes} from 'react'

import { Button, Menu as M, MenuItem, Icon } from 'react-mdl'

const Menu = ({items, handler, value}) => {
  const selectedItem = items.find((v) => (v.key === value))
  return (
    <span>
      <Button id="filter-menu-button">
        SHOW
        {' '}
        {selectedItem.label}
        <Icon name="arrow_drop_down" />
      </Button>
      <M target="filter-menu-button">
        {items.map(item =>
          <MenuItem key={item.label}
            onClick={(e) => {handler(item.key)}}
          >
            {item.label}
          </MenuItem>
        )}
      </M>
    </span>
  )
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  handler: PropTypes.func,
  value: PropTypes.any.isRequired
}

export default Menu
