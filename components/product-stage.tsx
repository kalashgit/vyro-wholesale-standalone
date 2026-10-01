'use client'

import { useEffect, useRef } from 'react'
import ProductPhoto from './product-photo'

type ProductStageProps = { src: string; name: string }

export default function ProductStage({ src, name }: ProductStageProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let x = 50
    let y = 40
    const reset = () => {
      cancelAnimationFrame(frame)
      frame = 0
      stage.style.removeProperty('--stage-x')
      stage.style.removeProperty('--stage-y')
    }
    const move = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches) return
      const bounds = stage.getBoundingClientRect()
      if (!bounds.width || !bounds.height) return
      x = Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))
      y = Math.max(0, Math.min(100, (event.clientY - bounds.top) / bounds.height * 100))
      if (frame) return
      frame = requestAnimationFrame(() => {
        stage.style.setProperty('--stage-x', x + '%')
        stage.style.setProperty('--stage-y', y + '%')
        frame = 0
      })
    }
    stage.addEventListener('pointermove', move, { passive: true })
    stage.addEventListener('pointerleave', reset)
    finePointer.addEventListener('change', reset)
    reducedMotion.addEventListener('change', reset)
    return () => {
      reset()
      stage.removeEventListener('pointermove', move)
      stage.removeEventListener('pointerleave', reset)
      finePointer.removeEventListener('change', reset)
      reducedMotion.removeEventListener('change', reset)
    }
  }, [])
  return (
    <div ref={stageRef} className="product-hero-visual vyro-stage">
      <img src="/images/vyro-stage.webp" className="vyro-stage-background"
        alt="" aria-hidden="true" width={2048} height={1152}
        loading="eager" fetchPriority="low" draggable={false} />
      <span className="vyro-stage-mark" aria-hidden="true">PRO</span>
      <div className="vyro-stage-light" aria-hidden="true" />
      <ProductPhoto src={src} alt={name} className="vyro-stage-product" />
    </div>
  )
}
