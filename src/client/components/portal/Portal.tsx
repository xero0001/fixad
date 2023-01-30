import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: React.ReactNode
}

export default function Portal({ children }: Props) {
  const [element, setElement] = useState<HTMLElement>()

  useEffect(() => {
    const isElementExist = typeof window !== 'undefined' && document?.getElementById('modal-portal')
    if (isElementExist) {
      setElement(document.getElementById('modal-portal'))
    }
  })

  return element && children ? createPortal(children, element) : null
}
