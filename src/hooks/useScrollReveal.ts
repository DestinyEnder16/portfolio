import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

export default function useScrollReveal(
  ref: RefObject<Element | null>,
  threshold = 0.12,
): boolean {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])

  return visible
}
