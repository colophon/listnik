import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Layout, Header, Content, Grid, Cell} from 'react-mdl'

import AddTodo from '../components/TodoTextInput'
import MainBody from '../components/MainBody'

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
              <MainBody
                filter={this.props.filter}
                editing={this.props.editing}
                todos={this.props.todos}
                handleChangeFilter={this.props.actions.filterTodos}
                handleClearTodos={this.props.actions.clearCompletedTodos}
                handleEditTodo={this.props.actions.editTodo}
                handleToggleTodo={this.props.actions.toggleTodo}
                handleSaveTodo={this.props.actions.saveTodo}
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
