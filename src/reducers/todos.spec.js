import todos, {initialState} from './todos'
import {addTodo, toggleTodo, saveTodo, clearCompletedTodos} from '../actions'

describe('todos reducer', () => {
  it('initializes to initialState', () => {
    expect(todos(undefined, {})).toEqual(initialState)
  })
  it('handles adding a todo', () => {
    const st = todos(initialState, addTodo('foo'))
    expect(st.length).toEqual(2)
    expect(st[0].title).toEqual('foo')
  })
  it('handles toggling a todo', () => {
    expect(initialState[0].completed).toEqual(false)
    const st = todos(initialState, toggleTodo(0))
    expect(st[0].completed).toEqual(true)
  })
  it('handles updating a todo title', () => {
    const st = todos(initialState, saveTodo(0, 'foo'))
    expect(st[0].title).toEqual('foo')
  })
  describe('handles clearing completed todos', () => {
    it('clears completed todos', () => {
      const st = todos(initialState, toggleTodo(0))
      expect(todos(st,clearCompletedTodos()).length).toEqual(0)
    })
    it("it doesn't clear active todos", () => {
      expect(todos(initialState, clearCompletedTodos()).length).toEqual(1)
    })
  })
  it('handles clearing completed todos', () => {

  })
})
