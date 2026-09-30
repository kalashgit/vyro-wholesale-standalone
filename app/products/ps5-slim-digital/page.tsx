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
  'https://buy.stripe.com/28E00cbLqbrEfgbg9BcQU0m'

type Language = 'en' | 'el'

export default function PS5SlimDigitalPage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)

  const isGreek = language === 'el'

  const copy = isGreek
    ? {
        back: 'Πίσω στη VYRO',
        shop: 'PS5',
        accessories: 'Αξεσουάρ',
        wholesale: 'Χονδρική',

        label: 'PLAYSTATION 5 · SLIM DIGITAL',
        title: 'Slim. Digital. PS5.',
        intro:
          'Η εμπειρία PS5 σε λεπτότερο, πλήρως ψηφιακό σχεδιασμό. Χωρίς φυσικούς δίσκους. Απλώς κατεβάστε και παίξτε.',
        vat: 'με ΦΠΑ',
        buy: 'Αγορά τώρα',

        available: 'Διαθέσιμο για παραγγελία',
        sealed: 'Εργοστασιακά σφραγισμένο',
        tracked: 'Αποστολή με tracking',

        slimLabel: 'SLIM BY DESIGN',
        slimTitle: 'Η δύναμη του PS5. Σε πιο λεπτό σχεδιασμό.',
        slimText:
          'Σχεδιασμένο για να προσφέρει την εμπειρία της γενιάς PS5 σε ένα πιο compact, πλήρως ψηφιακό σύστημα.',

        digitalTitle: 'All digital',
        digitalText:
          'Αγοράστε και κατεβάστε συμβατά παιχνίδια απευθείας από το PlayStation Store.',

        speedTitle: 'Γρήγορος SSD',
        speedText:
          'Γρήγορη φόρτωση σε παιχνίδια που έχουν σχεδιαστεί για να αξιοποιούν την αρχιτεκτονική SSD του PS5.',

        controllerTitle: 'DualSense',
        controllerText:
          'Ζήστε υποστηριζόμενα παιχνίδια με haptic feedback και adaptive triggers μέσω του DualSense.',

        experienceLabel: 'BUILT FOR PLAY',
        experienceTitle: 'Μικρότερο αποτύπωμα. Μεγάλη εμπειρία.',
        experienceText:
          'Το PS5 Slim Digital κρατά την εμπειρία PlayStation 5 καθαρή και απλή για παίκτες που προτιμούν ψηφιακά παιχνίδια.',

        libraryTitle: 'Η βιβλιοθήκη σας',
        libraryText:
          'Αγοράστε, κατεβάστε και διαχειριστείτε τα ψηφιακά παιχνίδια σας μέσω του PlayStation Network.',

        simpleTitle: 'Χωρίς αλλαγή δίσκων',
        simpleText:
          'Επιλέξτε ένα εγκατεστημένο παιχνίδι από τη βιβλιοθήκη σας και ξεκινήστε.',

        specsLabel: 'TECHNICAL DETAILS',
        specsTitle: 'Τα βασικά.',

        format: 'Μορφή',
        formatValue: 'PS5 Slim · Digital Edition',

        storage: 'Αποθήκευση',
        storageValue: 'SSD',

        media: 'Μέσα',
        mediaValue: 'Digital games',

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
        boxTitle: 'Όλα όσα χρειάζεστε για να ξεκινήσετε.',

        boxConsole: 'Κονσόλα PS5 Slim Digital',
        boxController: 'Ασύρματο χειριστήριο DualSense',
        boxHdmi: 'Καλώδιο HDMI',
        boxPower: 'Καλώδιο τροφοδοσίας',
        boxUsb: 'Καλώδιο USB',
        boxFeet: 'Πόδια οριζόντιας τοποθέτησης',
        boxManual: 'Έντυπο υλικό / οδηγίες',

        important: 'Πριν αγοράσετε',
        importantText:
          'Αυτή είναι η ψηφιακή έκδοση του PS5 Slim και δεν περιλαμβάνει ενσωματωμένο disc drive. Τα παιχνίδια μπορούν να αγοραστούν και να κατέβουν ψηφιακά. Η συμβατότητα με ξεχωριστό Disc Drive εξαρτάται από το ακριβές μοντέλο της κονσόλας.',

        choiceLabel: 'WHY SLIM DIGITAL',
        choiceTitle: 'Για παίκτες που έχουν ήδη γίνει digital.',
        choiceText:
          'Ένα πιο compact PS5 για όσους θέλουν την εμπειρία της νέας γενιάς χωρίς να βασίζονται σε φυσικούς δίσκους.',

        finalLabel: 'PLAY HAS NO LIMITS',
        finalTitle: 'Έτοιμοι για PS5 Slim Digital;',
        finalText:
          'Αποκτήστε το PS5 Slim Digital απευθείας από τη VYRO.',
        finalBuy: 'Αγορά PS5 Slim Digital',

        footer:
          'PlayStation hardware για πελάτες σε όλη την Ελλάδα.',
      }
    : {
        back: 'Back to VYRO',
        shop: 'PS5',
        accessories: 'Accessories',
        wholesale: 'Wholesale',

        label: 'PLAYSTATION 5 · SLIM DIGITAL',
        title: 'Slim. Digital. PS5.',
        intro:
          'The PS5 experience in a slimmer, all-digital design. No physical game discs. Just download and play.',
        vat: 'VAT included',
        buy: 'Buy now',

        available: 'Available to order',
        sealed: 'Factory sealed',
        tracked: 'Tracked delivery',

        slimLabel: 'SLIM BY DESIGN',
        slimTitle: 'The power of PS5. In a slimmer design.',
        slimText:
          'Designed to deliver the PS5 generation in a more compact, all-digital system.',

        digitalTitle: 'All digital',
        digitalText:
          'Purchase and download compatible games directly from PlayStation Store.',

        speedTitle: 'High-speed SSD',
        speedText:
          'Fast loading in games designed to take advantage of PS5 SSD architecture.',

        controllerTitle: 'DualSense',
        controllerText:
          'Experience supported games with haptic feedback and adaptive triggers through DualSense.',

        experienceLabel: 'BUILT FOR PLAY',
        experienceTitle: 'Smaller footprint. Big experience.',
        experienceText:
          'PS5 Slim Digital keeps the PlayStation 5 experience clean and simple for players who prefer digital games.',

        libraryTitle: 'Your library',
        libraryText:
          'Purchase, download and manage your digital games through PlayStation Network.',

        simpleTitle: 'No discs to swap',
        simpleText:
          'Choose an installed game from your library and start playing.',

        specsLabel: 'TECHNICAL DETAILS',
        specsTitle: 'The essentials.',

        format: 'Format',
        formatValue: 'PS5 Slim · Digital Edition',

        storage: 'Storage',
        storageValue: 'SSD',

        media: 'Media',
        mediaValue: 'Digital games',

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
        boxTitle: 'Everything you need to get started.',

        boxConsole: 'PS5 Slim Digital console',
        boxController: 'DualSense wireless controller',
        boxHdmi: 'HDMI cable',
        boxPower: 'AC power cord',
        boxUsb: 'USB cable',
        boxFeet: 'Horizontal stand feet',
        boxManual: 'Printed materials / instructions',

        important: 'Before you buy',
        importantText:
          'This is the digital version of PS5 Slim and does not include an integrated disc drive. Games can be purchased and downloaded digitally. Compatibility with a separately sold Disc Drive depends on the exact console model.',

        choiceLabel: 'WHY SLIM DIGITAL',
        choiceTitle: 'For players who have already gone digital.',
        choiceText:
          'A more compact PS5 for players who want the new-generation experience without relying on physical game discs.',

        finalLabel: 'PLAY HAS NO LIMITS',
        finalTitle: 'Ready for PS5 Slim Digital?',
        finalText:
          'Get your PS5 Slim Digital directly from VYRO.',
        finalBuy: 'Buy PS5 Slim Digital',

        footer:
          'PlayStation hardware for customers across Greece.',
      }

  return (
    <main className="site-shell pro-page slim-digital-page">
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
              <strong>€490</strong>
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

        <div className="pro-product-stage slim-digital-stage">
          <div className="pro-product-glow" />

          <img
            src="/images/ps5-slim-digital.png"
            alt="PlayStation 5 Slim Digital Edition"
            draggable={false}
          />
        </div>
      </section>

      {/* SLIM BY DESIGN */}

      <section className="section pro-performance">
        <div className="pro-centered-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.slimLabel}
          </div>

          <h2>{copy.slimTitle}</h2>
          <p>{copy.slimText}</p>
        </div>

        <div className="pro-feature-grid">
          <article className="pro-feature-card">
            <Cloud size={22} />

            <h3>{copy.digitalTitle}</h3>
            <p>{copy.digitalText}</p>
          </article>

          <article className="pro-feature-card">
            <Zap size={22} />

            <h3>{copy.speedTitle}</h3>
            <p>{copy.speedText}</p>
          </article>

          <article className="pro-feature-card">
            <Gamepad2 size={22} />

            <h3>{copy.controllerTitle}</h3>
            <p>{copy.controllerText}</p>
          </article>
        </div>
      </section>

      {/* BUILT FOR PLAY */}

      <section className="section pro-storage-section">
        <div className="pro-storage-hero slim-digital-hero">
          <div className="pro-storage-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.experienceLabel}
            </div>

            <h2>{copy.experienceTitle}</h2>
            <p>{copy.experienceText}</p>
          </div>

          <div className="digital-symbol">
            <Sparkles size={76} strokeWidth={1} />
          </div>
        </div>

        <div className="pro-secondary-features">
          <article>
            <HardDrive size={20} />

            <h3>{copy.libraryTitle}</h3>
            <p>{copy.libraryText}</p>
          </article>

          <article>
            <Cloud size={20} />

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
            <span>{copy.media}</span>
            <strong>{copy.mediaValue}</strong>
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
          <div className="pro-box-image slim-digital-box-image">
            <img
              src="/images/ps5-slim-digital.png"
              alt="PS5 Slim Digital Edition"
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

      {/* WHY SLIM DIGITAL */}

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
            <strong>€490</strong>
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
