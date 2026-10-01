import { useId } from 'react'

type ProductPhotoProps = { src: string; alt: string; className?: string }

// Only transparent canvas padding is omitted. Merchandise pixels stay intact.
const productViews: Record<string, readonly [number, number, number, number, number, number]> = {
  "/images/ps5-pro.png": [
    1920,
    1080,
    781,
    87,
    730,
    861
  ],
  "/images/ps5-slim-disc.PNG": [
    750,
    750,
    8,
    3,
    703,
    733
  ],
  "/images/ps5-digital.PNG": [
    1200,
    800,
    224,
    8,
    750,
    783
  ],
  "/images/ps5-slim-digital.png": [
    1200,
    800,
    93,
    7,
    1021,
    781
  ],
  "/images/dual-sense.png": [
    800,
    450,
    151,
    58,
    498,
    332
  ],
  "/images/ps5-disc-drive.png": [
    640,
    492,
    231,
    82,
    180,
    346
  ]
}

export default function ProductPhoto({ src, alt, className }: ProductPhotoProps) {
  const titleId = useId()
  const [width, height, x, y, cropWidth, cropHeight] = productViews[src] ?? [1, 1, 0, 0, 1, 1]
  return (
    <svg className={'vyro-product-photo ' + (className ?? '')}
      viewBox={[x, y, cropWidth, cropHeight].join(' ')}
      preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby={titleId}
      xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>{alt}</title>
      <image href={src} width={width} height={height} />
    </svg>
  )
}
