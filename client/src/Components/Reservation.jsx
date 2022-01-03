import React from "react";

export class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: false,
      numberOfGuests: 2
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    const target = evt.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <label>Is going? </label>
        <input
          type="checkbox"
          name="isGoing"
          checked={this.state.isGoing}
          onChange={this.handleChange} />
        <br />
        <label>Count of visitors: </label>
        <input
          type="number"
          name="numberOfGuests"
          value={this.state.numberOfGuests}
          onChange={this.handleChange} />
      </form>
    )
  }
}