import { useEffect, useState } from "react"

interface MouseProp {
  x: number
  y: number
}

export const useMousePosition = () => {
  const [mousePos, setMousePos] = useState<MouseProp>({x: 0, y: 0})

  const updateMousePosition = (e: any) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return mousePos
}