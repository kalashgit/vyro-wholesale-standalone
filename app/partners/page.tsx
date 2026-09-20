'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, LockKeyhole, RotateCcw, ShieldCheck } from 'lucide-react'
import type { PartnerProfile } from '@/lib/partners'

export default function PartnersPage() {
  const [code, setCode] = useState('')
  const [partner, setPartner] = useState<PartnerProfile | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function validateCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/partners/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
      const result = await response.json()

      if (!response.ok) {
        setPartner(null)
        setError(result.error ?? 'That partner code is not recognised.')
        return
      }

      setPartner(result.partner)
    } catch {
      setError('We could not validate that code. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function resetPortal() {
    setPartner(null)
    setCode('')
    setError('')
  }

  return (
    <main className="partner-page">
      <div className="partner-orb" aria-hidden="true" />
      <header className="partner-header">
        <a className="partner-brand" href="/" aria-label="VYRO home">
          VYRO<span />
        </a>
        <span className="partner-status"><span />Private partner access</span>
      </header>

      <section className="partner-shell">
        {!partner ? (
          <div className="partner-gate">
            <div className="partner-kicker"><LockKeyhole size={14} /> NEGOTIATED PRICING</div>
            <h1>Your VYRO<br /><em>partner desk.</em></h1>
            <p>Enter your private access code to view the pricing agreed for your business.</p>
            <form className="partner-form" onSubmit={validateCode}>
              <label htmlFor="partner-code">Partner access code</label>
              <div className="partner-input-row">
                <input
                  id="partner-code"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  placeholder="VYRO-••••-••"
                  autoComplete="off"
                  spellCheck={false}
                  required
                  aria-invalid={Boolean(error)}
                />
                <button type="submit" disabled={loading} aria-label="Unlock pricing">
                  {loading ? 'Checking…' : <ArrowRight size={19} />}
                </button>
              </div>
              {error && <p className="partner-error" role="alert">{error}</p>}
            </form>
            <div className="partner-note"><ShieldCheck size={16} /> Your pricing is private to your business.</div>
          </div>
        ) : (
          <div className="partner-pricing">
            <div className="pricing-heading">
              <div>
                <div className="partner-kicker"><span className="live-dot" /> VERIFIED PARTNER</div>
                <h1>{partner.partnerName}<br /><em>pricing desk.</em></h1>
              </div>
              <button className="reset-button" onClick={resetPortal}><RotateCcw size={15} /> Change code</button>
            </div>
            <p className="pricing-intro">Your negotiated ex-VAT prices are ready. Contact the VYRO team for availability and volume planning.</p>
            <div className="partner-products">
              {partner.products.map((product) => (
                <article className="partner-product" key={product.key}>
                  <div className="partner-product-image"><img src={product.image} alt={`${product.name} console and controller`} /></div>
                  <div className="partner-product-copy">
                    <span>VYRO CATALOGUE</span>
                    <h2>{product.name}</h2>
                    <strong>€{product.price.toFixed(2)}</strong>
                    <small>EX VAT / UNIT</small>
                  </div>
                </article>
              ))}
            </div>
            <a className="partner-contact" href="https://wa.me/306978255016" target="_blank" rel="noreferrer">Ask about availability <ArrowRight size={17} /></a>
          </div>
        )}
      </section>

      <style jsx>{`
        .partner-page { min-height: 100vh; overflow: hidden; position: relative; background: #06080c; color: #f3f7fb; }
        .partner-orb { position: absolute; width: 420px; height: 420px; top: -180px; right: -170px; border-radius: 50%; background: rgba(45,140,255,.18); filter: blur(70px); pointer-events: none; }
        .partner-header { max-width: 1240px; height: 78px; margin: 0 auto; padding: 0 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,.08); position: relative; z-index: 1; }
        .partner-brand { color: #f3f7fb; text-decoration: none; font-size: 22px; letter-spacing: .15em; font-weight: 800; }
        .partner-brand span { width: 7px; height: 7px; display: inline-block; margin-left: 7px; border-radius: 50%; background: #2d8cff; box-shadow: 0 0 13px #2d8cff; }
        .partner-status { color: #8792a3; display: inline-flex; align-items: center; gap: 8px; font-size: 11px; letter-spacing: .05em; text-transform: uppercase; }
        .partner-status span, .live-dot { width: 6px; height: 6px; border-radius: 50%; background: #69e7ff; box-shadow: 0 0 10px #69e7ff; }
        .partner-shell { max-width: 1100px; margin: 0 auto; padding: 74px 20px 90px; position: relative; z-index: 1; }
        .partner-gate { max-width: 620px; margin: 0 auto; padding: 46px 0; }
        .partner-kicker { color: #69e7ff; display: flex; align-items: center; gap: 9px; font-size: 10px; font-weight: 800; letter-spacing: .17em; }
        h1 { margin: 22px 0 0; font-size: clamp(48px, 8vw, 82px); line-height: .94; letter-spacing: -.07em; }
        h1 em { color: #2d8cff; font-style: normal; text-shadow: 0 0 32px rgba(45,140,255,.35); }
        .partner-gate > p, .pricing-intro { max-width: 480px; margin: 26px 0 0; color: #8792a3; font-size: 16px; line-height: 1.55; }
        .partner-form { margin-top: 38px; }
        .partner-form label { display: block; margin-bottom: 10px; color: #d5deea; font-size: 12px; font-weight: 700; }
        .partner-input-row { display: flex; gap: 10px; }
        .partner-input-row input { min-width: 0; flex: 1; height: 54px; padding: 0 17px; border: 1px solid rgba(177,205,234,.2); border-radius: 12px; outline: none; background: #0d1118; color: #f3f7fb; font-size: 16px; letter-spacing: .08em; }
        .partner-input-row input:focus { border-color: #2d8cff; box-shadow: 0 0 0 3px rgba(45,140,255,.14); }
        .partner-input-row button { width: 54px; min-width: 54px; border: 0; border-radius: 12px; background: #2d8cff; color: white; display: grid; place-items: center; }
        .partner-input-row button:disabled { opacity: .6; }
        .partner-error { margin: 12px 0 0 !important; color: #ff817a !important; font-size: 13px !important; }
        .partner-note { display: flex; align-items: center; gap: 9px; margin-top: 28px; color: #8792a3; font-size: 12px; }
        .pricing-heading { display: flex; justify-content: space-between; align-items: end; gap: 20px; }
        .pricing-intro { margin-bottom: 30px; }
        .reset-button { min-height: 42px; padding: 0 14px; border: 1px solid rgba(177,205,234,.18); border-radius: 999px; background: transparent; color: #c9d4e2; display: inline-flex; align-items: center; gap: 8px; font-size: 12px; }
        .partner-products { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
        .partner-product { min-width: 0; overflow: hidden; border: 1px solid rgba(177,205,234,.14); border-radius: 18px; background: linear-gradient(145deg, rgba(17,23,34,.94), rgba(9,12,18,.94)); }
        .partner-product-image { height: 230px; background: radial-gradient(circle at 50% 45%, rgba(45,140,255,.18), transparent 65%); }
        .partner-product-image img { width: 100%; height: 100%; object-fit: contain; mix-blend-mode: screen; }
        .partner-product-copy { padding: 19px 20px 22px; }
        .partner-product-copy span { color: #69e7ff; font-size: 9px; font-weight: 800; letter-spacing: .16em; }
        .partner-product-copy h2 { margin-top: 8px; font-size: 18px; letter-spacing: -.03em; }
        .partner-product-copy strong { display: block; margin-top: 20px; color: #fff; font-size: 28px; letter-spacing: -.04em; }
        .partner-product-copy small { color: #8792a3; font-size: 9px; letter-spacing: .13em; }
        .partner-contact { width: fit-content; min-height: 48px; margin-top: 26px; padding: 0 18px; border-radius: 999px; background: #2d8cff; color: white; display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-size: 12px; font-weight: 800; }
        @media (max-width: 640px) { .partner-header { height: 70px; } .partner-status { font-size: 9px; } .partner-shell { padding-top: 50px; } .partner-gate { padding: 25px 0; } .partner-products { grid-template-columns: 1fr; } .partner-product-image { height: 210px; } .pricing-heading { align-items: start; flex-direction: column; } .reset-button { margin-top: 4px; } }
      `}</style>
    </main>
  )
}
