import React, {PropTypes} from 'react'

import Toolbar from './Toolbar'
import TodoList from './TodoList'
import {TODO_FILTERS} from '../actions/constants'

const MainBody = ({filter, editing, todos, handleChangeFilter, handleClearTodos,
                   handleEditTodo, handleToggleTodo, handleSaveTodo}) => (
  <div>
    <Toolbar
      filter={filter}
      todos={todos}
      handleChangeFilter={handleChangeFilter}
      handleClearTodos={handleClearTodos}
    />
    <TodoList
      editing={editing}
      filter={filter}
      todos={todos}
      handleEditTodo={handleEditTodo}
      handleToggleTodo={handleToggleTodo}
      handleSaveTodo={handleSaveTodo}
      />
  </div>
)

MainBody.propTypes = {
  filter: PropTypes.oneOf(Object.keys(TODO_FILTERS).map((k) => TODO_FILTERS[k])),
  editing: PropTypes.number,
  todos: PropTypes.array.isRequired,
  handleChangeFilter: PropTypes.func,
  handleClearTodos: PropTypes.func,
  handleEditTodo: PropTypes.func,
  handleToggleTodo: PropTypes.func,
  handleSaveTodo: PropTypes.func,
}

export default MainBody
