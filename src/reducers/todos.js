import { ADD_TODO, SAVE_TODO, TOGGLE_TODO } from '../actions/constants'

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
    default:
      return state
  }
}
