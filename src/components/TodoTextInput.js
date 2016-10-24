import React, {Component, PropTypes} from 'react'

import { Textfield } from 'react-mdl'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string.isRequired
  }

  state = {
    text: this.props.text || ''
  }

  handleSave = () => {
    const title = this.state.text.trim()
    if (title.length > 0) {
      this.props.onSave(this.state.text)
      this.setState({ text: ''})
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleBlur = e => {
    this.handleSave()
  }

  handleKeyDown = e => {
    if (e.which === 13) {
      this.handleSave()
    }
  }

  handleClick = e => {
    console.log('onClick')
    e.target.select()
  }

  render() {
    return (
      <Textfield
        label={this.props.placeholder}
        floatingLabel
        value={this.state.text}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}
