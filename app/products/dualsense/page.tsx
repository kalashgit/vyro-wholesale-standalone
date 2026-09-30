'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Gamepad2,
  Globe2,
  Headphones,
  Menu,
  Mic,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

const STRIPE_LINK =
  'https://buy.stripe.com/00w9AMdTy0N07NJaPhcQU0p'

type Language = 'en' | 'el'

export default function DualSensePage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)

  const isGreek = language === 'el'

  const copy = isGreek
    ? {
        back: 'Πίσω στη VYRO',
        shop: 'PS5',
        accessories: 'Αξεσουάρ',
        wholesale: 'Χονδρική',

        label: 'DUALSENSE · WIRELESS CONTROLLER',
        title: 'Νιώστε το παιχνίδι.',
        intro:
          'Ζήστε μια πιο καθηλωτική εμπειρία gaming με το ασύρματο χειριστήριο DualSense για PlayStation 5.',
        vat: 'με ΦΠΑ',
        buy: 'Αγορά τώρα',

        available: 'Διαθέσιμο για παραγγελία',
        sealed: 'Εργοστασιακά σφραγισμένο',
        tracked: 'Αποστολή με tracking',

        experienceLabel: 'FEEL MORE',
        experienceTitle: 'Περισσότερο από ένα χειριστήριο.',
        experienceText:
          'Το DualSense φέρνει την αίσθηση του παιχνιδιού στα χέρια σας με haptic feedback, adaptive triggers και σχεδιασμό για τη γενιά PS5.',

        hapticTitle: 'Haptic feedback',
        hapticText:
          'Νιώστε δυναμικές δονήσεις και απτική απόκριση σε υποστηριζόμενα παιχνίδια.',

        triggerTitle: 'Adaptive triggers',
        triggerText:
          'Αισθανθείτε διαφορετικά επίπεδα δύναμης και έντασης στα L2 και R2 σε υποστηριζόμενα παιχνίδια.',

        comfortTitle: 'Σχεδιασμένο για παιχνίδι',
        comfortText:
          'Ένας χαρακτηριστικός, εργονομικός σχεδιασμός για μεγάλες gaming sessions.',

        connectionLabel: 'STAY CONNECTED',
        connectionTitle: 'Παίξτε. Μιλήστε. Μοιραστείτε.',
        connectionText:
          'Ενσωματωμένα χαρακτηριστικά σας επιτρέπουν να παραμένετε συνδεδεμένοι χωρίς να απομακρύνεστε από το παιχνίδι.',

        micTitle: 'Ενσωματωμένο μικρόφωνο',
        micText:
          'Μιλήστε με άλλους παίκτες χρησιμοποιώντας το ενσωματωμένο μικρόφωνο.',

        headsetTitle: 'Headset connection',
        headsetText:
          'Συνδέστε συμβατό headset μέσω της υποδοχής 3,5 mm.',

        createTitle: 'Create button',
        createText:
          'Καταγράψτε και μοιραστείτε gaming στιγμές χρησιμοποιώντας το κουμπί Create.',

        detailsLabel: 'CONTROLLER DETAILS',
        detailsTitle: 'Σχεδιασμένο για PS5.',

        type: 'Τύπος',
        typeValue: 'DualSense Wireless Controller',

        connection: 'Σύνδεση',
        connectionValue: 'Bluetooth · USB',

        feedback: 'Απόκριση',
        feedbackValue: 'Haptic feedback',

        triggers: 'Triggers',
        triggersValue: 'Adaptive L2 / R2',

        audio: 'Audio',
        audioValue: 'Ενσωματωμένο μικρόφωνο · υποδοχή headset 3,5 mm',

        charging: 'Φόρτιση',
        chargingValue: 'USB-C',

        compatibility: 'Σχεδιασμένο για',
        compatibilityValue: 'PlayStation 5',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Έτοιμο για τον δεύτερο παίκτη.',

        boxController: 'DualSense Wireless Controller',
        boxDocs: 'Έντυπο υλικό / οδηγίες',

        noteTitle: 'Σημαντικό',
        noteText:
          'Ορισμένες λειτουργίες, όπως haptic feedback και adaptive triggers, εξαρτώνται από την υποστήριξη του εκάστοτε παιχνιδιού.',

        secondLabel: 'PLAYER TWO',
        secondTitle: 'Another player? Another controller.',
        secondText:
          'Προσθέστε ένα δεύτερο DualSense στο setup σας για local multiplayer ή κρατήστε ένα επιπλέον χειριστήριο έτοιμο.',

        finalLabel: 'DUALSENSE',
        finalTitle: 'Πάρτε τον έλεγχο.',
        finalText:
          'Προσθέστε ένα DualSense Wireless Controller στο PlayStation setup σας.',
        finalBuy: 'Αγορά DualSense',

        footer:
          'PlayStation hardware για πελάτες σε όλη την Ελλάδα.',
      }
    : {
        back: 'Back to VYRO',
        shop: 'PS5',
        accessories: 'Accessories',
        wholesale: 'Wholesale',

        label: 'DUALSENSE · WIRELESS CONTROLLER',
        title: 'Feel the game.',
        intro:
          'Experience a more immersive way to play with the DualSense wireless controller for PlayStation 5.',
        vat: 'VAT included',
        buy: 'Buy now',

        available: 'Available to order',
        sealed: 'Factory sealed',
        tracked: 'Tracked delivery',

        experienceLabel: 'FEEL MORE',
        experienceTitle: 'More than a controller.',
        experienceText:
          'DualSense brings games into your hands with haptic feedback, adaptive triggers and a design created for the PS5 generation.',

        hapticTitle: 'Haptic feedback',
        hapticText:
          'Feel dynamic vibrations and responsive feedback in supported games.',

        triggerTitle: 'Adaptive triggers',
        triggerText:
          'Experience varying levels of force and tension through the L2 and R2 triggers in supported games.',

        comfortTitle: 'Built to play',
        comfortText:
          'A distinctive ergonomic design made for long gaming sessions.',

        connectionLabel: 'STAY CONNECTED',
        connectionTitle: 'Play. Talk. Share.',
        connectionText:
          'Built-in features help you stay connected without stepping away from the game.',

        micTitle: 'Built-in microphone',
        micText:
          'Talk with other players using the controller’s integrated microphone.',

        headsetTitle: 'Headset connection',
        headsetText:
          'Connect a compatible headset through the 3.5mm headset jack.',

        createTitle: 'Create button',
        createText:
          'Capture and share gaming moments using the dedicated Create button.',

        detailsLabel: 'CONTROLLER DETAILS',
        detailsTitle: 'Designed for PS5.',

        type: 'Type',
        typeValue: 'DualSense Wireless Controller',

        connection: 'Connection',
        connectionValue: 'Bluetooth · USB',

        feedback: 'Feedback',
        feedbackValue: 'Haptic feedback',

        triggers: 'Triggers',
        triggersValue: 'Adaptive L2 / R2',

        audio: 'Audio',
        audioValue: 'Built-in microphone · 3.5mm headset jack',

        charging: 'Charging',
        chargingValue: 'USB-C',

        compatibility: 'Designed for',
        compatibilityValue: 'PlayStation 5',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Ready for player two.',

        boxController: 'DualSense Wireless Controller',
        boxDocs: 'Printed materials / instructions',

        noteTitle: 'Good to know',
        noteText:
          'Features including haptic feedback and adaptive triggers depend on support from the individual game.',

        secondLabel: 'PLAYER TWO',
        secondTitle: 'Another player? Another controller.',
        secondText:
          'Add a second DualSense to your setup for local multiplayer or keep another controller ready to go.',

        finalLabel: 'DUALSENSE',
        finalTitle: 'Take control.',
        finalText:
          'Add a DualSense Wireless Controller to your PlayStation setup.',
        finalBuy: 'Buy DualSense',

        footer:
          'PlayStation hardware for customers across Greece.',
      }

  return (
    <main className="site-shell pro-page dualsense-page">
      {/* HEADER */}

      <header className="site-header">
        <Link className="brand" href="/">
          <span className="brand-dot" />
          VYRO
        </Link>

        <nav className={mobileOpen ? 'main-nav is-open' : 'main-nav'}>
          <Link
            href="/#compare"
            onClick={() => setMobileOpen(false)}
          >
            {copy.shop}
          </Link>

          <Link
            href="/#accessories"
            onClick={() => setMobileOpen(false)}
          >
            {copy.accessories}
          </Link>

          <Link
            href="/wholesale"
            onClick={() => setMobileOpen(false)}
          >
            {copy.wholesale}
          </Link>
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLanguage(isGreek ? 'en' : 'el')}
          >
            <Globe2 size={15} />
            {isGreek ? 'EN' : 'ΕΛ'}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="pro-product-hero">
        <div className="pro-product-copy">
          <Link className="pro-back" href="/">
            <ArrowLeft size={14} />
            {copy.back}
          </Link>

          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.label}
          </div>

          <h1>{copy.title}</h1>

          <p>{copy.intro}</p>

          <div className="pro-buy-row">
            <div className="pro-price">
              <strong>€55.99</strong>
              <span>{copy.vat}</span>
            </div>

            <a
              className="button button-primary"
              href={STRIPE_LINK}
              target="_blank"
              rel="noreferrer"
            >
              {copy.buy}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="pro-micro-trust">
            <span>
              <Check size={13} />
              {copy.available}
            </span>

            <span>
              <ShieldCheck size={13} />
              {copy.sealed}
            </span>

            <span>
              <Check size={13} />
              {copy.tracked}
            </span>
          </div>
        </div>

        <div className="pro-product-stage dualsense-stage">
          <div className="pro-product-glow" />

          <img
            src="/images/dual-sense.png"
            alt="DualSense Wireless Controller"
            draggable={false}
          />
        </div>
      </section>

      {/* FEEL MORE */}

      <section className="section pro-performance">
        <div className="pro-centered-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.experienceLabel}
          </div>

          <h2>{copy.experienceTitle}</h2>
          <p>{copy.experienceText}</p>
        </div>

        <div className="pro-feature-grid">
          <article className="pro-feature-card">
            <Sparkles size={22} />

            <h3>{copy.hapticTitle}</h3>
            <p>{copy.hapticText}</p>
          </article>

          <article className="pro-feature-card">
            <Zap size={22} />

            <h3>{copy.triggerTitle}</h3>
            <p>{copy.triggerText}</p>
          </article>

          <article className="pro-feature-card">
            <Gamepad2 size={22} />

            <h3>{copy.comfortTitle}</h3>
            <p>{copy.comfortText}</p>
          </article>
        </div>
      </section>

      {/* STAY CONNECTED */}

      <section className="section pro-storage-section">
        <div className="pro-storage-hero dualsense-feature-hero">
          <div className="pro-storage-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.connectionLabel}
            </div>

            <h2>{copy.connectionTitle}</h2>
            <p>{copy.connectionText}</p>
          </div>

          <div className="digital-symbol">
            <Gamepad2 size={76} strokeWidth={1} />
          </div>
        </div>

        <div className="pro-secondary-features">
          <article>
            <Mic size={20} />

            <h3>{copy.micTitle}</h3>
            <p>{copy.micText}</p>
          </article>

          <article>
            <Headphones size={20} />

            <h3>{copy.headsetTitle}</h3>
            <p>{copy.headsetText}</p>
          </article>

          <article>
            <Sparkles size={20} />

            <h3>{copy.createTitle}</h3>
            <p>{copy.createText}</p>
          </article>
        </div>
      </section>

      {/* DETAILS */}

      <section className="section pro-specs-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.detailsLabel}
            </div>

            <h2>{copy.detailsTitle}</h2>
          </div>
        </div>

        <div className="pro-spec-list">
          <div>
            <span>{copy.type}</span>
            <strong>{copy.typeValue}</strong>
          </div>

          <div>
            <span>{copy.connection}</span>
            <strong>{copy.connectionValue}</strong>
          </div>

          <div>
            <span>{copy.feedback}</span>
            <strong>{copy.feedbackValue}</strong>
          </div>

          <div>
            <span>{copy.triggers}</span>
            <strong>{copy.triggersValue}</strong>
          </div>

          <div>
            <span>{copy.audio}</span>
            <strong>{copy.audioValue}</strong>
          </div>

          <div>
            <span>{copy.charging}</span>
            <strong>{copy.chargingValue}</strong>
          </div>

          <div>
            <span>{copy.compatibility}</span>
            <strong>{copy.compatibilityValue}</strong>
          </div>
        </div>
      </section>

      {/* IN THE BOX */}

      <section className="section pro-box-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.boxLabel}
            </div>

            <h2>{copy.boxTitle}</h2>
          </div>
        </div>

        <div className="pro-box-layout">
          <div className="pro-box-image dualsense-box-image">
            <img
              src="/images/dual-sense.png"
              alt="DualSense Wireless Controller"
              draggable={false}
            />
          </div>

          <div className="pro-box-list">
            {[copy.boxController, copy.boxDocs].map((item) => (
              <div key={item}>
                <Check size={14} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pro-important-note">
          <div>
            <ShieldCheck size={19} />
            <strong>{copy.noteTitle}</strong>
          </div>

          <p>{copy.noteText}</p>
        </div>
      </section>

      {/* PLAYER TWO */}

      <section className="section digital-choice-section">
        <div className="digital-choice-card">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.secondLabel}
          </div>

          <Gamepad2
            size={42}
            strokeWidth={1.2}
            className="digital-choice-icon"
          />

          <h2>{copy.secondTitle}</h2>

          <p>{copy.secondText}</p>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="section pro-final-section">
        <div className="pro-final-card">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.finalLabel}
          </div>

          <h2>{copy.finalTitle}</h2>

          <p>{copy.finalText}</p>

          <div className="pro-final-price">
            <strong>€55.99</strong>
            <span>{copy.vat}</span>
          </div>

          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            {copy.finalBuy}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="site-footer">
        <Link className="brand" href="/">
          <span className="brand-dot" />
          VYRO
        </Link>

        <p>{copy.footer}</p>

        <span>© 2026 VYRO</span>
      </footer>
    </main>
  )
}
