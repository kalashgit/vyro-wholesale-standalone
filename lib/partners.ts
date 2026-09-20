export type PartnerProduct = {
  key: 'pro' | 'digital' | 'slimDisc' | 'slimDigital'
  name: string
  image: string
  price: number
}

export type PartnerProfile = {
  partnerName: string
  code: string
  products: PartnerProduct[]
}

const catalogue = [
  { key: 'pro', name: 'PS5 Pro', image: '/images/ps5-pro.png' },
  { key: 'digital', name: 'PS5 Digital Edition', image: '/images/ps5-digital.png' },
  { key: 'slimDisc', name: 'PS5 Slim Disc Edition', image: '/images/ps5-slim-disc.png' },
  { key: 'slimDigital', name: 'PS5 Slim Digital', image: '/images/ps5-slim-digital.png' },
] as const

const partnerProfiles: Record<string, Omit<PartnerProfile, 'code'>> = {
  'VYRO-RETAIL-10': {
    partnerName: 'Retail Partner',
    products: catalogue.map((product, index) => ({
      ...product,
      price: [720, 470, 525, 468][index],
    })),
  },
  'VYRO-BULK-20': {
    partnerName: 'Bulk Partner',
    products: catalogue.map((product, index) => ({
      ...product,
      price: [695, 452, 508, 450][index],
    })),
  },
}

export function findPartner(code: string) {
  const normalizedCode = code.trim().toUpperCase()
  const profile = partnerProfiles[normalizedCode]

  if (!profile) return null

  return {
    code: normalizedCode,
    ...profile,
  }
}

export function getPartnerCodes() {
  return Object.keys(partnerProfiles)
}
