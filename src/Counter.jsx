import React, { useState } from 'react'

const Counter = () => {
    const[count,setcount] = useState(0)
  return (
    <div>
      <p data-testid ="count-value"> {count} </p>
      <button onClick={()=> setcount((count)=> count+1)}> inc </button>
      <button onClick={()=> setcount((count)=> count-1)}> dec </button>
    </div>
  )
}

export default Counter
