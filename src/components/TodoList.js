import React, {PropTypes} from 'react'
import {List} from 'react-mdl'

import Todo from './Todo'
import TodoTextInput from './TodoTextInput'
import {TODO_FILTERS} from '../actions/constants'

const showTodo = {
  [TODO_FILTERS.ALL]: (v) => true,
  [TODO_FILTERS.ACTIVE]: (v) => !v.completed,
  [TODO_FILTERS.COMPLETE]: (v) => v.completed,
}

const TodoList = ({todos, filter, editing, onEditTodo, onToggleTodo, onSave}) => {
  const visibleTodos = todos.filter(showTodo[filter])
  return (
      <List>
        {visibleTodos.map(todo => {
          if (editing !== todo.id) {
            return (<Todo key={todo.id}
                      todo={todo}
                      onDoubleClick={onEditTodo}
                      onCheck={onToggleTodo}
                    />)
          } else {
            return (<TodoTextInput key={todo.id}
                      placeholder='Edit todo'
                      text={todo.title}
                      onSave={(title) => {
                        onSave(todo.id, title)
                        onEditTodo(null)
                      }}/>)
          }
        })}
      </List>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList
