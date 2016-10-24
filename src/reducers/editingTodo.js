import { EDIT_TODO } from '../actions/constants'

const initialState = null

export default function editingTodo(state = initialState, action) {
  switch(action.type) {
    case EDIT_TODO:
      return action.payload.id
    default:
      return state
  }
}
