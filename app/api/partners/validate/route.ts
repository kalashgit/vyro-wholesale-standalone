import { NextResponse } from 'next/server'
import { findPartner } from '@/lib/partners'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const code = typeof body?.code === 'string' ? body.code : ''
  const partner = findPartner(code)

  if (!partner) {
    return NextResponse.json(
      { error: 'Invalid partner code.' },
      { status: 401 },
    )
  }

  return NextResponse.json({ partner })
}
