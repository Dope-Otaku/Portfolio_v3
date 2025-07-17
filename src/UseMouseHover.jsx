import { useEffect, useState } from 'react'

function useMouseHover() {
    const [mouseMover, setMouseMover] = useState({
        x: null, y: null
    })

    useEffect(() => {
        const updatePointer = (event) => {
            setMouseMover({ x: event.clientX, y: event.clientY })
        }
        window.addEventListener('mousemove', updatePointer)

        return () => {
            window.removeEventListener('mousemove', updatePointer)
        }
    }, [])

    return mouseMover
}

export default useMouseHover
// export {updatePointer}