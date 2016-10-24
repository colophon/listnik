import editingTodo from './editingTodo'
import {editTodo} from '../actions'

describe('editingTodo reducer', () => {
  it('initializes to null', () => {
    expect(editingTodo(undefined, {})).toBeNull()
  })
  it('handles EDIT_TODO', () => {
    expect(editingTodo(null, editTodo(1))).toEqual(1)
  })
})
