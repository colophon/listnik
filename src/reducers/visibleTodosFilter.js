import { TODO_FILTERS, FILTER_TODOS } from '../actions/constants'

const initialState = TODO_FILTERS.ACTIVE

export default function visibleTodosFilter(state = initialState, action) {
  switch(action.type) {
    case FILTER_TODOS:
      return action.payload.filter
    default:
      return state
  }
}
