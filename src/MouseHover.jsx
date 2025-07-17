import React, { useState } from 'react'

function MouseHover() {
    const [mouseMover, setMouseMover] = useState({
        x:null, y:null
    })
  return (
    <div>MouseHover</div>
  )
}

export default MouseHover