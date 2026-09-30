'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Gamepad2,
  Globe2,
  HardDrive,
  Menu,
  ShieldCheck,
  Sparkles,
  Wifi,
  X,
  Zap,
} from 'lucide-react'

const STRIPE_LINK =
  'https://buy.stripe.com/8x214g8zefHUfgbe1tcQU0k'

type Language = 'en' | 'el'

export default function PS5ProPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)

  const isGreek = language === 'el'

  const copy = isGreek
    ? {
        back: 'Πίσω στη VYRO',
        shop: 'PS5',
        accessories: 'Αξεσουάρ',
        wholesale: 'Χονδρική',

        label: 'PLAYSTATION 5 PRO',
        title: 'Η απόλυτη εμπειρία PS5.',
        intro:
          'Περισσότερη οπτική λεπτομέρεια. Υψηλότεροι ρυθμοί καρέ. Η πιο προηγμένη κονσόλα PlayStation 5.',
        vat: 'με ΦΠΑ',
        buy: 'Αγορά τώρα',

        availability: 'Διαθέσιμο για παραγγελία',
        sealed: 'Εργοστασιακά σφραγισμένο',
        delivery: 'Αποστολή με tracking',

        performanceLabel: 'PS5 PRO PERFORMANCE',
        performanceTitle:
          'Δείτε περισσότερα. Παίξτε ομαλότερα.',
        performanceText:
          'Το PS5 Pro έχει σχεδιαστεί για να προσφέρει βελτιωμένη οπτική ποιότητα και υψηλούς ρυθμούς καρέ σε συμβατούς τίτλους PS5 Pro Enhanced.',

        rayTitle: 'Advanced Ray Tracing',
        rayText:
          'Πιο προηγμένα εφέ φωτισμού, σκιών και αντανακλάσεων σε υποστηριζόμενα παιχνίδια.',

        pssrTitle: 'PSSR',
        pssrText:
          'AI-enhanced upscaling σχεδιασμένο για πιο καθαρή εικόνα σε συμβατούς τίτλους.',

        fpsTitle: 'Υψηλοί ρυθμοί καρέ',
        fpsText:
          'Συμβατά παιχνίδια μπορούν να αξιοποιήσουν υψηλούς ρυθμούς καρέ, συμπεριλαμβανομένων έως 120fps όπου υποστηρίζεται.',

        storageLabel: 'BUILT FOR THE LIBRARY',
        storageTitle: '2TB. Έτοιμα για παιχνίδι.',
        storageText:
          'Ενσωματωμένος custom SSD 2TB για να διατηρείτε περισσότερα από τα παιχνίδια σας εγκατεστημένα και έτοιμα.',

        connectivityTitle: 'Wi-Fi 7',
        connectivityText:
          'Υποστήριξη Wi-Fi 7 για χρήση με συμβατό router, μαζί με Gigabit Ethernet.',

        boostTitle: 'Game Boost',
        boostText:
          'Το PS5 Pro μπορεί να βελτιώσει την εμπειρία σε επιλεγμένους συμβατούς τίτλους PS4 και PS5.',

        specsLabel: 'TECHNICAL DETAILS',
        specsTitle: 'Τι υπάρχει μέσα.',

        cpu: 'CPU',
        cpuValue: 'AMD Ryzen Zen 2 · 8 πυρήνες / 16 threads',
        gpu: 'GPU',
        gpuValue: 'AMD Radeon RDNA-based · 16.7 TFLOPS',
        memory: 'Μνήμη',
        memoryValue: '16GB GDDR6 + 2GB DDR5',
        storage: 'Αποθήκευση',
        storageValue: '2TB Custom SSD',
        wireless: 'Συνδεσιμότητα',
        wirelessValue: 'Wi-Fi 7 compatible · Bluetooth 5.1 · Ethernet',
        output: 'Έξοδος',
        outputValue: 'HDMI OUT',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Ό,τι χρειάζεστε για να ξεκινήσετε.',
        boxConsole: 'Κονσόλα PlayStation 5 Pro',
        boxController: 'Ασύρματο χειριστήριο DualSense',
        boxStorage: 'Ενσωματωμένος SSD 2TB',
        boxFeet: '2 οριζόντια πόδια στήριξης',
        boxHdmi: 'Καλώδιο HDMI',
        boxPower: 'Καλώδιο τροφοδοσίας',
        boxManual: 'Εγχειρίδιο χρήσης',
        boxAstro: "ASTRO's PLAYROOM προεγκατεστημένο",

        important: 'Σημαντικό',
        digital:
          'Το PS5 Pro είναι all-digital από προεπιλογή. Το συμβατό PS5 Disc Drive πωλείται ξεχωριστά.',
        stand:
          'Η κάθετη βάση πωλείται ξεχωριστά.',

        finalLabel: 'PLAY UNLEASHED',
        finalTitle: 'Έτοιμοι για Pro;',
        finalText:
          'Αποκτήστε το PS5 Pro από τη VYRO.',
        finalBuy: 'Αγορά PS5 Pro',

        footer:
          'PlayStation hardware για πελάτες σε όλη την Ελλάδα.',
      }
    : {
        back: 'Back to VYRO',
        shop: 'PS5',
        accessories: 'Accessories',
        wholesale: 'Wholesale',

        label: 'PLAYSTATION 5 PRO',
        title: 'The ultimate PS5 experience.',
        intro:
          'More visual detail. Higher frame rates. The most advanced PlayStation 5 console.',
        vat: 'VAT included',
        buy: 'Buy now',

        availability: 'Available to order',
        sealed: 'Factory sealed',
        delivery: 'Tracked delivery',

        performanceLabel: 'PS5 PRO PERFORMANCE',
        performanceTitle:
          'See more. Play smoother.',
        performanceText:
          'PS5 Pro is built to deliver enhanced visual quality and high frame rates in compatible PS5 Pro Enhanced titles.',

        rayTitle: 'Advanced Ray Tracing',
        rayText:
          'More advanced lighting, shadow and reflection effects in supported games.',

        pssrTitle: 'PSSR',
        pssrText:
          'AI-enhanced upscaling designed to produce sharper image quality in compatible titles.',

        fpsTitle: 'High frame rates',
        fpsText:
          'Compatible games can take advantage of high frame rates, including up to 120fps where supported.',

        storageLabel: 'BUILT FOR THE LIBRARY',
        storageTitle: '2TB. Ready to play.',
        storageText:
          'A built-in 2TB custom SSD gives you room to keep more of your games installed and ready.',

        connectivityTitle: 'Wi-Fi 7',
        connectivityText:
          'Wi-Fi 7 support for use with a compatible router, alongside Gigabit Ethernet.',

        boostTitle: 'Game Boost',
        boostText:
          'PS5 Pro can enhance the experience in selected compatible PS4 and PS5 titles.',

        specsLabel: 'TECHNICAL DETAILS',
        specsTitle: 'What’s inside.',

        cpu: 'CPU',
        cpuValue: 'AMD Ryzen Zen 2 · 8 cores / 16 threads',
        gpu: 'GPU',
        gpuValue: 'AMD Radeon RDNA-based · 16.7 TFLOPS',
        memory: 'Memory',
        memoryValue: '16GB GDDR6 + 2GB DDR5',
        storage: 'Storage',
        storageValue: '2TB Custom SSD',
        wireless: 'Connectivity',
        wirelessValue:
          'Wi-Fi 7 compatible · Bluetooth 5.1 · Ethernet',
        output: 'Output',
        outputValue: 'HDMI OUT',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Everything you need to start.',
        boxConsole: 'PlayStation 5 Pro console',
        boxController: 'DualSense wireless controller',
        boxStorage: 'Built-in 2TB SSD',
        boxFeet: '2 horizontal stand feet',
        boxHdmi: 'HDMI cable',
        boxPower: 'AC power cord',
        boxManual: 'User manual',
        boxAstro: "ASTRO's PLAYROOM pre-installed",

        important: 'Good to know',
        digital:
          'PS5 Pro is an all-digital console by default. The compatible PS5 Disc Drive is sold separately.',
        stand:
          'The vertical stand is also sold separately.',

        finalLabel: 'PLAY UNLEASHED',
        finalTitle: 'Ready to go Pro?',
        finalText:
          'Get your PS5 Pro directly from VYRO.',
        finalBuy: 'Buy PS5 Pro',

        footer:
          'PlayStation hardware for customers across Greece.',
      }

  return (
    <main className="site-shell pro-page">
      {/* HEADER */}

      <header className="site-header">
        <Link
          className="brand"
          href="/"
          aria-label="VYRO home"
        >
          <span className="brand-dot" />
          VYRO
        </Link>

        <nav
          className={
            mobileOpen
              ? 'main-nav is-open'
              : 'main-nav'
          }
        >
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
            onClick={() =>
              setLanguage(isGreek ? 'en' : 'el')
            }
          >
            <Globe2 size={15} />
            {isGreek ? 'EN' : 'ΕΛ'}
          </button>

          <button
            className="menu-toggle"
            onClick={() =>
              setMobileOpen((open) => !open)
            }
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </header>

      {/* PRODUCT HERO */}

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
              <strong>€750</strong>
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
              {copy.availability}
            </span>

            <span>
              <ShieldCheck size={13} />
              {copy.sealed}
            </span>

            <span>
              <Check size={13} />
              {copy.delivery}
            </span>
          </div>
        </div>

        <div className="pro-product-stage">
          <div className="pro-product-glow" />

          <img
            src="/images/ps5-pro.png"
            alt="PlayStation 5 Pro"
            draggable={false}
          />
        </div>
      </section>

      {/* PERFORMANCE */}

      <section className="section pro-performance">
        <div className="pro-centered-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.performanceLabel}
          </div>

          <h2>{copy.performanceTitle}</h2>

          <p>{copy.performanceText}</p>
        </div>

        <div className="pro-feature-grid">
          <article className="pro-feature-card">
            <Sparkles size={22} />

            <h3>{copy.rayTitle}</h3>

            <p>{copy.rayText}</p>
          </article>

          <article className="pro-feature-card">
            <Zap size={22} />

            <h3>{copy.pssrTitle}</h3>

            <p>{copy.pssrText}</p>
          </article>

          <article className="pro-feature-card">
            <Gamepad2 size={22} />

            <h3>{copy.fpsTitle}</h3>

            <p>{copy.fpsText}</p>
          </article>
        </div>
      </section>

      {/* STORAGE / CONNECTIVITY */}

      <section className="section pro-storage-section">
        <div className="pro-storage-hero">
          <div className="pro-storage-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.storageLabel}
            </div>

            <h2>{copy.storageTitle}</h2>

            <p>{copy.storageText}</p>
          </div>

          <div className="pro-storage-number">
            <strong>2</strong>
            <span>TB</span>
          </div>
        </div>

        <div className="pro-secondary-features">
          <article>
            <Wifi size={20} />

            <h3>{copy.connectivityTitle}</h3>
            <p>{copy.connectivityText}</p>
          </article>

          <article>
            <Gamepad2 size={20} />

            <h3>{copy.boostTitle}</h3>
            <p>{copy.boostText}</p>
          </article>
        </div>
      </section>

      {/* TECH SPECS */}

      <section className="section pro-specs-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.specsLabel}
            </div>

            <h2>{copy.specsTitle}</h2>
          </div>
        </div>

        <div className="pro-spec-list">
          <div>
            <span>{copy.cpu}</span>
            <strong>{copy.cpuValue}</strong>
          </div>

          <div>
            <span>{copy.gpu}</span>
            <strong>{copy.gpuValue}</strong>
          </div>

          <div>
            <span>{copy.memory}</span>
            <strong>{copy.memoryValue}</strong>
          </div>

          <div>
            <span>{copy.storage}</span>
            <strong>{copy.storageValue}</strong>
          </div>

          <div>
            <span>{copy.wireless}</span>
            <strong>{copy.wirelessValue}</strong>
          </div>

          <div>
            <span>{copy.output}</span>
            <strong>{copy.outputValue}</strong>
          </div>
        </div>
      </section>

      {/* WHAT'S IN THE BOX */}

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
          <div className="pro-box-image">
            <img
              src="/images/ps5-pro.png"
              alt="PS5 Pro console"
              draggable={false}
            />
          </div>

          <div className="pro-box-list">
            {[
              copy.boxConsole,
              copy.boxController,
              copy.boxStorage,
              copy.boxFeet,
              copy.boxHdmi,
              copy.boxPower,
              copy.boxManual,
              copy.boxAstro,
            ].map((item) => (
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

            <strong>{copy.important}</strong>
          </div>

          <p>{copy.digital}</p>
          <p>{copy.stand}</p>
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
            <strong>€750</strong>
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
