import visibleTodosFilter from './visibleTodosFilter'
import {filterTodos} from '../actions'
import { TODO_FILTERS} from '../actions/constants'

describe('visibleTodosFilter reducer', () => {
  it('initializes to ACTIVE', () => {
    expect(visibleTodosFilter(undefined, {})).toEqual(TODO_FILTERS.ACTIVE)
  })
  it('handles FILTER_TODOS', () => {
    expect(visibleTodosFilter(
      TODO_FILTERS.ACTIVE,
      filterTodos(TODO_FILTERS.COMPLETE))).toEqual(TODO_FILTERS.COMPLETE)
  })
})
