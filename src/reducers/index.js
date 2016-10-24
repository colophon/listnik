import { combineReducers } from 'redux'

import todos from './todos'
import editingTodo from './editingTodo'
import visibleTodosFilter from './visibleTodosFilter'

const rootReducer = combineReducers({
  todos,
  editingTodo,
  visibleTodosFilter,
})

export default rootReducer
