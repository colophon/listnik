import React from 'react'

import {TODO_FILTERS} from '../actions/constants'
import Menu from './Menu'

const todoFilters = [{label: 'Active', key: TODO_FILTERS.ACTIVE},
                     {label: 'Complete', key: TODO_FILTERS.COMPLETE},
                     {label: 'All', key: TODO_FILTERS.ALL},
                    ]

const VisibleTodosFilter = ({value, handler}) => (
  <Menu items={todoFilters} handler={handler} value={value}/>
)

export default VisibleTodosFilter
