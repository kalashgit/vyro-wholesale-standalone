'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Disc3,
  Film,
  Gamepad2,
  Globe2,
  Menu,
  Package,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const STRIPE_LINK =
  'https://buy.stripe.com/cNi3co3eU53g9VR9LdcQU0o'

type Language = 'en' | 'el'

export default function PS5DiscDrivePage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)

  const isGreek = language === 'el'

  const copy = isGreek
    ? {
        back: 'Πίσω στη VYRO',
        shop: 'PS5',
        accessories: 'Αξεσουάρ',
        wholesale: 'Χονδρική',

        label: 'DISC DRIVE · FOR PS5',
        title: 'Προσθέστε την εμπειρία του δίσκου.',
        intro:
          'Επεκτείνετε ένα συμβατό PS5 Digital Edition με δυνατότητα χρήσης υποστηριζόμενων φυσικών παιχνιδιών και media.',
        vat: 'με ΦΠΑ',
        buy: 'Αγορά τώρα',

        available: 'Διαθέσιμο για παραγγελία',
        sealed: 'Εργοστασιακά σφραγισμένο',
        tracked: 'Αποστολή με tracking',

        freedomLabel: 'PHYSICAL + DIGITAL',
        freedomTitle: 'Περισσότεροι τρόποι να παίξετε.',
        freedomText:
          'Προσθέστε δυνατότητα χρήσης συμβατών φυσικών δίσκων στο υποστηριζόμενο PS5 Digital Edition σας.',

        gamesTitle: 'Παιχνίδια σε δίσκο',
        gamesText:
          'Παίξτε υποστηριζόμενα παιχνίδια PS5 και PS4 από φυσικούς δίσκους.',

        moviesTitle: 'Blu-ray & DVD',
        moviesText:
          'Χρησιμοποιήστε υποστηριζόμενους Blu-ray και DVD δίσκους μέσω του Disc Drive.',

        collectionTitle: 'Η φυσική σας συλλογή',
        collectionText:
          'Συνεχίστε να χρησιμοποιείτε συμβατούς φυσικούς τίτλους μαζί με την ψηφιακή σας βιβλιοθήκη.',

        upgradeLabel: 'EXPAND YOUR PS5',
        upgradeTitle: 'Digital όταν θέλετε. Disc όταν το χρειάζεστε.',
        upgradeText:
          'Το Disc Drive δίνει σε συμβατές κονσόλες PS5 Digital Edition περισσότερες επιλογές για παιχνίδια και media.',

        flexibilityTitle: 'Περισσότερη ευελιξία',
        flexibilityText:
          'Αγοράστε ψηφιακά ή χρησιμοποιήστε συμβατούς φυσικούς δίσκους.',

        simpleTitle: 'Σχεδιασμένο για PS5',
        simpleText:
          'Ένα επίσημο αξεσουάρ PlayStation σχεδιασμένο για συμβατά μοντέλα PS5.',

        detailsLabel: 'PRODUCT DETAILS',
        detailsTitle: 'Τα βασικά.',

        product: 'Προϊόν',
        productValue: 'Disc Drive for PS5',

        games: 'Game discs',
        gamesValue: 'Υποστηριζόμενοι δίσκοι PS5 · PS4',

        media: 'Media',
        mediaValue: 'Υποστηριζόμενοι Blu-ray · DVD',

        installation: 'Εγκατάσταση',
        installationValue: 'Σύνδεση σε συμβατό PS5',

        connection: 'Αρχική ρύθμιση',
        connectionValue:
          'Ενδέχεται να απαιτείται σύνδεση στο διαδίκτυο για σύζευξη με την κονσόλα',

        compatibility: 'Συμβατότητα',
        compatibilityValue:
          'Επιλεγμένα συμβατά μοντέλα PS5 Digital Edition',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Προσθέστε discs στο setup σας.',

        boxDrive: 'Disc Drive',
        boxCover: 'Disc drive cover',
        boxFeet: 'Πόδια οριζόντιας τοποθέτησης',
        boxManual: 'Έντυπο υλικό / οδηγίες',

        important: 'Ελέγξτε τη συμβατότητα',
        importantText:
          'Το Disc Drive δεν είναι συμβατό με κάθε έκδοση PS5. Επιβεβαιώστε το ακριβές μοντέλο της κονσόλας σας πριν την αγορά. Ενδέχεται να απαιτείται σύνδεση στο διαδίκτυο κατά την αρχική εγκατάσταση για σύζευξη του drive με την κονσόλα.',

        choiceLabel: 'MORE CHOICE',
        choiceTitle: 'Κρατήστε τις επιλογές σας ανοιχτές.',
        choiceText:
          'Digital downloads όταν σας βολεύουν. Φυσικά παιχνίδια όταν τα θέλετε. Ένα συμβατό Disc Drive σας επιτρέπει να χρησιμοποιείτε και τα δύο.',

        finalLabel: 'DISC DRIVE',
        finalTitle: 'Προσθέστε το disc experience.',
        finalText:
          'Αποκτήστε το PS5 Disc Drive από τη VYRO.',
        finalBuy: 'Αγορά Disc Drive',

        footer:
          'PlayStation hardware για πελάτες σε όλη την Ελλάδα.',
      }
    : {
        back: 'Back to VYRO',
        shop: 'PS5',
        accessories: 'Accessories',
        wholesale: 'Wholesale',

        label: 'DISC DRIVE · FOR PS5',
        title: 'Add the disc experience.',
        intro:
          'Expand a compatible PS5 Digital Edition with support for compatible physical games and media.',
        vat: 'VAT included',
        buy: 'Buy now',

        available: 'Available to order',
        sealed: 'Factory sealed',
        tracked: 'Tracked delivery',

        freedomLabel: 'PHYSICAL + DIGITAL',
        freedomTitle: 'More ways to play.',
        freedomText:
          'Add support for compatible physical discs to your supported PS5 Digital Edition console.',

        gamesTitle: 'Disc-based games',
        gamesText:
          'Play supported PS5 and PS4 games from physical discs.',

        moviesTitle: 'Blu-ray & DVD',
        moviesText:
          'Use supported Blu-ray and DVD media through the Disc Drive.',

        collectionTitle: 'Your physical collection',
        collectionText:
          'Keep using compatible physical titles alongside your digital game library.',

        upgradeLabel: 'EXPAND YOUR PS5',
        upgradeTitle: 'Digital when you want it. Disc when you need it.',
        upgradeText:
          'The Disc Drive gives compatible PS5 Digital Edition consoles more options for games and media.',

        flexibilityTitle: 'More flexibility',
        flexibilityText:
          'Buy digitally or use compatible physical game discs.',

        simpleTitle: 'Designed for PS5',
        simpleText:
          'An official PlayStation accessory designed for compatible PS5 models.',

        detailsLabel: 'PRODUCT DETAILS',
        detailsTitle: 'The essentials.',

        product: 'Product',
        productValue: 'Disc Drive for PS5',

        games: 'Game discs',
        gamesValue: 'Supported PS5 · PS4 discs',

        media: 'Media',
        mediaValue: 'Supported Blu-ray · DVD',

        installation: 'Installation',
        installationValue: 'Attaches to a compatible PS5',

        connection: 'Initial setup',
        connectionValue:
          'Internet connection may be required to pair the drive with the console',

        compatibility: 'Compatibility',
        compatibilityValue:
          'Selected compatible PS5 Digital Edition models',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Add discs to your setup.',

        boxDrive: 'Disc Drive',
        boxCover: 'Disc drive cover',
        boxFeet: 'Horizontal stand feet',
        boxManual: 'Printed materials / instructions',

        important: 'Check compatibility',
        importantText:
          'The Disc Drive is not compatible with every PS5 version. Confirm your exact console model before purchasing. An internet connection may be required during initial setup to pair the drive with the console.',

        choiceLabel: 'MORE CHOICE',
        choiceTitle: 'Keep your options open.',
        choiceText:
          'Digital downloads when they suit you. Physical games when you want them. A compatible Disc Drive lets you use both.',

        finalLabel: 'DISC DRIVE',
        finalTitle: 'Add the disc experience.',
        finalText:
          'Get your PS5 Disc Drive directly from VYRO.',
        finalBuy: 'Buy Disc Drive',

        footer:
          'PlayStation hardware for customers across Greece.',
      }

  return (
    <main className="site-shell pro-page disc-drive-page">
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
              <strong>€69.99</strong>
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

        <div className="pro-product-stage disc-drive-stage">
          <div className="pro-product-glow" />

          <img
            src="/images/ps5-disc-drive.png"
            alt="PS5 Disc Drive"
            draggable={false}
          />
        </div>
      </section>

      {/* PHYSICAL + DIGITAL */}

      <section className="section pro-performance">
        <div className="pro-centered-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.freedomLabel}
          </div>

          <h2>{copy.freedomTitle}</h2>
          <p>{copy.freedomText}</p>
        </div>

        <div className="pro-feature-grid">
          <article className="pro-feature-card">
            <Gamepad2 size={22} />

            <h3>{copy.gamesTitle}</h3>
            <p>{copy.gamesText}</p>
          </article>

          <article className="pro-feature-card">
            <Film size={22} />

            <h3>{copy.moviesTitle}</h3>
            <p>{copy.moviesText}</p>
          </article>

          <article className="pro-feature-card">
            <Disc3 size={22} />

            <h3>{copy.collectionTitle}</h3>
            <p>{copy.collectionText}</p>
          </article>
        </div>
      </section>

      {/* EXPAND YOUR PS5 */}

      <section className="section pro-storage-section">
        <div className="pro-storage-hero disc-drive-feature-hero">
          <div className="pro-storage-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.upgradeLabel}
            </div>

            <h2>{copy.upgradeTitle}</h2>
            <p>{copy.upgradeText}</p>
          </div>

          <div className="digital-symbol">
            <Disc3 size={76} strokeWidth={1} />
          </div>
        </div>

        <div className="pro-secondary-features">
          <article>
            <Sparkles size={20} />

            <h3>{copy.flexibilityTitle}</h3>
            <p>{copy.flexibilityText}</p>
          </article>

          <article>
            <Package size={20} />

            <h3>{copy.simpleTitle}</h3>
            <p>{copy.simpleText}</p>
          </article>
        </div>
      </section>

      {/* PRODUCT DETAILS */}

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
            <span>{copy.product}</span>
            <strong>{copy.productValue}</strong>
          </div>

          <div>
            <span>{copy.games}</span>
            <strong>{copy.gamesValue}</strong>
          </div>

          <div>
            <span>{copy.media}</span>
            <strong>{copy.mediaValue}</strong>
          </div>

          <div>
            <span>{copy.installation}</span>
            <strong>{copy.installationValue}</strong>
          </div>

          <div>
            <span>{copy.connection}</span>
            <strong>{copy.connectionValue}</strong>
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
          <div className="pro-box-image disc-drive-box-image">
            <img
              src="/images/ps5-disc-drive.png"
              alt="PS5 Disc Drive"
              draggable={false}
            />
          </div>

          <div className="pro-box-list">
            {[
              copy.boxDrive,
              copy.boxCover,
              copy.boxFeet,
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

      {/* MORE CHOICE */}

      <section className="section digital-choice-section">
        <div className="digital-choice-card">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.choiceLabel}
          </div>

          <Disc3
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
            <strong>€69.99</strong>
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
