import React, { useEffect, useState } from 'react'

function useMouseHover() {
    const [mouseMover, setMouseMover] = useState({
        x:null, y:null
    })

    useEffect(()=>{
        const updatePointer = setMouseMover({x:event.clientX, y:event.clientY})
        window.addEventListener('mousemove',updatePointer)

        return()=>{
            window.removeEventListener('mousemove',updatePointer)
        }
    },[])


  return (
    mouseMover
  )
}

export default useMouseHover