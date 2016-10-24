import React, {PropTypes} from 'react'

import {Checkbox, ListItem, ListItemContent, ListItemAction} from 'react-mdl'

const Todo = ({todo, onDoubleClick, onCheck}) =>  (
  <ListItem>
    <ListItemAction>
      <Checkbox checked={todo.completed} onChange={e => {onCheck(todo.id)}}/>
    </ListItemAction>
    <ListItemContent
      onDoubleClick={e => {onDoubleClick(todo.id)}}
      style={todo.completed ? {textDecoration: 'line-through'} : {}}
    >
      {todo.title}
    </ListItemContent>
  </ListItem>
)

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onDoubleClick: PropTypes.func,
  onCheck: PropTypes.func
}

export default Todo
