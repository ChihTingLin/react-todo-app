import React, { useState, useEffect } from 'react';

function HooksExample() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://5db91ed6177b350014ac8050.mockapi.io/api/users/1/todo')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])
  return (
    <div>
      {number}
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  )
}

export default HooksExample;