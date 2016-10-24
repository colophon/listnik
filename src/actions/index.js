import * as types from './constants'

let nextId = 1

export const addTodo = title => {
  return (
  {type: types.ADD_TODO,
   payload: {id: nextId++, title}}
)}

export const editTodo = id => ({type: types.EDIT_TODO, payload: {id}})

export const saveTodo = (id, title) => ({type: types.SAVE_TODO, payload: {id, title}})

export const toggleTodo = id => ({type: types.TOGGLE_TODO, payload: {id}})

export const filterTodos = filter => ({type: types.FILTER_TODOS, payload: {filter}})
