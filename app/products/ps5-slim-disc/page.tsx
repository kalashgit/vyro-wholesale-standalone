'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Disc3,
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
  'https://buy.stripe.com/00waEQ9Di8fsc3Z8H9cQU0n'

type Language = 'en' | 'el'

export default function PS5SlimDiscPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)

  const isGreek = language === 'el'

  const copy = isGreek
    ? {
        back: 'Πίσω στη VYRO',
        shop: 'PS5',
        accessories: 'Αξεσουάρ',
        wholesale: 'Χονδρική',

        label: 'PLAYSTATION 5 SLIM · DISC EDITION',
        title: 'Τα παιχνίδια σας. Με τον τρόπο σας.',
        intro:
          'Φυσικά ή ψηφιακά. Το PS5 Slim Disc σας δίνει την πλήρη εμπειρία PS5 σε πιο λεπτή σχεδίαση.',
        vat: 'με ΦΠΑ',
        buy: 'Αγορά τώρα',

        available: 'Διαθέσιμο για παραγγελία',
        sealed: 'Εργοστασιακά σφραγισμένο',
        tracked: 'Αποστολή με tracking',

        freedomLabel: 'PLAY YOUR WAY',
        freedomTitle: 'Disc όταν το θέλετε. Digital όταν δεν το χρειάζεστε.',
        freedomText:
          'Χρησιμοποιήστε φυσικά παιχνίδια PS5 και υποστηριζόμενους δίσκους PS4 ή κατεβάστε παιχνίδια ψηφιακά από το PlayStation Store.',

        discTitle: 'Ενσωματωμένο Disc Drive',
        discText:
          'Παίξτε συμβατά παιχνίδια PS5 και PS4 από δίσκο και χρησιμοποιήστε υποστηριζόμενα Blu-ray και DVD.',

        speedTitle: 'Γρήγορος SSD',
        speedText:
          'Η αρχιτεκτονική SSD του PS5 επιτρέπει γρήγορη φόρτωση σε παιχνίδια που έχουν σχεδιαστεί για να την αξιοποιούν.',

        playTitle: 'Η γενιά PS5',
        playText:
          'DualSense, 4K gaming σε υποστηριζόμενους τίτλους και χαρακτηριστικά νέας γενιάς σε ένα compact PS5.',

        designLabel: 'SLIM DESIGN',
        designTitle: 'Περισσότερο PlayStation. Λιγότερος όγκος.',
        designText:
          'Η νεότερη slim σχεδίαση διατηρεί την εμπειρία PS5 σε μικρότερο σώμα από το αρχικό μοντέλο.',

        storageNumber: '1',
        storageUnit: 'TB',
        storageTitle: 'Ενσωματωμένος SSD',
        storageText:
          'Χώρος για τη συλλογή παιχνιδιών σας με ενσωματωμένο SSD 1TB.',

        specsLabel: 'TECHNICAL DETAILS',
        specsTitle: 'Τα βασικά.',
        storage: 'Αποθήκευση',
        storageValue: '1TB SSD',
        drive: 'Οπτικό Drive',
        driveValue: 'Ultra HD Blu-ray Disc Drive',
        resolution: 'Video',
        resolutionValue: '4K · έως 120Hz σε υποστηριζόμενο περιεχόμενο',
        audio: 'Ήχος',
        audioValue: 'Tempest 3D AudioTech σε υποστηριζόμενα παιχνίδια',
        controller: 'Χειριστήριο',
        controllerValue: 'DualSense Wireless Controller',
        connectivity: 'Δίκτυο',
        connectivityValue: 'Wi-Fi · Ethernet',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Έτοιμο για παιχνίδι.',
        boxConsole: 'Κονσόλα PS5 Slim Disc Edition',
        boxController: 'Ασύρματο χειριστήριο DualSense',
        boxDrive: 'Ενσωματωμένο Disc Drive',
        boxStorage: 'Ενσωματωμένος SSD 1TB',
        boxHdmi: 'Καλώδιο HDMI',
        boxPower: 'Καλώδιο τροφοδοσίας',
        boxUsb: 'Καλώδιο USB',
        boxFeet: 'Οριζόντια πόδια στήριξης',

        choiceLabel: 'THE FLEXIBLE PS5',
        choiceTitle: 'Μία κονσόλα. Δύο τρόποι αγοράς παιχνιδιών.',
        choiceText:
          'Κρατήστε τη φυσική συλλογή σας, αγοράστε μεταχειρισμένα ή νέα παιχνίδια σε δίσκο και χρησιμοποιήστε ψηφιακές αγορές όταν σας βολεύει.',

        finalLabel: 'PLAY HAS NO LIMITS',
        finalTitle: 'Έτοιμοι για PS5;',
        finalText:
          'Αποκτήστε το PS5 Slim Disc από τη VYRO.',
        finalBuy: 'Αγορά PS5 Slim Disc',

        footer:
          'PlayStation hardware για πελάτες σε όλη την Ελλάδα.',
      }
    : {
        back: 'Back to VYRO',
        shop: 'PS5',
        accessories: 'Accessories',
        wholesale: 'Wholesale',

        label: 'PLAYSTATION 5 SLIM · DISC EDITION',
        title: 'Your games. Your way.',
        intro:
          'Physical or digital. PS5 Slim Disc gives you the complete PS5 experience in a slimmer design.',
        vat: 'VAT included',
        buy: 'Buy now',

        available: 'Available to order',
        sealed: 'Factory sealed',
        tracked: 'Tracked delivery',

        freedomLabel: 'PLAY YOUR WAY',
        freedomTitle: 'Disc when you want it. Digital when you don’t.',
        freedomText:
          'Play physical PS5 games and supported PS4 discs, or download games digitally from PlayStation Store.',

        discTitle: 'Integrated Disc Drive',
        discText:
          'Play compatible PS5 and PS4 games from disc and use supported Blu-ray and DVD media.',

        speedTitle: 'High-speed SSD',
        speedText:
          'PS5 SSD architecture enables fast loading in games designed to take advantage of it.',

        playTitle: 'The PS5 generation',
        playText:
          'DualSense, 4K gaming in supported titles and next-generation features in a compact PS5.',

        designLabel: 'SLIM DESIGN',
        designTitle: 'More PlayStation. Less footprint.',
        designText:
          'The newer slim design delivers the PS5 experience in a smaller body than the original model.',

        storageNumber: '1',
        storageUnit: 'TB',
        storageTitle: 'Built-in SSD',
        storageText:
          'Room for your game library with a built-in 1TB SSD.',

        specsLabel: 'TECHNICAL DETAILS',
        specsTitle: 'The essentials.',
        storage: 'Storage',
        storageValue: '1TB SSD',
        drive: 'Optical drive',
        driveValue: 'Ultra HD Blu-ray Disc Drive',
        resolution: 'Video',
        resolutionValue: '4K · up to 120Hz in supported content',
        audio: 'Audio',
        audioValue: 'Tempest 3D AudioTech in supported games',
        controller: 'Controller',
        controllerValue: 'DualSense Wireless Controller',
        connectivity: 'Network',
        connectivityValue: 'Wi-Fi · Ethernet',

        boxLabel: 'IN THE BOX',
        boxTitle: 'Ready to play.',
        boxConsole: 'PS5 Slim Disc Edition console',
        boxController: 'DualSense wireless controller',
        boxDrive: 'Integrated Disc Drive',
        boxStorage: 'Built-in 1TB SSD',
        boxHdmi: 'HDMI cable',
        boxPower: 'AC power cord',
        boxUsb: 'USB cable',
        boxFeet: 'Horizontal stand feet',

        choiceLabel: 'THE FLEXIBLE PS5',
        choiceTitle: 'One console. Two ways to buy games.',
        choiceText:
          'Keep your physical collection, buy new or pre-owned games on disc, and use digital purchases whenever you prefer.',

        finalLabel: 'PLAY HAS NO LIMITS',
        finalTitle: 'Ready for PS5?',
        finalText:
          'Get your PS5 Slim Disc directly from VYRO.',
        finalBuy: 'Buy PS5 Slim Disc',

        footer:
          'PlayStation hardware for customers across Greece.',
      }

  return (
    <main className="site-shell pro-page slim-disc-page">
      {/* HEADER */}

      <header className="site-header">
        <Link className="brand" href="/">
          <span className="brand-dot" />
          VYRO
        </Link>

        <nav className={mobileOpen ? 'main-nav is-open' : 'main-nav'}>
          <Link href="/#compare" onClick={() => setMobileOpen(false)}>
            {copy.shop}
          </Link>

          <Link href="/#accessories" onClick={() => setMobileOpen(false)}>
            {copy.accessories}
          </Link>

          <Link href="/wholesale" onClick={() => setMobileOpen(false)}>
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
              <strong>€549.99</strong>
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

        <div className="pro-product-stage slim-disc-stage">
          <div className="pro-product-glow" />

          <img
            src="/images/ps5-slim-disc.PNG"
            alt="PlayStation 5 Slim Disc Edition"
            draggable={false}
          />
        </div>
      </section>

      {/* PLAY YOUR WAY */}

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
            <Disc3 size={22} />
            <h3>{copy.discTitle}</h3>
            <p>{copy.discText}</p>
          </article>

          <article className="pro-feature-card">
            <Zap size={22} />
            <h3>{copy.speedTitle}</h3>
            <p>{copy.speedText}</p>
          </article>

          <article className="pro-feature-card">
            <Gamepad2 size={22} />
            <h3>{copy.playTitle}</h3>
            <p>{copy.playText}</p>
          </article>
        </div>
      </section>

      {/* SLIM / STORAGE */}

      <section className="section pro-storage-section">
        <div className="pro-storage-hero">
          <div className="pro-storage-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.designLabel}
            </div>

            <h2>{copy.designTitle}</h2>

            <p>{copy.designText}</p>
          </div>

          <div className="pro-storage-number">
            <strong>{copy.storageNumber}</strong>
            <span>{copy.storageUnit}</span>
          </div>
        </div>

        <div className="pro-secondary-features">
          <article>
            <HardDrive size={20} />

            <h3>{copy.storageTitle}</h3>
            <p>{copy.storageText}</p>
          </article>

          <article>
            <Disc3 size={20} />

            <h3>{copy.choiceLabel}</h3>
            <p>{copy.choiceText}</p>
          </article>
        </div>
      </section>

      {/* SPECS */}

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
            <span>{copy.storage}</span>
            <strong>{copy.storageValue}</strong>
          </div>

          <div>
            <span>{copy.drive}</span>
            <strong>{copy.driveValue}</strong>
          </div>

          <div>
            <span>{copy.resolution}</span>
            <strong>{copy.resolutionValue}</strong>
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
            <span>{copy.connectivity}</span>
            <strong>{copy.connectivityValue}</strong>
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
          <div className="pro-box-image slim-disc-box-image">
            <img
              src="/images/ps5-slim-disc.PNG"
              alt="PS5 Slim Disc Edition"
              draggable={false}
            />
          </div>

          <div className="pro-box-list">
            {[
              copy.boxConsole,
              copy.boxController,
              copy.boxDrive,
              copy.boxStorage,
              copy.boxHdmi,
              copy.boxPower,
              copy.boxUsb,
              copy.boxFeet,
            ].map((item) => (
              <div key={item}>
                <Check size={14} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOICE MESSAGE */}

      <section className="section slim-choice-section">
        <div className="slim-choice-card">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.choiceLabel}
          </div>

          <Disc3 size={38} className="slim-choice-icon" />

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
            <strong>€549.99</strong>
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
