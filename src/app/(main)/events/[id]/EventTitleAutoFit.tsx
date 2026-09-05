'use client'

import {
  useEffect,
  useRef,
} from 'react'

type Props = {
  title: string
}

export default function EventTitleAutoFit({
  title,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const fit = () => {
      // PCでは既存サイズ・折返しへ戻す
      if (window.innerWidth > 768) {
        element.style.fontSize = ''
        element.style.whiteSpace = ''
        element.style.letterSpacing = ''
        return
      }

      const maxSize = 34
      const minSize = 11
      const step = 0.25

      element.style.whiteSpace = 'nowrap'
      element.style.letterSpacing = '0.01em'
      element.style.fontSize = `${maxSize}px`

      const available =
        element.getBoundingClientRect().width

      let size = maxSize

      while (
        element.scrollWidth > available &&
        size > minSize
      ) {
        size -= step
        element.style.fontSize = `${size}px`
      }
    }

    fit()

    const timer =
      window.setTimeout(fit, 120)

    const observer =
      new ResizeObserver(fit)

    if (ref.current) {
      observer.observe(ref.current)
    }

    window.addEventListener(
      'resize',
      fit
    )

    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
      window.removeEventListener(
        'resize',
        fit
      )
    }
  }, [title])

  return (
    <h1
      ref={ref}
      className="event-detail-title event-detail-title-autofit"
    >
      {title}
    </h1>
  )
}
