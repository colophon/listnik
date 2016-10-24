import React, {PropTypes} from 'react'

import {Button} from 'react-mdl'

import VisibleTodosFilter from './VisibleTodosFilter'
import {TODO_FILTERS} from '../actions/constants'

const Toolbar = ({filter, todos, handleChangeFilter, handleClearTodos}) => {
  const enableClearButton = (todos.findIndex((v)=>v.completed) > -1)
  return(
    <div>
      <VisibleTodosFilter
        value={filter}
        handler={handleChangeFilter}/>
      <Button
        disabled={!enableClearButton}
        onClick={()=>{handleClearTodos()}}
        raised>
        Clear Complete
      </Button>
    </div>
  )
}

Toolbar.propTypes = {
  filter: PropTypes.oneOf(Object.keys(TODO_FILTERS).map((k) => TODO_FILTERS[k])),
  todos: PropTypes.array,
  handleChangeFilter: PropTypes.func,
  handleClearTodos: PropTypes.func,
}
export default Toolbar
