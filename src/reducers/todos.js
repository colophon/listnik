import { ADD_TODO, SAVE_TODO, TOGGLE_TODO, CLEAR_COMPLETED_TODOS } from '../actions/constants'

export const initialState = [
  {
    title: 'Do stuff',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.payload.id,
          title: action.payload.title,
          completed: false
        },
        ...state
      ]
    case SAVE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ?
          { ...todo, title: action.payload.title} :
          todo
        )
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ?
          { ...todo, completed: !todo.completed} :
          todo
      )
    case CLEAR_COMPLETED_TODOS:
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}
