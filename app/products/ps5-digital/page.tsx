'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Cloud,
  Gamepad2,
  Globe2,
  HardDrive,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

const STRIPE_LINK =
  'https://buy.stripe.com/bJe5kwaHmeDQgkfe1tcQU0l'

type Language = 'en' | 'el'

export default function PS5DigitalPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)

  const isGreek = language === 'el'

  const copy = isGreek
    ? {
        back: 'Πίσω στη VYRO',
        shop: 'PS5',
        accessories: 'Αξεσουάρ',
        wholesale: 'Χονδρική',

        label: 'PLAYSTATION 5 · DIGITAL EDITION',
        title: 'Μπείτε στην ψηφιακή εποχή.',
        intro:
          'Η εμπειρία της γενιάς PS5 σε μια πλήρως ψηφιακή κονσόλα. Χωρίς δίσκους. Απλώς επιλέξτε, κατεβάστε και παίξτε.',
        vat: 'με ΦΠΑ',
        buy: 'Αγορά τώρα',

        available: 'Διαθέσιμο για παραγγελία',
        sealed: 'Εργοστασιακά σφραγισμένο',
        tracked: 'Αποστολή με tracking',

        digitalLabel: 'ALL DIGITAL',
        digitalTitle: 'Η βιβλιοθήκη σας. Πάντα μαζί σας.',
        digitalText:
          'Αγοράστε και κατεβάστε συμβατά παιχνίδια απευθείας από το PlayStation Store και δημιουργήστε μια πλήρως ψηφιακή συλλογή.',

        storeTitle: 'PlayStation Store',
        storeText:
          'Ανακαλύψτε και αγοράστε παιχνίδια ψηφιακά απευθείας από την κονσόλα σας.',

        speedTitle: 'Γρήγορος SSD',
        speedText:
          'Η αρχιτεκτονική SSD του PS5 επιτρέπει γρήγορη φόρτωση σε παιχνίδια που έχουν σχεδιαστεί για να την αξιοποιούν.',

        experienceTitle: 'Η εμπειρία PS5',
        experienceText:
          'DualSense, υποστηριζόμενο 4K gaming και χαρακτηριστικά νέας γενιάς χωρίς φυσικούς δίσκους.',

        designLabel: 'DIGITAL BY DESIGN',
        designTitle: 'Όλα όσα χρειάζεστε. Χωρίς το disc drive.',
        designText:
          'Μια καθαρή, πλήρως ψηφιακή εμπειρία για παίκτες που αγοράζουν και διατηρούν τα παιχνίδια τους online.',

        libraryTitle: 'Η ψηφιακή σας συλλογή',
        libraryText:
          'Κατεβάστε τα παιχνίδια που αγοράζετε από το PlayStation Store και διαχειριστείτε τη βιβλιοθήκη σας από το PlayStation Network.',

        simpleTitle: 'Απλή εμπειρία',
        simpleText:
          'Δεν χρειάζεται να αλλάζετε δίσκους. Επιλέξτε ένα εγκατεστημένο παιχνίδι και ξεκινήστε.',

        specsLabel: 'TECHNICAL DETAILS',
        specsTitle: 'Τα βασικά.',

        format: 'Μορφή',
        formatValue: 'All-digital PlayStation 5',

        storage: 'Αποθήκευση',
        storageValue: 'SSD',

        video: 'Video',
        videoValue: '4K · έως 120Hz σε υποστηριζόμενο περιεχόμενο',

        audio: 'Ήχος',
        audioValue:
          'Tempest 3D AudioTech σε υποστηριζόμενα παιχνίδια',

        controller: 'Χειριστήριο',
        controllerValue: 'DualSense Wireless Controller',

        network: 'Δίκτυο',
        networkValue: 'Wi-Fi · Ethernet',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Έτοιμο για την ψηφιακή γενιά.',

        boxConsole: 'Κονσόλα PS5 Digital Edition',
        boxController: 'Ασύρματο χειριστήριο DualSense',
        boxHdmi: 'Καλώδιο HDMI',
        boxPower: 'Καλώδιο τροφοδοσίας',
        boxUsb: 'Καλώδιο USB',
        boxManual: 'Έντυπο υλικό / οδηγίες',

        important: 'Πριν αγοράσετε',
        importantText:
          'Η PS5 Digital Edition δεν διαθέτει ενσωματωμένο disc drive. Τα παιχνίδια αγοράζονται και κατεβαίνουν ψηφιακά. Ελέγξτε το ακριβές μοντέλο πριν αγοράσετε ξεχωριστό Disc Drive.',

        choiceLabel: 'WHY DIGITAL',
        choiceTitle: 'Λιγότερη τριβή. Περισσότερο παιχνίδι.',
        choiceText:
          'Για παίκτες που ήδη αγοράζουν τα παιχνίδια τους ψηφιακά, η Digital Edition κρατά την εμπειρία PS5 απλή.',

        finalLabel: 'PLAY HAS NO LIMITS',
        finalTitle: 'Έτοιμοι να πάτε digital;',
        finalText:
          'Αποκτήστε το PS5 Digital Edition από τη VYRO.',
        finalBuy: 'Αγορά PS5 Digital',

        footer:
          'PlayStation hardware για πελάτες σε όλη την Ελλάδα.',
      }
    : {
        back: 'Back to VYRO',
        shop: 'PS5',
        accessories: 'Accessories',
        wholesale: 'Wholesale',

        label: 'PLAYSTATION 5 · DIGITAL EDITION',
        title: 'Go all digital.',
        intro:
          'The PS5 generation in an all-digital console. No discs. Just choose, download and play.',
        vat: 'VAT included',
        buy: 'Buy now',

        available: 'Available to order',
        sealed: 'Factory sealed',
        tracked: 'Tracked delivery',

        digitalLabel: 'ALL DIGITAL',
        digitalTitle: 'Your library. Always with you.',
        digitalText:
          'Buy and download compatible games directly from PlayStation Store and build an entirely digital collection.',

        storeTitle: 'PlayStation Store',
        storeText:
          'Discover and purchase games digitally directly from your console.',

        speedTitle: 'High-speed SSD',
        speedText:
          'PS5 SSD architecture enables fast loading in games designed to take advantage of it.',

        experienceTitle: 'The PS5 experience',
        experienceText:
          'DualSense, supported 4K gaming and next-generation features without physical game discs.',

        designLabel: 'DIGITAL BY DESIGN',
        designTitle: 'Everything you need. Without the disc drive.',
        designText:
          'A clean, all-digital experience for players who buy and keep their games online.',

        libraryTitle: 'Your digital collection',
        libraryText:
          'Download games purchased from PlayStation Store and manage your library through PlayStation Network.',

        simpleTitle: 'Simple by design',
        simpleText:
          'No discs to swap. Choose an installed game and start playing.',

        specsLabel: 'TECHNICAL DETAILS',
        specsTitle: 'The essentials.',

        format: 'Format',
        formatValue: 'All-digital PlayStation 5',

        storage: 'Storage',
        storageValue: 'SSD',

        video: 'Video',
        videoValue: '4K · up to 120Hz in supported content',

        audio: 'Audio',
        audioValue:
          'Tempest 3D AudioTech in supported games',

        controller: 'Controller',
        controllerValue: 'DualSense Wireless Controller',

        network: 'Network',
        networkValue: 'Wi-Fi · Ethernet',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Ready for the digital generation.',

        boxConsole: 'PS5 Digital Edition console',
        boxController: 'DualSense wireless controller',
        boxHdmi: 'HDMI cable',
        boxPower: 'AC power cord',
        boxUsb: 'USB cable',
        boxManual: 'Printed materials / instructions',

        important: 'Before you buy',
        importantText:
          'PS5 Digital Edition does not include an integrated disc drive. Games are purchased and downloaded digitally. Check the exact console model before purchasing a separate Disc Drive.',

        choiceLabel: 'WHY DIGITAL',
        choiceTitle: 'Less friction. More play.',
        choiceText:
          'For players who already buy their games digitally, Digital Edition keeps the PS5 experience simple.',

        finalLabel: 'PLAY HAS NO LIMITS',
        finalTitle: 'Ready to go digital?',
        finalText:
          'Get your PS5 Digital Edition directly from VYRO.',
        finalBuy: 'Buy PS5 Digital',

        footer:
          'PlayStation hardware for customers across Greece.',
      }

  return (
    <main className="site-shell pro-page digital-page">

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
              <strong>€489.99</strong>
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

        <div className="pro-product-stage digital-product-stage">
          <div className="pro-product-glow" />

          <img
            src="/images/ps5-digital.PNG"
            alt="PlayStation 5 Digital Edition"
            draggable={false}
          />
        </div>
      </section>

      {/* ALL DIGITAL */}

      <section className="section pro-performance">

        <div className="pro-centered-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.digitalLabel}
          </div>

          <h2>{copy.digitalTitle}</h2>
          <p>{copy.digitalText}</p>
        </div>

        <div className="pro-feature-grid">

          <article className="pro-feature-card">
            <Cloud size={22} />

            <h3>{copy.storeTitle}</h3>
            <p>{copy.storeText}</p>
          </article>

          <article className="pro-feature-card">
            <Zap size={22} />

            <h3>{copy.speedTitle}</h3>
            <p>{copy.speedText}</p>
          </article>

          <article className="pro-feature-card">
            <Gamepad2 size={22} />

            <h3>{copy.experienceTitle}</h3>
            <p>{copy.experienceText}</p>
          </article>

        </div>
      </section>

      {/* DIGITAL BY DESIGN */}

      <section className="section pro-storage-section">

        <div className="pro-storage-hero digital-design-hero">

          <div className="pro-storage-copy">

            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.designLabel}
            </div>

            <h2>{copy.designTitle}</h2>
            <p>{copy.designText}</p>

          </div>

          <div className="digital-symbol">
            <Cloud
              size={76}
              strokeWidth={1}
            />
          </div>

        </div>

        <div className="pro-secondary-features">

          <article>
            <HardDrive size={20} />

            <h3>{copy.libraryTitle}</h3>
            <p>{copy.libraryText}</p>
          </article>

          <article>
            <Sparkles size={20} />

            <h3>{copy.simpleTitle}</h3>
            <p>{copy.simpleText}</p>
          </article>

        </div>
      </section>

      {/* TECHNICAL DETAILS */}

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
            <span>{copy.format}</span>
            <strong>{copy.formatValue}</strong>
          </div>

          <div>
            <span>{copy.storage}</span>
            <strong>{copy.storageValue}</strong>
          </div>

          <div>
            <span>{copy.video}</span>
            <strong>{copy.videoValue}</strong>
          </div>

          <div>
            <span>{copy.audio}</span>
            <strong>{copy.audioValue}</strong>
          </div>

          <div>
            <span>{copy.controller}</span>
            <strong>{copy.controllerValue}</strong>
          </div>

          <div>
            <span>{copy.network}</span>
            <strong>{copy.networkValue}</strong>
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

          <div className="pro-box-image digital-box-image">
            <img
              src="/images/ps5-digital.PNG"
              alt="PS5 Digital Edition"
              draggable={false}
            />
          </div>

          <div className="pro-box-list">
            {[
              copy.boxConsole,
              copy.boxController,
              copy.boxHdmi,
              copy.boxPower,
              copy.boxUsb,
              copy.boxManual,
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

          <p>{copy.importantText}</p>

        </div>

      </section>

      {/* WHY DIGITAL */}

      <section className="section digital-choice-section">

        <div className="digital-choice-card">

          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.choiceLabel}
          </div>

          <Cloud
            size={42}
            strokeWidth={1.2}
            className="digital-choice-icon"
          />

          <h2>{copy.choiceTitle}</h2>

          <p>{copy.choiceText}</p>

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
            <strong>€489.99</strong>
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
