import React from "react";

function FirstText() {
  return <h1>Hello React!</h1>
}

function SecondText() {
  return <h1>Changed text</h1>
}

export function Presentation(props) {
  let isChanged = props.isChanged;
  if (isChanged) {
    return <SecondText />
  } else {
    return <FirstText />
  }
}

function NotChangedButton(props) {
  return (
    <button onClick={props.onClick}>Change text</button>
  )
}

function ChangedButton(props) {
  return (
    <button onClick={props.onClick}>Return text</button>
  )
}

export class TextControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChanged: false
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.returnHandler = this.returnHandler.bind(this)
  }
  changeHandler() {
    this.setState(
      {
        isChanged: true
      })
  }
  returnHandler() {
    this.setState(
      {
        isChanged: false
      }
    )
  }
  render() {
    const isChanged = this.state.isChanged
    return <div>
      <Presentation isChanged={isChanged} />
      {isChanged
        ? <ChangedButton onClick={this.returnHandler} />
        : <NotChangedButton onClick={this.changeHandler} />
      }
    </div>
  }

}