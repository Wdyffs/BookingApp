import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    alert(`Entered name is - ${this.state.value}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input type='text' name='name' value={this.state.value} onChange={this.handleChange} />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}