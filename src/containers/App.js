import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Layout, Header, Content, Grid, Cell} from 'react-mdl'

import AddTodo from '../components/TodoTextInput'
import TodoList from '../components/TodoList'
import VisibleTodosFilter from '../components/VisibleTodosFilter'

import * as TodoActions from '../actions'

class App extends Component {

  render() {
    return (
      <Layout>
        <Header title='listnik'>
        </Header>
        <Content>
          <Grid>
            <Cell col={8} shadow={2} style={{padding: '1em'}}>
              <AddTodo onSave={this.props.actions.addTodo} placeholder='What do you want to get done?'/>
            </Cell>
            <Cell col={8} shadow={2} style={{padding: '1em'}}>
              <VisibleTodosFilter
                value={this.props.filter}
                handler={this.props.actions.filterTodos}/>
              <TodoList
                editing={this.props.editing}
                filter={this.props.filter}
                todos={this.props.todos}
                onEditTodo={this.props.actions.editTodo}
                onToggleTodo={this.props.actions.toggleTodo}
                onSave={this.props.actions.saveTodo}
                />
            </Cell>
          </Grid>
        </Content>
      </Layout>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  editing: state.editingTodo,
  filter: state.visibleTodosFilter,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
