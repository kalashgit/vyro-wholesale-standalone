'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe2,
  LockKeyhole,
  Menu,
  Package,
  ShieldCheck,
  X,
} from 'lucide-react'

type Language = 'en' | 'el'

type CreatorAccess = {
  creator: string
  code: string
}

const creatorAccess: CreatorAccess[] = [
  {
    creator: 'VagosTech',
    code: 'VYRO-VAGOSTECH',
  },
  {
    creator: 'Suartesuave',
    code: 'VYROsuartesuave',
  },
]

const creatorProducts = [
  {
    key: 'pro',
    name: 'PS5 Pro',
    greek: 'PS5 Pro',
    publicPrice: '€750.00',
    partnerPrice: '€700.00',
    note: 'Performance flagship',
    greekNote: 'Ναυαρχίδα επιδόσεων',
    image: '/images/ps5-pro.png',
    link: 'https://buy.stripe.com/aFadR25n29jwc3Z0aDcQU0b',
    tone: 'pro',
  },
  {
    key: 'digital',
    name: 'PS5 Digital Edition 825GB',
    greek: 'PS5 Digital Edition 825GB',
    publicPrice: '€489.99',
    partnerPrice: '€460.00',
    note: 'All-digital PlayStation 5',
    greekNote: 'Ψηφιακή έκδοση PlayStation 5',
    image: '/images/ps5-digital.PNG',
    link: 'https://buy.stripe.com/28EeV6dTy8fs9VRbTlcQU0a',
    tone: 'digital',
  },
  {
    key: 'slimDisc',
    name: 'PS5 Slim Disc Edition',
    greek: 'PS5 Slim Disc Edition',
    publicPrice: '€549.99',
    partnerPrice: '€530.00',
    note: 'Slimline with disc drive',
    greekNote: 'Λεπτή έκδοση με disc drive',
    image: '/images/ps5-slim-disc.PNG',
    link: 'https://buy.stripe.com/eVq8wIcPugLYaZV4qTcQU09',
    tone: 'disc',
  },
  {
    key: 'slimDigital',
    name: 'PS5 Slim Digital Edition',
    greek: 'PS5 Slim Digital Edition',
    publicPrice: '€490.00',
    partnerPrice: '€470.00',
    note: 'Slimline digital edition',
    greekNote: 'Λεπτή ψηφιακή έκδοση',
    image: '/images/ps5-slim-digital.png',
    link: 'https://buy.stripe.com/bJe14g6r6fHU3xt2iLcQU0e',
    tone: 'slim',
  },
  {
    key: 'discDrive',
    name: 'Sony PS5 Disc Drive',
    greek: 'Sony PS5 Disc Drive',
    publicPrice: '',
    partnerPrice: '€69.99',
    note: 'For compatible PS5 models',
    greekNote: 'Για συμβατά μοντέλα PS5',
    image: '/images/ps5-disc-drive.png',
    link: 'https://buy.stripe.com/fZu4gscPucvI9VR7D5cQU0c',
    tone: 'discDrive',
  },
  {
    key: 'controller',
    name: 'DualSense PS5 Controller',
    greek: 'Χειριστήριο DualSense PS5',
    publicPrice: '',
    partnerPrice: '€55.99',
    note: 'Wireless PlayStation controller',
    greekNote: 'Ασύρματο χειριστήριο PlayStation',
    image: '/images/dual-sense.png',
    link: 'https://buy.stripe.com/7sY4gseXCeDQec74qTcQU0d',
    tone: 'controller',
  },
]

function normalizeCode(value: string) {
  return value.trim().toUpperCase()
}

export default function CreatorsPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [code, setCode] = useState('')
  const [creatorName, setCreatorName] = useState<string | null>(null)
  const [hasError, setHasError] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  const menuRef = useRef<HTMLButtonElement>(null)
  const catalogueRef = useRef<HTMLDivElement>(null)
  const welcomeRef = useRef<HTMLHeadingElement>(null)

  const accessGranted = creatorName !== null
  const isGreek = language === 'el'

  const copy = isGreek
    ? {
        navHome: 'Αρχική',
        navCatalogue: 'PS5',
        navCreators: 'Creator Access',
        navContact: 'Επικοινωνία',
        navigation: 'Κύρια πλοήγηση',
        openMenu: 'Άνοιγμα μενού',
        closeMenu: 'Κλείσιμο μενού',
        skip: 'Μετάβαση στο περιεχόμενο',

        eyebrow: 'VYRO Creator Access',
        title: 'Ιδιωτική πρόσβαση.',
        accent: 'Ειδικές τιμές για creators.',
        intro:
          'Επιλεγμένα PlayStation προϊόντα σε ειδικές τιμές, διαθέσιμα μέσω του προσωπικού σας κωδικού VYRO.',

        codeLabel: 'Κωδικός πρόσβασης',
        codePlaceholder: 'Εισάγετε τον κωδικό σας',
        unlock: 'Συνέχεια',
        invalid:
          'Ο κωδικός δεν είναι έγκυρος. Ελέγξτε τον και δοκιμάστε ξανά.',

        privateAccess: 'Πρόσβαση για creators',
        welcome: 'Καλώς ήρθατε,',
        partnerPricing: 'Οι ειδικές τιμές σας είναι διαθέσιμες.',
        accessActive: 'ΕΝΕΡΓΗ ΠΡΟΣΒΑΣΗ',
        backToVYRO: 'Επιστροφή στο VYRO',

        catalogueEyebrow: 'Creator offer',
        catalogueTitle: 'Ειδικές τιμές.',
        catalogueText:
          'Σύρετε ή χρησιμοποιήστε τα βέλη για να δείτε τα προϊόντα.',
        previous: 'Προηγούμενο προϊόν',
        next: 'Επόμενο προϊόν',
        view: 'Προβολή',

        partnerPrice: 'Τιμή creator',
        publicPrice: 'Λιανική τιμή',
        buy: 'Αγορά',

        benefitsEyebrow: 'VYRO × Creator',
        benefitsTitle: 'Περισσότερα από μια τιμή.',
        benefitsText:
          'Ειδικές τιμές, άμεση αγορά και ευκαιρίες συνεργασίας.',
        benefitOne: 'Ειδικές τιμές για creators',
        benefitTwo: 'Άμεση αγορά προϊόντων',
        benefitThree: 'Παραπομπές και εμπορικές ευκαιρίες',
        benefitFour: 'Καμπάνιες, κυκλοφορίες και giveaways',

        contact: 'Χρειάζεστε κάτι άλλο;',
        contactText:
          'Επικοινωνήστε μαζί μας για διαθεσιμότητα, προϊόντα ή συνεργασίες.',
        whatsapp: 'Επικοινωνία μέσω WhatsApp',
        footer: 'VYRO Creator Access · PlayStation retail & distribution.',
      }
    : {
        navHome: 'Home',
        navCatalogue: 'PS5',
        navCreators: 'Creator Access',
        navContact: 'Contact',
        navigation: 'Main navigation',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        skip: 'Skip to content',

        eyebrow: 'VYRO Creator Access',
        title: 'Private access.',
        accent: 'Special pricing for creators.',
        intro:
          'Selected PlayStation products at exclusive creator pricing, available through your personal VYRO code.',

        codeLabel: 'Access code',
        codePlaceholder: 'Enter your access code',
        unlock: 'Continue',
        invalid: 'That access code is not valid. Check it and try again.',

        privateAccess: 'Creator access',
        welcome: 'Welcome,',
        partnerPricing: 'Your personal creator pricing is available.',
        accessActive: 'ACCESS ACTIVE',
        backToVYRO: 'Back to VYRO',

        catalogueEyebrow: 'Creator offer',
        catalogueTitle: 'Exclusive pricing.',
        catalogueText:
          'Swipe or use the arrows to explore the available products.',
        previous: 'Previous product',
        next: 'Next product',
        view: 'View',

        partnerPrice: 'Creator price',
        publicPrice: 'Public price',
        buy: 'Buy now',

        benefitsEyebrow: 'VYRO × Creator',
        benefitsTitle: 'More than a price.',
        benefitsText:
          'Exclusive pricing, direct purchasing and future collaboration opportunities.',
        benefitOne: 'Exclusive creator pricing',
        benefitTwo: 'Direct product purchasing',
        benefitThree: 'Referral & commercial opportunities',
        benefitFour: 'Campaigns, launches & giveaways',

        contact: 'Looking for something else?',
        contactText:
          'Contact us for availability, products or special collaboration opportunities.',
        whatsapp: 'Contact VYRO via WhatsApp',
        footer: 'VYRO Creator Access · PlayStation retail & distribution.',
      }

  useEffect(() => {
    if (!mobileOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        menuRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    if (accessGranted) {
      welcomeRef.current?.focus({ preventScroll: true })
    }
  }, [accessGranted])

  useEffect(() => {
    if (!accessGranted) return

    const container = catalogueRef.current
    if (!container) return

    let frame = 0

    function updateActiveProduct() {
      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        if (!container) return

        const slides = Array.from(
          container.querySelectorAll<HTMLElement>('[data-product-index]')
        )

        if (!slides.length) return

        const containerRect = container.getBoundingClientRect()
        const containerCenter = containerRect.left + containerRect.width / 2
        const maxScroll = container.scrollWidth - container.clientWidth

        // Keep the first and last controls reachable on wider layouts.
        if (maxScroll > 1 && container.scrollLeft <= 1) {
          setActiveProduct(0)
          return
        }

        if (maxScroll > 1 && container.scrollLeft >= maxScroll - 1) {
          setActiveProduct(slides.length - 1)
          return
        }

        let closestIndex = 0
        let closestDistance = Infinity

        slides.forEach((slide, index) => {
          const rect = slide.getBoundingClientRect()
          const distance = Math.abs(
            rect.left + rect.width / 2 - containerCenter
          )

          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        })

        setActiveProduct(closestIndex)
      })
    }

    container.addEventListener('scroll', updateActiveProduct, {
      passive: true,
    })
    window.addEventListener('resize', updateActiveProduct)

    updateActiveProduct()

    return () => {
      container.removeEventListener('scroll', updateActiveProduct)
      window.removeEventListener('resize', updateActiveProduct)
      cancelAnimationFrame(frame)
    }
  }, [accessGranted])

  function unlockAccess() {
    const normalized = normalizeCode(code)

    const match = creatorAccess.find(
      (partner) => normalizeCode(partner.code) === normalized
    )

    if (!match) {
      setHasError(true)
      return
    }

    setCreatorName(match.creator)
    setHasError(false)
    setActiveProduct(0)
    setCode('')
  }

  function goToProduct(index: number) {
    if (index < 0 || index >= creatorProducts.length) return

    const container = catalogueRef.current
    if (!container) return

    const slide = container.querySelector<HTMLElement>(
      `[data-product-index="${index}"]`
    )

    if (!slide) return

    const containerRect = container.getBoundingClientRect()
    const slideRect = slide.getBoundingClientRect()

    const target =
      container.scrollLeft +
      slideRect.left +
      slideRect.width / 2 -
      (containerRect.left + containerRect.width / 2)

    setActiveProduct(index)

    container.scrollTo({
      left: Math.max(
        0,
        Math.min(target, container.scrollWidth - container.clientWidth)
      ),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  const benefits = [
    { Icon: ShieldCheck, title: copy.benefitOne },
    { Icon: Package, title: copy.benefitTwo },
    { Icon: ArrowRight, title: copy.benefitThree },
    { Icon: Check, title: copy.benefitFour },
  ]

  return (
    <main className="site-shell creators-page" lang={language}>
      <a className="vyro-skip-link" href="#creator-main">
        {copy.skip}
      </a>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="VYRO home">
          <span className="brand-dot" />
          VYRO
        </Link>

        <nav
          id="creator-navigation"
          aria-label={copy.navigation}
          className={mobileOpen ? 'main-nav is-open' : 'main-nav'}
        >
          <Link href="/" onClick={() => setMobileOpen(false)}>
            {copy.navHome}
          </Link>

          <Link href="/#compare" onClick={() => setMobileOpen(false)}>
            {copy.navCatalogue}
          </Link>

          <Link
            className="nav-creator-link"
            href="/Creators"
            aria-current="page"
            onClick={() => setMobileOpen(false)}
          >
            {copy.navCreators}
          </Link>

          <a
            href="https://wa.me/306978255016"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            {copy.navContact}
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLanguage(isGreek ? 'en' : 'el')}
            aria-label={isGreek ? 'Switch to English' : 'Αλλαγή στα Ελληνικά'}
          >
            <Globe2 size={15} aria-hidden="true" />
            <span>{isGreek ? 'EN' : 'ΕΛ'}</span>
          </button>

          <button
            className="menu-toggle"
            type="button"
            ref={menuRef}
            aria-controls="creator-navigation"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? copy.closeMenu : copy.openMenu}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {!accessGranted ? (
        <section
          id="creator-main"
          className="creator-access"
          tabIndex={-1}
        >
          <div className="creator-access-inner">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.eyebrow}
            </div>

            <h1>
              {copy.title}
              <br />
              <span>{copy.accent}</span>
            </h1>

            <p className="creator-intro">{copy.intro}</p>

            <form
              className="creator-lock-card"
              onSubmit={(event) => {
                event.preventDefault()
                unlockAccess()
              }}
            >
              <div className="creator-lock-icon">
                <LockKeyhole size={20} aria-hidden="true" />
              </div>

              <label htmlFor="creator-access-code">
                {copy.codeLabel}

                <input
                  id="creator-access-code"
                  name="creatorCode"
                  type="text"
                  value={code}
                  onChange={(event) => {
                    setCode(event.target.value)
                    setHasError(false)
                  }}
                  placeholder={copy.codePlaceholder}
                  autoComplete="off"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  required
                  aria-invalid={hasError}
                  aria-describedby={
                    hasError ? 'creator-code-error' : undefined
                  }
                />
              </label>

              {hasError && (
                <p
                  id="creator-code-error"
                  className="form-error"
                  role="alert"
                >
                  {copy.invalid}
                </p>
              )}

              <button
                className="button button-primary creator-unlock"
                type="submit"
              >
                {copy.unlock}
                <ArrowRight size={17} aria-hidden="true" />
              </button>

              <div className="creator-security-note">
                <ShieldCheck size={15} aria-hidden="true" />
                {copy.privateAccess}
              </div>
            </form>

            <Link className="creator-back-link" href="/">
              ← {copy.backToVYRO}
            </Link>
          </div>
        </section>
      ) : (
        <>
          <section id="creator-main" className="creator-welcome">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                {copy.privateAccess}
              </div>

              <h1 ref={welcomeRef} tabIndex={-1}>
                {copy.welcome} <span>{creatorName}.</span>
              </h1>

              <p>{copy.partnerPricing}</p>
            </div>

            <div className="creator-access-badge">
              <Check size={16} aria-hidden="true" />
              {copy.accessActive}
            </div>
          </section>

          <section
            className="creator-showcase"
            aria-labelledby="creator-catalogue-title"
          >
            <div className="creator-showcase-top">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-line" />
                  {copy.catalogueEyebrow}
                </div>

                <h2 id="creator-catalogue-title">
                  {copy.catalogueTitle}
                </h2>
              </div>

              <div className="creator-showcase-controls">
                <button
                  type="button"
                  aria-label={copy.previous}
                  aria-controls="creator-products"
                  onClick={() => goToProduct(activeProduct - 1)}
                  disabled={activeProduct === 0}
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>

                <span>
                  {String(activeProduct + 1).padStart(2, '0')}
                  {' / '}
                  {String(creatorProducts.length).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  aria-label={copy.next}
                  aria-controls="creator-products"
                  onClick={() => goToProduct(activeProduct + 1)}
                  disabled={activeProduct === creatorProducts.length - 1}
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              className="creator-showcase-track product-grid"
              id="creator-products"
              ref={catalogueRef}
              role="region"
              aria-label={copy.catalogueTitle}
              tabIndex={0}
            >
              {creatorProducts.map((product, index) => (
                <article
                  className={`product-card product-${product.tone} ${
                    index === activeProduct ? 'is-active' : ''
                  }`}
                  key={product.key}
                  data-product-index={index}
                  aria-labelledby={`creator-product-${product.key}`}
                >
                  <div className="product-visual">
                    <img
                      className="product-image"
                      src={product.image}
                      alt={isGreek ? product.greek : product.name}
                      draggable={false}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>

                  <div className="product-info">
                    <div>
                      <h3 id={`creator-product-${product.key}`}>
                        {isGreek ? product.greek : product.name}
                      </h3>

                      <p>
                        {isGreek ? product.greekNote : product.note}
                      </p>
                    </div>

                    <div className="price">
                      <small>{copy.partnerPrice}</small>
                      <strong>{product.partnerPrice}</strong>

                      {product.publicPrice && (
                        <span className="creator-public-price">
                          {copy.publicPrice}: {product.publicPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <a
                    className="product-link"
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${copy.buy}: ${
                      isGreek ? product.greek : product.name
                    }`}
                  >
                    {copy.buy}
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>

            <div className="creator-showcase-bottom">
              <p>{copy.catalogueText}</p>

              <div className="creator-product-dots">
                {creatorProducts.map((product, index) => (
                  <button
                    key={product.key}
                    type="button"
                    aria-label={`${copy.view} ${
                      isGreek ? product.greek : product.name
                    }`}
                    aria-controls="creator-products"
                    aria-current={index === activeProduct ? 'true' : undefined}
                    className={index === activeProduct ? 'is-active' : ''}
                    onClick={() => goToProduct(index)}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="section creator-benefits">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-line" />
                  {copy.benefitsEyebrow}
                </div>

                <h2>{copy.benefitsTitle}</h2>
              </div>

              <p>{copy.benefitsText}</p>
            </div>

            <div className="service-grid">
              {benefits.map(({ Icon, title }) => (
                <article className="service-card" key={title}>
                  <Icon size={20} aria-hidden="true" />

                  <div>
                    <h3>{title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section creator-contact">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                VYRO
              </div>

              <h2>{copy.contact}</h2>
              <p>{copy.contactText}</p>
            </div>

            <a
              className="button button-primary"
              href="https://wa.me/306978255016"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.whatsapp}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </section>
        </>
      )}

      <footer className="site-footer">
        <Link className="brand" href="/">
          <span className="brand-dot" />
          VYRO
        </Link>

        <p>{copy.footer}</p>
        <span>© 2026 VYRO.</span>
      </footer>
    </main>
  )
}