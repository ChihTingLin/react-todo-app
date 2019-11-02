import React from 'react'

function TodoItem({ item, onChecked, onDelete }) {
  const itemStyle = {
    borderRadius: '5px',
    padding: '20px 10px',
    margin: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px 0px',
    display: 'flex',
    justifyContent: 'space-between'
  }
  const { isCompleted, title } = item;

  return (
    <div style={itemStyle}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onChecked(item)}
      />
      <div>{title}</div>
      <button type="button" onClick={() => onDelete(item.id)}>Remove</button>
    </div>
  )
}

export default TodoItem;