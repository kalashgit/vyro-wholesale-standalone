'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
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
    creator: 'Creator Partner',
    code: 'VYRO-CREATOR',
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
    link: '',
  },
  {
    key: 'digital',
    name: 'PS5 Digital Edition',
    greek: 'PS5 Digital Edition',
    publicPrice: '€489.99',
    partnerPrice: '',
    note: 'All-digital next gen',
    greekNote: 'Ψηφιακή εμπειρία νέας γενιάς',
    image: '/images/ps5-digital.png',
    link: '',
  },
  {
    key: 'slimDisc',
    name: 'PS5 Slim Disc Edition',
    greek: 'PS5 Slim Disc Edition',
    publicPrice: '€549.99',
    partnerPrice: '',
    note: 'Slimline with disc drive',
    greekNote: 'Λεπτή έκδοση με drive',
    image: '/images/ps5-slim-disc.png',
    link: '',
  },
  {
    key: 'slimDigital',
    name: 'PS5 Slim Digital',
    greek: 'PS5 Slim Digital',
    publicPrice: '€490.00',
    partnerPrice: '',
    note: 'Slimline digital',
    greekNote: 'Λεπτή ψηφιακή έκδοση',
    image: '/images/ps5-slim-digital.png',
    link: '',
  },
  {
    key: 'controller',
    name: 'DualSense Wireless Controller',
    greek: 'Χειριστήριο DualSense',
    publicPrice: '',
    partnerPrice: '',
    note: 'Wireless PlayStation controller',
    greekNote: 'Ασύρματο χειριστήριο PlayStation',
    image: '/images/dualsense.png',
    link: '',
  },
  {
    key: 'discDrive',
    name: 'PS5 Disc Drive',
    greek: 'PS5 Disc Drive',
    publicPrice: '',
    partnerPrice: '',
    note: 'Disc drive for compatible PS5 models',
    greekNote: 'Disc drive για συμβατά μοντέλα PS5',
    image: '/images/ps5-disc-drive.png',
    link: '',
  },
  {
    key: 'charging',
    name: 'DualSense Charging Station',
    greek: 'DualSense Charging Station',
    publicPrice: '',
    partnerPrice: '',
    note: 'Charging solution for DualSense controllers',
    greekNote: 'Λύση φόρτισης για χειριστήρια DualSense',
    image: '/images/charging-station.png',
    link: '',
  },
]

export default function CreatorsPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [code, setCode] = useState('')
  const [accessGranted, setAccessGranted] = useState(false)
  const [creatorName, setCreatorName] = useState('')
  const [error, setError] = useState('')

  const isGreek = language === 'el'

  const copy = isGreek
    ? {
        navHome: 'Αρχική',
        navCatalogue: 'Κατάλογος',
        navCreators: 'Creators',
        navContact: 'Επικοινωνία',

        eyebrow: 'VYRO Creator Partners',
        title: 'Πρόσβαση σε ειδικές τιμές.',
        accent: 'Για επιλεγμένους creators.',
        intro:
          'Ειδική πρόσβαση σε PlayStation προϊόντα και αξεσουάρ μέσω του VYRO Creator Partner Program.',

        codeLabel: 'Κωδικός συνεργάτη',
        codePlaceholder: 'Εισάγετε τον κωδικό σας',
        unlock: 'Ξεκλείδωμα τιμών',
        invalid:
          'Ο κωδικός δεν είναι έγκυρος. Ελέγξτε τον και δοκιμάστε ξανά.',

        privateAccess: 'Ιδιωτική πρόσβαση',
        welcome:
          'Καλώς ήρθατε στο VYRO Creator Program.',
        partnerPricing:
          'Οι τιμές συνεργάτη σας είναι ενεργές.',

        catalogueEyebrow: 'Creator catalogue',
        catalogueTitle: 'Προϊόντα για το setup σας.',
        catalogueText:
          'Περιηγηθείτε στα διαθέσιμα προϊόντα και επικοινωνήστε μαζί μας για την αγορά.',

        partnerPrice: 'Τιμή συνεργάτη',
        publicPrice: 'Κανονική τιμή',
        unavailable: 'Τιμή κατόπιν επικοινωνίας',
        buy: 'Αγορά τώρα',

        benefitsEyebrow: 'VYRO Creator Program',
        benefitsTitle: 'Περισσότερα από μια έκπτωση.',
        benefitsText:
          'Το πρόγραμμα έχει σχεδιαστεί για creators που θέλουν πρόσβαση σε προϊόντα και μια πραγματική εμπορική σχέση με τη VYRO.',

        benefitOne: 'Ειδικές τιμές συνεργάτη',
        benefitTwo:
          'Πρόσβαση σε προϊόντα και αξεσουάρ',
        benefitThree: 'Referral opportunities',
        benefitFour:
          'Μελλοντικές καμπάνιες & giveaways',

        contact: 'Θέλετε κάτι συγκεκριμένο;',
        contactText:
          'Στείλτε μας μήνυμα και θα σας βοηθήσουμε με διαθεσιμότητα, τιμές και παραγγελίες.',

        whatsapp: 'Επικοινωνία μέσω WhatsApp',

        footer:
          'VYRO Creator Partners · PlayStation retail & distribution.',
      }
    : {
        navHome: 'Home',
        navCatalogue: 'Catalogue',
        navCreators: 'Creators',
        navContact: 'Contact',

        eyebrow: 'VYRO Creator Partners',
        title: 'Access partner pricing.',
        accent: 'Built for selected creators.',
        intro:
          'Private access to PlayStation products and accessories through the VYRO Creator Partner Program.',

        codeLabel: 'Partner access code',
        codePlaceholder: 'Enter your access code',
        unlock: 'Unlock pricing',
        invalid:
          'That access code is not valid. Check it and try again.',

        privateAccess: 'Private access',
        welcome:
          'Welcome to the VYRO Creator Program.',
        partnerPricing:
          'Your partner pricing is now active.',

        catalogueEyebrow: 'Creator catalogue',
        catalogueTitle: 'Products for your setup.',
        catalogueText:
          'Browse available products and contact us when you are ready to purchase.',

        partnerPrice: 'Partner price',
        publicPrice: 'Public price',
        unavailable: 'Price on request',
        buy: 'Buy Now',

        benefitsEyebrow: 'VYRO Creator Program',
        benefitsTitle: 'More than a discount.',
        benefitsText:
          'The program is built for creators who want product access and a genuine commercial relationship with VYRO.',

        benefitOne: 'Special partner pricing',
        benefitTwo:
          'Access to products and accessories',
        benefitThree: 'Referral opportunities',
        benefitFour:
          'Future campaigns & giveaways',

        contact: 'Looking for something specific?',
        contactText:
          'Message us for availability, pricing and order support.',

        whatsapp: 'Contact via WhatsApp',

        footer:
          'VYRO Creator Partners · PlayStation retail & distribution.',
      }

  function unlockAccess() {
    const normalized = code.trim().toUpperCase()

    const match = creatorAccess.find(
      (partner) => partner.code === normalized
    )

    if (!match) {
      setError(copy.invalid)
      setAccessGranted(false)
      return
    }

    setCreatorName(match.creator)
    setAccessGranted(true)
    setError('')
  }

  return (
    <main className="site-shell creators-page">
      <header className="site-header">
        <a
          className="brand"
          href="/"
          aria-label="VYRO home"
        >
          <span className="brand-dot" />
          VYRO
        </a>

        <nav
          className={
            mobileOpen
              ? 'main-nav is-open'
              : 'main-nav'
          }
        >
          <a href="/">
            {copy.navHome}
          </a>

          <a href="/#catalog">
            {copy.navCatalogue}
          </a>

          <a href="/creators">
            {copy.navCreators}
          </a>

          <a href="/#inquiry">
            {copy.navContact}
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() =>
              setLanguage(isGreek ? 'en' : 'el')
            }
            aria-label="Switch language"
          >
            <Globe2 size={15} />
            <span>{isGreek ? 'EN' : 'ΕΛ'}</span>
          </button>

          <button
            className="menu-toggle"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            aria-label={
              mobileOpen
                ? 'Close menu'
                : 'Open menu'
            }
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </header>

      {!accessGranted ? (
        <section className="creator-access">
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

            <p className="creator-intro">
              {copy.intro}
            </p>

            <div className="creator-lock-card">
              <div className="creator-lock-icon">
                <LockKeyhole size={20} />
              </div>

              <label>
                {copy.codeLabel}

                <input
                  value={code}
                  onChange={(event) => {
                    setCode(event.target.value)
                    setError('')
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      unlockAccess()
                    }
                  }}
                  placeholder={copy.codePlaceholder}
                  autoComplete="off"
                  spellCheck={false}
                />
              </label>

              {error && (
                <p className="form-error">
                  {error}
                </p>
              )}

              <button
                className="button button-primary creator-unlock"
                type="button"
                onClick={unlockAccess}
              >
                {copy.unlock}
                <ArrowRight size={17} />
              </button>

              <div className="creator-security-note">
                <ShieldCheck size={15} />
                {copy.privateAccess}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="creator-welcome">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                {copy.privateAccess}
              </div>

              <h1>{copy.welcome}</h1>

              <p>
                {creatorName} · {copy.partnerPricing}
              </p>
            </div>

            <div className="creator-access-badge">
              <Check size={16} />
              PARTNER ACCESS ACTIVE
            </div>
          </section>

          <section className="section creator-catalogue">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-line" />
                  {copy.catalogueEyebrow}
                </div>

                <h2>{copy.catalogueTitle}</h2>
              </div>

              <p>{copy.catalogueText}</p>
            </div>

            <div className="product-grid">
              {creatorProducts.map((product, index) => (
                <article
                  className={`product-card product-${product.key}`}
                  key={product.key}
                >
                  <div className="product-visual">
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="product-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="product-info">
                    <div>
                      <h3>
                        {isGreek
                          ? product.greek
                          : product.name}
                      </h3>

                      <p>
                        {isGreek
                          ? product.greekNote
                          : product.note}
                      </p>
                    </div>

                    <div className="price">
                      {product.partnerPrice ? (
                        <>
                          <small>
                            {copy.partnerPrice}
                          </small>

                          <strong>
                            {product.partnerPrice}
                          </strong>

                          {product.publicPrice && (
                            <del>
                              {product.publicPrice}
                            </del>
                          )}
                        </>
                      ) : (
                        <>
                          <small>
                            {copy.partnerPrice}
                          </small>

                          <strong className="price-request">
                            {copy.unavailable}
                          </strong>
                        </>
                      )}
                    </div>
                  </div>

                  {product.link ? (
                    <a
                      className="product-link"
                      href={product.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy.buy}
                      <ArrowRight size={15} />
                    </a>
                  ) : (
                    <a
                      className="product-link"
                      href="https://wa.me/306978255016"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy.buy}
                      <ArrowRight size={15} />
                    </a>
                  )}
                </article>
              ))}
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
              <article className="service-card">
                <ShieldCheck size={18} />

                <div>
                  <h3>{copy.benefitOne}</h3>
                </div>
              </article>

              <article className="service-card">
                <Package size={18} />

                <div>
                  <h3>{copy.benefitTwo}</h3>
                </div>
              </article>

              <article className="service-card">
                <ArrowRight size={18} />

                <div>
                  <h3>{copy.benefitThree}</h3>
                </div>
              </article>

              <article className="service-card">
                <Check size={18} />

                <div>
                  <h3>{copy.benefitFour}</h3>
                </div>
              </article>
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
              rel="noreferrer"
            >
              {copy.whatsapp}
              <ArrowRight size={17} />
            </a>
          </section>
        </>
      )}

      <footer className="site-footer">
        <a
          className="brand"
          href="/"
        >
          <span className="brand-dot" />
          VYRO
        </a>

        <p>{copy.footer}</p>

        <span>© 2026 VYRO.</span>
      </footer>
    </main>
  )
}
