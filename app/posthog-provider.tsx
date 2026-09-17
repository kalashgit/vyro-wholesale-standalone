'use client'

import { useEffect, type ReactNode } from 'react'
import posthog from 'posthog-js'

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

    if (!key || !host || posthog.__loaded) {
      return
    }

    posthog.init(key, {
      api_host: host,
      capture_pageview: false,
      session_recording: {
        enabled: true,
      },
    })
  }, [])

  return children
}
