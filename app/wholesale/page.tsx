'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowRight,
  Check,
  Globe2,
  Menu,
  PackageCheck,
  ShieldCheck,
  X,
} from 'lucide-react'

type Language = 'EL' | 'EN'

const products = [
  {
    name: 'PS5 Pro',
    five: '€725',
    ten: '€715',
    twenty: '€705',
    fifty: '€690',
  },
  {
    name: 'PS5 Digital',
    five: '€475',
    ten: '€465',
    twenty: '€455',
    fifty: '€445',
  },
  {
    name: 'PS5 Slim Disc',
    five: '€535',
    ten: '€525',
    twenty: '€515',
    fifty: '€505',
  },
  {
    name: 'PS5 Slim Digital',
    five: '€475',
    ten: '€465',
    twenty: '€455',
    fifty: '€445',
  },
  {
    name: 'PS5 Disc Drive',
    five: '€68',
    ten: '€67',
    twenty: '€65',
    fifty: '€64',
  },
  {
    name: 'DualSense Controller',
    five: '€54',
    ten: '€53',
    twenty: '€52',
    fifty: '€51',
  },
]

export default function WholesalePage() {
  const [language, setLanguage] = useState<Language>('EL')
  const [menuOpen, setMenuOpen] = useState(false)

  const greek = language === 'EL'

  const copy = greek
    ? {
        retail: 'ΛΙΑΝΙΚΗ',
        pricing: 'ΤΙΜΕΣ',
        process: 'ΔΙΑΔΙΚΑΣΙΑ',
        contact: 'ΕΠΙΚΟΙΝΩΝΙΑ',

        heroLabel: 'VYRO ΧΟΝΔΡΙΚΗ',
        heroHeadline: 'Καλύτερη τιμή. Μεγαλύτερος όγκος.',
        heroText:
          'PlayStation hardware για καταστήματα, e-commerce επιχειρήσεις και εμπορικούς συνεργάτες.',

        viewPricing: 'Δείτε τιμές',
        requestQuote: 'Ζητήστε προσφορά',

        moq: 'Ελάχιστη παραγγελία 5 τεμάχια',
        volumePricing: 'Τιμολόγηση βάσει όγκου',
        confirmation: 'Επιβεβαίωση πριν την πληρωμή',

        pricingLabel: 'ΤΙΜΕΣ ΧΟΝΔΡΙΚΗΣ',
        pricingHeadline: 'Η τιμή αλλάζει με την ποσότητα.',
        pricingText:
          'Επαγγελματικές τιμές ανά μονάδα, ανάλογα με τον όγκο της παραγγελίας σας.',
        product: 'ΠΡΟΪΟΝ',

        priceNote:
          'Οι τιμές υπόκεινται σε διαθεσιμότητα και τελική επιβεβαίωση παραγγελίας.',

        volumeLabel: 'VOLUME',
        volumeHeadline: 'Χτισμένο για όγκο.',
        volumeText:
          'Από την πρώτη εμπορική παραγγελία μέχρι μεγαλύτερες ποσότητες, η τιμολόγηση προσαρμόζεται στον όγκο.',
        units: 'ΤΕΜΑΧΙΑ',

        processLabel: 'ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ',
        processHeadline: 'Απλή διαδικασία. Καθαροί όροι.',

        step1Title: 'Στείλτε τι χρειάζεστε',
        step1Text:
          'Πείτε μας το προϊόν και την ποσότητα που εξετάζετε.',

        step2Title: 'Επιβεβαιώνουμε την προσφορά',
        step2Text:
          'Επιβεβαιώνουμε διαθεσιμότητα, τελική τιμή και όρους παραγγελίας.',

        step3Title: 'Ολοκληρώνουμε την παραγγελία',
        step3Text:
          'Μετά την αποδοχή της προσφοράς, προχωράμε σε πληρωμή και εκπλήρωση.',

        tradeLabel: 'VYRO TRADE',
        tradeHeadline: 'Γνωρίζετε τους όρους πριν προχωρήσετε.',
        tradeText:
          'Η τιμή, η ποσότητα, η διαθεσιμότητα και οι όροι της συναλλαγής επιβεβαιώνονται πριν ζητηθεί πληρωμή.',

        tradePoint1: 'Τιμολόγηση βάσει ποσότητας',
        tradePoint2: 'Επιβεβαίωση διαθεσιμότητας',
        tradePoint3: 'Όροι πριν την πληρωμή',

        quoteLabel: 'ΕΜΠΟΡΙΚΕΣ ΠΑΡΑΓΓΕΛΙΕΣ',
        quoteHeadline: 'Τι χρειάζεστε;',
        quoteText:
          'Στείλτε μας το μοντέλο και την ποσότητα που εξετάζετε. Θα επιβεβαιώσουμε την τρέχουσα τιμή, τη διαθεσιμότητα και τους όρους παραγγελίας.',

        quoteButton: 'Στείλτε μας στο WhatsApp',
        quoteNote:
          'Επικοινωνήστε μαζί μας μέσω WhatsApp για τιμές και διαθεσιμότητα.',

        footerText: 'Technology retail & wholesale.',
        terms: 'Όροι',
        privacy: 'Απόρρητο',
      }
    : {
        retail: 'RETAIL',
        pricing: 'PRICING',
        process: 'PROCESS',
        contact: 'CONTACT',

        heroLabel: 'VYRO WHOLESALE',
        heroHeadline: 'Better pricing. Bigger volume.',
        heroText:
          'PlayStation hardware for retailers, e-commerce businesses and trade partners.',

        viewPricing: 'View pricing',
        requestQuote: 'Request a quote',

        moq: '5 unit minimum order',
        volumePricing: 'Volume-based pricing',
        confirmation: 'Confirmation before payment',

        pricingLabel: 'WHOLESALE PRICING',
        pricingHeadline: 'Pricing that scales with quantity.',
        pricingText:
          'Professional per-unit pricing based on the volume of your order.',
        product: 'PRODUCT',

        priceNote:
          'Pricing is subject to availability and final order confirmation.',

        volumeLabel: 'VOLUME',
        volumeHeadline: 'Built for volume.',
        volumeText:
          'From your first trade order to larger quantities, pricing scales with your requirements.',
        units: 'UNITS',

        processLabel: 'HOW IT WORKS',
        processHeadline: 'Simple process. Clear terms.',

        step1Title: 'Send your requirement',
        step1Text:
          'Tell us the product and quantity you are considering.',

        step2Title: 'We confirm the quote',
        step2Text:
          'We confirm availability, final pricing and order terms.',

        step3Title: 'Complete the order',
        step3Text:
          'Once the quote is accepted, we proceed with payment and fulfilment.',

        tradeLabel: 'VYRO TRADE',
        tradeHeadline: 'Know the terms before you proceed.',
        tradeText:
          'Pricing, quantity, availability and transaction terms are confirmed before payment is requested.',

        tradePoint1: 'Quantity-based pricing',
        tradePoint2: 'Availability confirmation',
        tradePoint3: 'Terms before payment',

        quoteLabel: 'TRADE ORDERS',
        quoteHeadline: 'What do you need?',
        quoteText:
          'Send us the model and quantity you are considering. We will confirm current pricing, availability and order terms.',

        quoteButton: 'Message us on WhatsApp',
        quoteNote:
          'Contact us through WhatsApp for pricing and availability.',

        footerText: 'Technology retail & wholesale.',
        terms: 'Terms',
        privacy: 'Privacy',
      }

  const closeMenu = () => setMenuOpen(false)

  const whatsappMessage = greek
    ? 'Καλησπέρα, ενδιαφέρομαι για χονδρική VYRO. Θα ήθελα πληροφορίες για τιμές και διαθεσιμότητα.'
    : "Hello, I'm interested in VYRO wholesale. I'd like information about pricing and availability."

  const whatsappUrl = `https://wa.me/306978255016?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <main className="site-shell wholesale-page">
      {/* HEADER */}

      <header className="site-header">
        <Link href="/" className="brand" onClick={closeMenu}>
          <span className="brand-dot" />
          VYRO
        </Link>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <Link href="/" onClick={closeMenu}>
            {copy.retail}
          </Link>

          <a href="#pricing" onClick={closeMenu}>
            {copy.pricing}
          </a>

          <a href="#process" onClick={closeMenu}>
            {copy.process}
          </a>

          <a href="#quote" onClick={closeMenu}>
            {copy.contact}
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLanguage(greek ? 'EN' : 'EL')}
            aria-label="Change language"
          >
            <Globe2 size={15} />
            {language}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="wholesale-hero">
        <div className="wholesale-hero-glow" />

        <div className="wholesale-hero-inner">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.heroLabel}
          </div>

          <h1>{copy.heroHeadline}</h1>

          <p>{copy.heroText}</p>

          <div className="wholesale-hero-actions">
            <a href="#pricing" className="button button-primary">
              {copy.viewPricing}
              <ArrowDown size={15} />
            </a>

            <a href="#quote" className="button button-ghost">
              {copy.requestQuote}
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="wholesale-hero-meta">
            <span>
              <PackageCheck size={15} />
              {copy.moq}
            </span>

            <span>
              <Check size={15} />
              {copy.volumePricing}
            </span>

            <span>
              <ShieldCheck size={15} />
              {copy.confirmation}
            </span>
          </div>
        </div>
      </section>

      {/* PRICING */}

      <section
        id="pricing"
        className="section wholesale-pricing-section"
      >
        <div className="wholesale-pricing-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.pricingLabel}
          </div>

          <h2>{copy.pricingHeadline}</h2>

          <p>{copy.pricingText}</p>
        </div>

        <div className="wholesale-table-wrap">
          <table className="wholesale-table">
            <thead>
              <tr>
                <th>{copy.product}</th>
                <th>5+</th>
                <th>10+</th>
                <th>20+</th>
                <th>50+</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td className="wholesale-product-name">
                    {product.name}
                  </td>

                  <td>{product.five}</td>
                  <td>{product.ten}</td>
                  <td>{product.twenty}</td>

                  <td className="wholesale-best-price">
                    {product.fifty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="wholesale-price-note">
          {copy.priceNote}
        </p>
      </section>

      {/* VOLUME STATEMENT */}

      <section className="section wholesale-volume-section">
        <div className="wholesale-volume-card">
          <div className="wholesale-volume-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.volumeLabel}
            </div>

            <h2>{copy.volumeHeadline}</h2>

            <p>{copy.volumeText}</p>
          </div>

          <div
            className="wholesale-volume-numbers"
            aria-hidden="true"
          >
            <div>
              <strong>5+</strong>
              <span>{copy.units}</span>
            </div>

            <div>
              <strong>20+</strong>
              <span>{copy.units}</span>
            </div>

            <div className="is-highlighted">
              <strong>50+</strong>
              <span>{copy.units}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section
        id="process"
        className="section wholesale-process-section"
      >
        <div className="wholesale-process-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.processLabel}
          </div>

          <h2>{copy.processHeadline}</h2>
        </div>

        <div className="wholesale-process-grid">
          <article className="wholesale-process-card">
            <span className="wholesale-step-number">01</span>

            <div>
              <h3>{copy.step1Title}</h3>
              <p>{copy.step1Text}</p>
            </div>
          </article>

          <article className="wholesale-process-card">
            <span className="wholesale-step-number">02</span>

            <div>
              <h3>{copy.step2Title}</h3>
              <p>{copy.step2Text}</p>
            </div>
          </article>

          <article className="wholesale-process-card">
            <span className="wholesale-step-number">03</span>

            <div>
              <h3>{copy.step3Title}</h3>
              <p>{copy.step3Text}</p>
            </div>
          </article>
        </div>
      </section>

      {/* TRADE STANDARD */}

      <section className="section wholesale-standard-section">
        <div className="wholesale-standard-card">
          <div className="wholesale-standard-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.tradeLabel}
            </div>

            <h2>{copy.tradeHeadline}</h2>

            <p>{copy.tradeText}</p>
          </div>

          <div className="wholesale-standard-points">
            <div>
              <Check size={17} />
              <span>{copy.tradePoint1}</span>
            </div>

            <div>
              <Check size={17} />
              <span>{copy.tradePoint2}</span>
            </div>

            <div>
              <Check size={17} />
              <span>{copy.tradePoint3}</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE / WHATSAPP */}

      <section
        id="quote"
        className="section wholesale-quote-section"
      >
        <div className="wholesale-quote-card">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.quoteLabel}
          </div>

          <h2>{copy.quoteHeadline}</h2>

          <p>{copy.quoteText}</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            {copy.quoteButton}
            <ArrowRight size={15} />
          </a>

          <small>{copy.quoteNote}</small>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="site-footer retail-footer">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span className="brand-dot" />
            VYRO
          </Link>

          <p>{copy.footerText}</p>
        </div>

        <div className="footer-links">
          <Link href="/">
            {copy.retail}
          </Link>

          <Link href="/wholesale">
            {greek ? 'ΧΟΝΔΡΙΚΗ' : 'WHOLESALE'}
          </Link>

          <Link href="/creators">
            CREATORS
          </Link>
        </div>

        <div className="footer-legal">
          <span>© 2026 VYRO</span>

          <Link href="/terms">
            {copy.terms}
          </Link>

          <Link href="/privacy">
            {copy.privacy}
          </Link>
        </div>
      </footer>
    </main>
  )
}