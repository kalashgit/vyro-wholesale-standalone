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
    creator: 'VagosTech',
    code: 'VYRO-VAGOSTECH',
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
  },
  {
    key: 'digital',
    name: 'PS5 Digital Edition 825GB',
    greek: 'PS5 Digital Edition 825GB',
    publicPrice: '€489.99',
    partnerPrice: '€460.00',
    note: 'All-digital PlayStation 5',
    greekNote: 'Ψηφιακή έκδοση PlayStation 5',
    image: '/images/ps5-digital.png',
    link: 'https://buy.stripe.com/28EeV6dTy8fs9VRbTlcQU0a',
  },
  {
    key: 'slimDisc',
    name: 'PS5 Slim Disc Edition',
    greek: 'PS5 Slim Disc Edition',
    publicPrice: '€549.99',
    partnerPrice: '€530.00',
    note: 'Slimline with disc drive',
    greekNote: 'Λεπτή έκδοση με disc drive',
    image: '/images/ps5-slim-disc.png',
    link: 'https://buy.stripe.com/eVq8wIcPugLYaZV4qTcQU09',
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
  },
  {
    key: 'controller',
    name: 'DualSense PS5 Controller',
    greek: 'Χειριστήριο DualSense PS5',
    publicPrice: '',
    partnerPrice: '€55.99',
    note: 'Wireless PlayStation controller',
    greekNote: 'Ασύρματο χειριστήριο PlayStation',
    image: '/images/dualsense.png',
    link: 'https://buy.stripe.com/7sY4gseXCeDQec74qTcQU0d',
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
        navCreators: 'Creator Access',
        navContact: 'Επικοινωνία',

        eyebrow: 'VYRO Creator Access',
        title: 'Ιδιωτική πρόσβαση.',
        accent: 'Ειδικές τιμές για creators.',
        intro:
          'Επιλεγμένα PlayStation προϊόντα σε ειδικές τιμές, διαθέσιμα μέσω του προσωπικού σας VYRO access.',

        codeLabel: 'Κωδικός πρόσβασης',
        codePlaceholder: 'Εισάγετε τον κωδικό σας',
        unlock: 'Συνέχεια',
        invalid:
          'Ο κωδικός δεν είναι έγκυρος. Ελέγξτε τον και δοκιμάστε ξανά.',

        privateAccess: 'Private creator access',
        welcome: 'Καλώς ήρθατε,',
        partnerPricing:
          'Η προσωπική σας creator τιμολόγηση είναι ενεργή.',

        backToVYRO: 'Επιστροφή στο VYRO',

        catalogueEyebrow: 'Creator offer',
        catalogueTitle: 'Ειδικές τιμές.',
        catalogueText:
          'Επιλεγμένα PlayStation προϊόντα διαθέσιμα απευθείας μέσω VYRO.',

        partnerPrice: 'Creator price',
        publicPrice: 'Public price',
        buy: 'Αγορά',

        benefitsEyebrow: 'VYRO × Creator',
        benefitsTitle: 'Περισσότερα από μια τιμή.',
        benefitsText:
          'Το Creator Access δημιουργεί μια άμεση σχέση με τη VYRO — από ειδικές τιμές προϊόντων μέχρι referrals, launches και μελλοντικές συνεργασίες.',

        benefitOne: 'Ειδικές creator τιμές',
        benefitTwo: 'Άμεση αγορά προϊόντων',
        benefitThree: 'Referral & εμπορικές ευκαιρίες',
        benefitFour: 'Campaigns, launches & giveaways',

        contact: 'Χρειάζεστε κάτι άλλο;',
        contactText:
          'Επικοινωνήστε μαζί μας για διαθεσιμότητα, προϊόντα ή ειδικές συνεργασίες.',

        whatsapp: 'Επικοινωνία μέσω WhatsApp',

        footer: 'VYRO Creator Access · PlayStation retail & distribution.',
      }
    : {
        navHome: 'Home',
        navCatalogue: 'Catalogue',
        navCreators: 'Creator Access',
        navContact: 'Contact',

        eyebrow: 'VYRO Creator Access',
        title: 'Private access.',
        accent: 'Special pricing for creators.',
        intro:
          'Selected PlayStation products at exclusive creator pricing, available through your personal VYRO access.',

        codeLabel: 'Access code',
        codePlaceholder: 'Enter your access code',
        unlock: 'Continue',
        invalid:
          'That access code is not valid. Check it and try again.',

        privateAccess: 'Private creator access',
        welcome: 'Welcome,',
        partnerPricing:
          'Your personal creator pricing is active.',

        backToVYRO: 'Back to VYRO',

        catalogueEyebrow: 'Creator offer',
        catalogueTitle: 'Exclusive pricing.',
        catalogueText:
          'Selected PlayStation products available directly through VYRO.',

        partnerPrice: 'Creator price',
        publicPrice: 'Public price',
        buy: 'Buy now',

        benefitsEyebrow: 'VYRO × Creator',
        benefitsTitle: 'More than a price.',
        benefitsText:
          'Creator Access creates a direct relationship with VYRO — from exclusive product pricing to referrals, launches and future collaborations.',

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
          <a
            href="/"
            onClick={() => setMobileOpen(false)}
          >
            {copy.navHome}
          </a>

          <a
            href="/#catalog"
            onClick={() => setMobileOpen(false)}
          >
            {copy.navCatalogue}
          </a>

          <a
            href="/creators"
            onClick={() => setMobileOpen(false)}
          >
            {copy.navCreators}
          </a>

          <a
            href="/#inquiry"
            onClick={() => setMobileOpen(false)}
          >
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

            <a
              className="creator-back-link"
              href="/"
            >
              ← {copy.backToVYRO}
            </a>
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

              <h1>
                {copy.welcome}{' '}
                <span>{creatorName}.</span>
              </h1>

              <p>{copy.partnerPricing}</p>
            </div>

            <div className="creator-access-badge">
              <Check size={16} />
              ACCESS ACTIVE
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
                    </div>
                  </div>

                  <a
                    className="product-link"
                    href={product.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.buy}
                    <ArrowRight size={15} />
                  </a>
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