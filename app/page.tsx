'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  Globe2,
  Menu,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const stripeLinks = {
  pro: 'https://buy.stripe.com/eVqeV63eU53g7NJ1eHcQU01',
  digital: 'https://buy.stripe.com/28EaEQ02IfHU2tpaPhcQU03',
  slimDisc: 'https://buy.stripe.com/aFabIU7va0N0d837D5cQU04',
  slimDigital: 'https://buy.stripe.com/8x2eV69DicvIfgbaPhcQU05',
}

const products = [
  {
    key: 'pro',
    name: 'PS5 Pro',
    greek: 'PS5 Pro',
    price: '€750.00',
    note: 'Performance flagship',
    greekNote: 'Ναυαρχίδα επιδόσεων',
    link: stripeLinks.pro,
    tone: 'pro',
    image: '/images/ps5-pro.png',
  },
  {
    key: 'digital',
    name: 'PS5 Digital Edition',
    greek: 'PS5 Digital Edition',
    price: '€489.99',
    note: 'All-digital next gen',
    greekNote: 'Ψηφιακή εμπειρία νέας γενιάς',
    link: stripeLinks.digital,
    tone: 'digital',
    image: '/images/ps5-digital.png',
  },
  {
    key: 'slimDisc',
    name: 'PS5 Slim Disc Edition',
    greek: 'PS5 Slim Disc Edition',
    price: '€549.99',
    note: 'Slimline with disc drive',
    greekNote: 'Λεπτή έκδοση με drive',
    link: stripeLinks.slimDisc,
    tone: 'disc',
    image: '/images/ps5-slim-disc.png',
  },
  {
    key: 'slimDigital',
    name: 'PS5 Slim Digital',
    greek: 'PS5 Slim Digital',
    price: '€490.00',
    note: 'Slimline digital',
    greekNote: 'Λεπτή ψηφιακή έκδοση',
    link: stripeLinks.slimDigital,
    tone: 'slim',
    image: '/images/ps5-slim-digital.png',
  },
]

const tiers = [
  {
    name: 'Starter',
    range: '5+',
    desc: 'A focused start for new retail partners',
    greek: 'Μια δυναμική αρχή για νέους συνεργάτες λιανικής',
  },
  {
    name: 'Retailer',
    range: '10+',
    desc: 'Reliable stock for your retail operation',
    greek: 'Σταθερό απόθεμα για τη λιανική σας',
  },
  {
    name: 'Bulk',
    range: '20+',
    desc: 'Better flow and stronger commercial terms',
    greek: 'Καλύτερη ροή και ισχυρότεροι εμπορικοί όροι',
  },
  {
    name: 'Distribution',
    range: '50+',
    desc: 'Built for regional distribution networks',
    greek: 'Για δίκτυα περιφερειακής διανομής',
  },
]

type Language = 'en' | 'el'

type FormState = {
  business: string
  contact: string
  email: string
  phone: string
  pro: string
  digital: string
  slimDisc: string
  slimDigital: string
  message: string
}

/*
 * CHANGE THIS DATE WHEN YOU WANT TO RESTART THE PROMOTION.
 * Greece is UTC+3 during September.
 */
const OFFER_END = '2026-09-18T23:59:59+03:00'

export default function Page() {
  const [language, setLanguage] = useState<Language>('en')
  const [selectedTier, setSelectedTier] = useState('Retailer')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState<FormState>({
    business: '',
    contact: '',
    email: '',
    phone: '',
    pro: '0',
    digital: '0',
    slimDisc: '0',
    slimDigital: '0',
    message: '',
  })

  const offerEnd = new Date(OFFER_END).getTime()

  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(offerEnd - Date.now(), 0)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(Math.max(offerEnd - Date.now(), 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [offerEnd])

  const countdown = useMemo(() => {
    const totalSeconds = Math.floor(timeLeft / 1000)

    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }, [timeLeft])

  const deadlineHasPassed = timeLeft <= 0
  const isGreek = language === 'el'

  const total = useMemo(
    () =>
      ['pro', 'digital', 'slimDisc', 'slimDigital'].reduce(
        (sum, key) =>
          sum + Number(form[key as keyof FormState] || 0),
        0
      ),
    [form]
  )

  const copy = isGreek
    ? {
        navCatalog: 'Κατάλογος',
        navWholesale: 'Χονδρική',
        navContact: 'Επικοινωνία',

        eyebrow: 'PlayStation λιανική & χονδρική',
        title: 'Η νέα γενιά του PlayStation.',
        titleAccent: 'Τώρα στην Ελλάδα.',
        intro:
          'Αυθεντικό PlayStation stock για ιδιώτες, retailers και distributors.',

        explore: 'Δείτε τον κατάλογο',
        partner: 'Γίνετε συνεργάτης',

        trust:
          'Αποστολές σε όλη την Ελλάδα · B2B τιμολόγηση · Γνήσιο stock',

        catalogEyebrow: 'Διαθέσιμο για παραγγελία',
        catalogTitle: 'Stock που κινείται.',
        catalogText:
          'Επιλεγμένα PS5 μοντέλα με καθαρές τιμές συμπεριλαμβανόμενου ΦΠΑ και άμεση αγορά.',
        exVat: 'Τιμή με ΦΠΑ',
        buy: 'Αγορά Τώρα',
        retailNote: 'Άμεση αγορά',

        urgency:
          'ΤΙΜΕΣ ΧΟΝΔΡΙΚΗΣ ΓΙΑ ΠΕΡΙΟΡΙΣΜΕΝΟ ΧΡΟΝΟ · ΛΗΓΕΙ 18 ΣΕΠΤΕΜΒΡΙΟΥ, 23:59',

        urgencyEnded:
          'Η ΠΡΟΣΦΟΡΑ ΠΕΡΙΟΡΙΣΜΕΝΟΥ ΧΡΟΝΟΥ ΕΧΕΙ ΟΛΟΚΛΗΡΩΘΕΙ.',

        serviceEyebrow: 'Το πρότυπο εξυπηρέτησης VYRO',
        serviceTitle:
          'Καθαρά, από την παραγγελία έως την παράδοση.',
        serviceText:
          'Κάθε παραγγελία VYRO συνοδεύεται από σαφή ενημέρωση, παρακολούθηση αποστολής και άμεση υποστήριξη.',
        sealedTitle: 'Εργοστασιακά σφραγισμένο',
        sealedText: 'Νέα προϊόντα, εργοστασιακά σφραγισμένα.',
        deliveryTitle: '5–7 εργάσιμες ημέρες',
        deliveryText:
          'Εκτιμώμενος χρόνος παράδοσης για standard παραγγελίες.',
        trackingTitle: 'Παρακολούθηση αποστολής',
        trackingText:
          'Παρέχεται tracking μόλις αποσταλεί η παραγγελία.',
        supportTitle: 'Άμεση υποστήριξη',
        supportText:
          'Ένα άμεσο σημείο επικοινωνίας πριν και μετά την παραγγελία.',

        wholesaleEyebrow: 'Για συνεργάτες',
        wholesaleTitle:
          'Οι ποσότητες σας ανοίγουν καλύτερους όρους.',
        wholesaleText:
          'Επιλέξτε το επίπεδο που σας ταιριάζει. Θα σας απαντήσουμε με διαθεσιμότητα και εξατομικευμένη προσφορά.',
        selected: 'Επιλεγμένο',
        ask: 'Ρωτήστε για αυτό το επίπεδο',
        tierHelp:
          'Δεν είστε σίγουροι για το επίπεδό σας; Στείλτε απλώς τις ποσότητες και θα σας προτείνουμε το κατάλληλο tier.',

        inquiryEyebrow: 'Ας μιλήσουμε',
        inquiryTitle: 'Χτίστε το επόμενο απόθεμά σας.',
        inquiryText:
          'Στείλτε μας τις ανάγκες σας και η ομάδα VYRO θα επιστρέψει με διαθεσιμότητα και εξατομικευμένη προσφορά.',

        business: 'Επωνυμία επιχείρησης',
        businessOptional: 'προαιρετικό',
        contact: 'Όνομα υπευθύνου',
        email: 'Email',
        phone: 'Τηλέφωνο',
        required: 'υποχρεωτικό',

        quantities: 'Ποσότητες ανά μοντέλο',
        message: 'Μήνυμα',
        messagePlaceholder:
          'Πείτε μας περισσότερα για τις ανάγκες σας...',

        submit: 'Αποστολή ερωτήματος',

        min: 'Ελάχιστη ποσότητα: 5 τεμάχια συνολικά',
        total: 'Σύνολο',

        success:
          'Το ερώτημά σας είναι έτοιμο. Ανοίξαμε το WhatsApp για να ολοκληρώσετε την επικοινωνία.',

        error:
          'Παρακαλούμε συμπληρώστε τα υποχρεωτικά πεδία και τουλάχιστον 5 τεμάχια συνολικά.',

        footer:
          'Η υποδομή πίσω από το επόμενο sell-through.',

        rights:
          '© 2026 VYRO. Wholesale distribution, built for momentum.',
      }
    : {
        navCatalog: 'Catalogue',
        navWholesale: 'Wholesale',
        navContact: 'Contact',

        eyebrow: 'PlayStation retail & wholesale',
        title: 'The next generation of PlayStation.',
        titleAccent: 'Now in Greece.',
        intro:
          'Authentic PlayStation stock for individuals, retailers and distributors.',

        explore: 'Explore catalogue',
        partner: 'Become a partner',

        trust:
          'Nationwide shipping · B2B invoicing · Authentic stock',

        catalogEyebrow: 'Available to order',
        catalogTitle: 'Stock that moves.',
        catalogText:
          'Selected PS5 models with clear VAT-included pricing and direct purchase.',
        exVat: 'VAT included',
        buy: 'Buy Now',
        retailNote: 'Direct purchase',

        urgency:
          'LIMITED-TIME WHOLESALE PRICING · ENDS 18 SEPTEMBER, 23:59',

        urgencyEnded:
          'LIMITED-TIME WHOLESALE PRICING HAS ENDED.',

        serviceEyebrow: 'VYRO service standard',
        serviceTitle: 'Clear from order to delivery.',
        serviceText:
          'Every VYRO order is handled with clear communication, tracked fulfilment and direct support.',
        sealedTitle: 'Factory sealed',
        sealedText: 'New products supplied factory sealed.',
        deliveryTitle: '5–7 business days',
        deliveryText:
          'Estimated delivery for standard orders.',
        trackingTitle: 'Tracked delivery',
        trackingText:
          'Tracking provided once your order is dispatched.',
        supportTitle: 'Direct support',
        supportText:
          'One direct point of contact before and after your order.',

        wholesaleEyebrow: 'For trade partners',
        wholesaleTitle: 'Your volume unlocks better terms.',
        wholesaleText:
          'Choose the level that fits your operation. We will come back with availability and a tailored offer.',
        selected: 'Selected',
        ask: 'Ask about this tier',
        tierHelp:
          "Not sure which tier fits? Just submit your quantities and we'll recommend the appropriate level.",

        inquiryEyebrow: "Let's talk",
        inquiryTitle: 'Build your next inventory run.',
        inquiryText:
          'Tell us what you need and the VYRO team will come back with availability and a tailored offer.',

        business: 'Business name',
        businessOptional: 'optional',
        contact: 'Contact name',
        email: 'Email',
        phone: 'Phone',
        required: 'required',

        quantities: 'Quantities by model',
        message: 'Message',
        messagePlaceholder:
          'Tell us more about your requirements...',

        submit: 'Send wholesale inquiry',

        min: 'Minimum quantity: 5 units total',
        total: 'Total',

        success:
          'Your inquiry is ready. We opened WhatsApp to complete the conversation.',

        error:
          'Please complete the required fields and add at least 5 units total.',

        footer:
          'The infrastructure behind your next sell-through.',

        rights:
          '© 2026 VYRO. Wholesale distribution, built for momentum.',
      }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setMobileOpen(false)
  }

  function updateField(key: keyof FormState, value: string) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }))

    setError('')
    setSubmitted(false)
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (
      !form.contact ||
      !form.email ||
      !form.phone ||
      total < 5
    ) {
      setError(copy.error)
      return
    }

    const selectedTierData = tiers.find(
      (tier) => tier.name === selectedTier
    )

    const quantityLines = [
      ['PS5 Pro', form.pro],
      ['PS5 Digital Edition', form.digital],
      ['PS5 Slim Disc Edition', form.slimDisc],
      ['PS5 Slim Digital', form.slimDigital],
    ]
      .filter(([, quantity]) => Number(quantity) > 0)
      .map(([name, quantity]) => `• ${name}: ${quantity}`)

    const lines = [
      'VYRO WHOLESALE INQUIRY',
      '────────────────────',
      '',
      `CONTACT: ${form.contact}`,
      `EMAIL: ${form.email}`,
      `PHONE: ${form.phone}`,
      ...(form.business
        ? [`BUSINESS: ${form.business}`]
        : []),
      '',
      `SELECTED TIER: ${selectedTier.toUpperCase()}`,
      `TIER RANGE: ${selectedTierData?.range ?? '-'}`,
      '',
      'QUANTITIES',
      '──────────',
      ...quantityLines,
      '',
      `TOTAL UNITS: ${total}`,
      '',
      `MESSAGE: ${form.message || 'No additional message.'}`,
      '',
      'Please confirm availability and commercial terms.',
    ]

    window.open(
      `https://wa.me/306978255016?text=${encodeURIComponent(
        lines.join('\n')
      )}`,
      '_blank',
      'noopener,noreferrer'
    )

    setSubmitted(true)
    setError('')
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
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
          <button onClick={() => scrollTo('catalog')}>
            {copy.navCatalog}
          </button>

          <button onClick={() => scrollTo('wholesale')}>
            {copy.navWholesale}
          </button>

          <button onClick={() => scrollTo('inquiry')}>
            {copy.navContact}
          </button>
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

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.eyebrow}
          </div>

          <h1>
            {copy.title}
            <br />
            <span>{copy.titleAccent}</span>
          </h1>

          <p>{copy.intro}</p>

          <div className="hero-actions">
            <button
              className="button button-primary"
              onClick={() => scrollTo('catalog')}
            >
              {copy.explore}
              <ArrowRight size={17} />
            </button>

            <button
              className="button button-ghost"
              onClick={() => scrollTo('inquiry')}
            >
              {copy.partner}
            </button>
          </div>

          <div className="trust-row">
            <ShieldCheck size={15} />
            {copy.trust}
          </div>
        </div>

        <div
          className="hero-orb"
          aria-hidden="true"
        >
          <div className="orb-ring ring-one" />
          <div className="orb-ring ring-two" />

          <div className="orb-core">
            <span>PS5</span>
            <small>READY</small>
          </div>

          <div className="orb-tag tag-top">
            01 / STOCK
          </div>

          <div className="orb-tag tag-bottom">
            GR · EU
          </div>
        </div>
      </section>

      <section className="signal-strip">
        <div>
          <span>VYRO / 01</span>
          <b>
            <Sparkles size={14} />
            Curated next-gen inventory
          </b>
        </div>

        <div>
          <span>VYRO / 02</span>
          <b>
            <Package size={14} />
            Trade-ready fulfilment
          </b>
        </div>

        <div>
          <span>VYRO / 03</span>
          <b>
            <MessageCircle size={14} />
            Human support, fast
          </b>
        </div>
      </section>

      <section
        className="section catalog-section"
        id="catalog"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.catalogEyebrow}
            </div>

            <h2>{copy.catalogTitle}</h2>
          </div>

          <p>{copy.catalogText}</p>
        </div>

        <div
          className="urgency-banner"
          role="status"
          aria-live="polite"
        >
          <span className="urgency-message">
            {deadlineHasPassed
              ? copy.urgencyEnded
              : copy.urgency}
          </span>

          {!deadlineHasPassed && (
            <div
              className="urgency-countdown"
              aria-label="Offer countdown"
            >
              <span>
                {String(countdown.days).padStart(2, '0')}d
              </span>

              <span>
                {String(countdown.hours).padStart(2, '0')}h
              </span>

              <span>
                {String(countdown.minutes).padStart(2, '0')}m
              </span>

              <span>
                {String(countdown.seconds).padStart(2, '0')}s
              </span>
            </div>
          )}
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article
              className={`product-card product-${product.tone}`}
              key={product.key}
            >
              <div className="product-visual">
                <img
                  className="product-image"
                  src={product.image}
                  alt={`${product.name} console and controller`}
                />

                <span className="product-index">
                  0{index + 1}
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
                  <small>{copy.exVat}</small>
                  <strong>{product.price}</strong>
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

      <section className="section service-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.serviceEyebrow}
            </div>

            <h2>{copy.serviceTitle}</h2>
          </div>

          <p>{copy.serviceText}</p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <ShieldCheck size={18} />

            <div>
              <h3>{copy.sealedTitle}</h3>
              <p>{copy.sealedText}</p>
            </div>
          </article>

          <article className="service-card">
            <Package size={18} />

            <div>
              <h3>{copy.deliveryTitle}</h3>
              <p>{copy.deliveryText}</p>
            </div>
          </article>

          <article className="service-card">
            <ArrowRight size={18} />

            <div>
              <h3>{copy.trackingTitle}</h3>
              <p>{copy.trackingText}</p>
            </div>
          </article>

          <article className="service-card">
            <MessageCircle size={18} />

            <div>
              <h3>{copy.supportTitle}</h3>
              <p>{copy.supportText}</p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="section wholesale-section"
        id="wholesale"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.wholesaleEyebrow}
            </div>

            <h2>{copy.wholesaleTitle}</h2>
          </div>

          <p>{copy.wholesaleText}</p>
        </div>

        <div className="tier-grid">
          {tiers.map((tier) => (
            <button
              key={tier.name}
              className={`tier-card ${
                selectedTier === tier.name
                  ? 'is-selected'
                  : ''
              }`}
              onClick={() =>
                setSelectedTier(tier.name)
              }
            >
              <span className="tier-check">
                {selectedTier === tier.name ? (
                  <Check size={15} />
                ) : (
                  tier.name.slice(0, 1)
                )}
              </span>

              <span className="tier-name">
                {tier.name}
              </span>

              <strong>{tier.range}</strong>

              <span className="tier-description">
                {isGreek
                  ? tier.greek
                  : tier.desc}
              </span>

              {selectedTier === tier.name && (
                <span className="selected-label">
                  {copy.selected}
                </span>
              )}
            </button>
          ))}
        </div>

        <p className="tier-help">
          {copy.tierHelp}
        </p>

        <button
          className="button button-primary tier-cta"
          onClick={() => scrollTo('inquiry')}
        >
          {copy.ask}
          <ArrowRight size={17} />
        </button>
      </section>

      <section
        className="section inquiry-section"
        id="inquiry"
      >
        <div className="inquiry-intro">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.inquiryEyebrow}
          </div>

          <h2>{copy.inquiryTitle}</h2>

          <p>{copy.inquiryText}</p>

          <div className="contact-card">
            <span className="contact-pulse" />

            <div>
              <small>WhatsApp</small>
              <strong>+30 697 825 5016</strong>
            </div>
          </div>
        </div>

        <form
          className="inquiry-form"
          onSubmit={submitInquiry}
        >
          <div className="form-grid">
            <label>
              {copy.business}
              <small> · {copy.businessOptional}</small>

              <input
                value={form.business}
                onChange={(event) =>
                  updateField(
                    'business',
                    event.target.value
                  )
                }
                placeholder="VYRO Partners Ltd."
              />
            </label>

            <label>
              {copy.contact}
              <small> · {copy.required}</small>

              <input
                required
                value={form.contact}
                onChange={(event) =>
                  updateField(
                    'contact',
                    event.target.value
                  )
                }
                placeholder="Alex Morgan"
              />
            </label>

            <label>
              {copy.email}
              <small> · {copy.required}</small>

              <input
                required
                type="email"
                value={form.email}
                onChange={(event) =>
                  updateField(
                    'email',
                    event.target.value
                  )
                }
                placeholder="alex@company.com"
              />
            </label>

            <label>
              {copy.phone}
              <small> · {copy.required}</small>

              <input
                required
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  updateField(
                    'phone',
                    event.target.value
                  )
                }
                placeholder="+30 210 000 0000"
              />
            </label>
          </div>

          <fieldset>
            <legend>{copy.quantities}</legend>

            <div className="quantity-grid">
              {products.map((product) => (
                <label key={product.key}>
                  <span>
                    {product.name.replace(
                      ' Edition',
                      ''
                    )}
                  </span>

                  <input
                    type="number"
                    min="0"
                    inputMode="numeric"
                    value={
                      form[
                        product.key as keyof FormState
                      ]
                    }
                    onChange={(event) =>
                      updateField(
                        product.key as keyof FormState,
                        event.target.value
                      )
                    }
                  />
                </label>
              ))}
            </div>

            <div className="quantity-total">
              <span>{copy.min}</span>
              <strong>
                {copy.total}: {total}
              </strong>
            </div>
          </fieldset>

          <label>
            {copy.message}

            <textarea
              value={form.message}
              onChange={(event) =>
                updateField(
                  'message',
                  event.target.value
                )
              }
              placeholder={copy.messagePlaceholder}
              rows={4}
            />
          </label>

          {error && (
            <p
              className="form-error"
              role="alert"
            >
              {error}
            </p>
          )}

          {submitted && (
            <p
              className="form-success"
              role="status"
            >
              <Check size={16} />
              {copy.success}
            </p>
          )}

          <button
            className="button button-primary form-submit"
            type="submit"
          >
            {copy.submit}
            <ArrowRight size={17} />
          </button>
        </form>
      </section>

      <footer className="site-footer">
        <a
          className="brand"
          href="#top"
        >
          <span className="brand-dot" />
          VYRO
        </a>

        <p>{copy.footer}</p>

        <span>{copy.rights}</span>
      </footer>
    </main>
  )
}