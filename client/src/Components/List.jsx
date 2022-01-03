import React from "react";

function ListItem(props) {
  return (
    <li>{props.value}</li>
  )
}

export function List(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) => {
    return (
      <ListItem key={number.toString()} value={number} />
    )
  })
  return <ul>
    {listItems}
  </ul>
}