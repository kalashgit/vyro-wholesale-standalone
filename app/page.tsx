'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Globe2,
  Menu,
  MessageCircle,
  Package,
  ShieldCheck,
  X,
} from 'lucide-react'

const stripeLinks = {
  pro: 'https://buy.stripe.com/8x214g8zefHUfgbe1tcQU0k',
  digital: 'https://buy.stripe.com/bJe5kwaHmeDQgkfe1tcQU0l',
  slimDigital: 'https://buy.stripe.com/28E00cbLqbrEfgbgbe1tcQU0m',
  slimDisc: 'https://buy.stripe.com/00waEQ9Di8fsc3Z8H9cQU0n',
  discDrive: 'https://buy.stripe.com/cNi3co3eU53g9VR9LdcQU0o',
  controller: 'https://buy.stripe.com/00w9AMdTy0N07NJaPhcQU0p',
}

type Language = 'en' | 'el'

const products = [
  {
    key: 'pro',
    name: 'PS5 Pro',
    price: '€750',
    image: '/images/ps5-pro.png',
    buyLink: stripeLinks.pro,
    learnMoreLink: '/products/ps5-pro',

    headline: {
      en: 'The most powerful way to play.',
      el: 'Ο πιο ισχυρός τρόπος να παίξετε.',
    },

    description: {
      en: 'For players who want more from every game.',
      el: 'Για παίκτες που θέλουν περισσότερα από κάθε παιχνίδι.',
    },
  },

  {
    key: 'slimDisc',
    name: 'PS5 Slim Disc',
    price: '€549.99',
    image: '/images/ps5-slim-disc.PNG',
    buyLink: stripeLinks.slimDisc,
    learnMoreLink: '/products/ps5-slim-disc',

    headline: {
      en: 'Your games. Your way.',
      el: 'Τα παιχνίδια σας. Με τον τρόπο σας.',
    },

    description: {
      en: 'For physical and digital games.',
      el: 'Για φυσικά και ψηφιακά παιχνίδια.',
    },
  },

  {
    key: 'digital',
    name: 'PS5 Digital Edition',
    price: '€489.99',
    image: '/images/ps5-digital.PNG',
    buyLink: stripeLinks.digital,
    learnMoreLink: '/products/ps5-digital',

    headline: {
      en: 'Go all digital.',
      el: 'Μπείτε στην ψηφιακή εποχή.',
    },

    description: {
      en: 'The PS5 experience without physical discs.',
      el: 'Η εμπειρία PS5 χωρίς φυσικούς δίσκους.',
    },
  },

  {
    key: 'slimDigital',
    name: 'PS5 Slim Digital',
    price: '€490',
    image: '/images/ps5-slim-digital.png',
    buyLink: stripeLinks.slimDigital,
    learnMoreLink: '/products/ps5-slim-digital',

    headline: {
      en: 'Slim. Digital. PS5.',
      el: 'Slim. Digital. PS5.',
    },

    description: {
      en: 'A streamlined all-digital PS5.',
      el: 'Μια πιο κομψή, πλήρως ψηφιακή εμπειρία PS5.',
    },
  },
]

const accessories = [
  {
    key: 'controller',
    name: 'DualSense Wireless Controller',
    price: '€55.99',
    image: '/images/dual-sense.png',
    buyLink: stripeLinks.controller,
    learnMoreLink: '/products/dualsense',

    headline: {
      en: 'Another player? Another controller.',
      el: 'Άλλος παίκτης; Άλλο χειριστήριο.',
    },

    description: {
      en: 'Complete your setup with another DualSense wireless controller.',
      el: 'Ολοκληρώστε το setup σας με ένα ακόμη ασύρματο χειριστήριο DualSense.',
    },
  },

  {
    key: 'discDrive',
    name: 'PS5 Disc Drive',
    price: '€69.99',
    image: '/images/ps5-disc-drive.png',
    buyLink: stripeLinks.discDrive,
    learnMoreLink: '/products/disc-drive',

    headline: {
      en: 'Add the disc experience.',
      el: 'Προσθέστε την εμπειρία του δίσκου.',
    },

    description: {
      en: 'Add compatible physical media support to supported PS5 consoles.',
      el: 'Προσθέστε υποστήριξη συμβατών φυσικών μέσων σε υποστηριζόμενες κονσόλες PS5.',
    },
  },
]

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)

  const isGreek = language === 'el'

  const pro = products[0]
  const slimDisc = products[1]
  const digital = products[2]

  const copy = isGreek
    ? {
        navShop: 'PS5',
        navAccessories: 'Αξεσουάρ',
        navSupport: 'Υποστήριξη',
        navCreators: 'Creator Access',

        heroLabel: 'PLAYSTATION 5 PRO',
        heroHeadline: 'Ο πιο ισχυρός τρόπος να παίξετε.',
        heroText:
          'PS5 Pro. Σχεδιασμένο για παίκτες που θέλουν περισσότερα από κάθε παιχνίδι.',
        vat: 'με ΦΠΑ',
        learnMore: 'Μάθετε περισσότερα',
        buy: 'Αγορά',

        heroTrust:
          'Εργοστασιακά σφραγισμένο · Ευρωπαϊκό μοντέλο · Αποστολή με tracking σε όλη την Ελλάδα',

        slimLabel: 'PLAYSTATION 5 SLIM DISC',
        slimHeadline: 'Τα παιχνίδια σας. Με τον τρόπο σας.',
        slimText:
          'Η πλήρης εμπειρία PS5 με ενσωματωμένο disc drive.',

        digitalLabel: 'PLAYSTATION 5 DIGITAL',
        digitalHeadline: 'Μπείτε στην ψηφιακή εποχή.',
        digitalText:
          'Όλα όσα χρειάζεστε για τη γενιά PS5. Χωρίς φυσικούς δίσκους.',

        compareLabel: 'ΣΥΓΚΡΙΣΗ',
        compareHeadline: 'Ποιο PS5 είναι κατάλληλο για εσάς;',
        compareText:
          'Επιλέξτε την έκδοση που ταιριάζει στον τρόπο που παίζετε.',

        standardLabel: 'THE VYRO STANDARD',
        standardHeadline: 'Χωρίς αβεβαιότητα από την παραγγελία μέχρι την παράδοση.',
        standardText:
          'Ξεκάθαρες τιμές, αποστολή με tracking και άμεση υποστήριξη όταν τη χρειάζεστε.',

        sealedTitle: 'Εργοστασιακά σφραγισμένο',
        sealedText: 'Καινούργια προϊόντα, σφραγισμένα.',

        vatTitle: 'Ο ΦΠΑ περιλαμβάνεται',
        vatText: 'Η τιμή που βλέπετε είναι η τιμή που πληρώνετε.',

        trackedTitle: 'Αποστολή με tracking',
        trackedText: 'Παρακολουθήστε την παραγγελία σας από την αποστολή μέχρι την άφιξη.',

        supportTitle: 'Άμεση υποστήριξη',
        supportText: 'Επικοινωνήστε απευθείας με τη VYRO πριν και μετά την αγορά.',

        accessoriesLabel: 'COMPLETE YOUR SETUP',
        accessoriesHeadline: 'Περισσότερα από την κονσόλα.',
        accessoriesText:
          'Ολοκληρώστε το PlayStation setup σας.',

        brandLabel: 'VYRO',
        brandHeadline: 'Gaming for the people.',
        brandText:
          'Πιστεύουμε ότι η εξαιρετική τεχνολογία πρέπει να είναι πιο εύκολα προσβάσιμη. Η VYRO φέρνει gaming hardware σε πελάτες σε όλη την Ελλάδα με ξεκάθαρες τιμές, παρακολούθηση αποστολής και άμεση υποστήριξη.',

        wholesaleHeadline: 'Αγοράζετε για την επιχείρησή σας;',
        wholesaleText:
          'Διατίθεται τιμολόγηση βάσει όγκου για retailers και εμπορικούς συνεργάτες.',
        wholesaleButton: 'VYRO Wholesale',

        footerText:
          'PlayStation hardware για πελάτες σε όλη την Ελλάδα.',
        wholesale: 'Χονδρική',
        terms: 'Όροι',
        privacy: 'Απόρρητο',
        contact: 'Επικοινωνία',
      }
    : {
        navShop: 'PS5',
        navAccessories: 'Accessories',
        navSupport: 'Support',
        navCreators: 'Creator Access',

        heroLabel: 'PLAYSTATION 5 PRO',
        heroHeadline: 'The most powerful way to play.',
        heroText:
          'PS5 Pro. Built for players who want more from every game.',
        vat: 'VAT included',
        learnMore: 'Learn more',
        buy: 'Buy',

        heroTrust:
          'Factory sealed · European model · Tracked delivery across Greece',

        slimLabel: 'PLAYSTATION 5 SLIM DISC',
        slimHeadline: 'Your games. Your way.',
        slimText:
          'The complete PS5 experience with an integrated disc drive.',

        digitalLabel: 'PLAYSTATION 5 DIGITAL',
        digitalHeadline: 'Go all digital.',
        digitalText:
          'Everything you need for the PS5 generation. No physical game discs required.',

        compareLabel: 'COMPARE',
        compareHeadline: 'Which PS5 is right for you?',
        compareText:
          'Choose the version that fits the way you play.',

        standardLabel: 'THE VYRO STANDARD',
        standardHeadline: 'No uncertainty between order and delivery.',
        standardText:
          'Clear pricing, tracked delivery and direct support when you need it.',

        sealedTitle: 'Factory sealed',
        sealedText: 'Brand-new products supplied sealed.',

        vatTitle: 'VAT included',
        vatText: 'The price displayed is the price you pay.',

        trackedTitle: 'Tracked delivery',
        trackedText: 'Follow your order from dispatch to arrival.',

        supportTitle: 'Direct support',
        supportText: 'Speak directly with VYRO before and after your purchase.',

        accessoriesLabel: 'COMPLETE YOUR SETUP',
        accessoriesHeadline: 'More than the console.',
        accessoriesText:
          'Complete your PlayStation setup.',

        brandLabel: 'VYRO',
        brandHeadline: 'Gaming for the people.',
        brandText:
          'We believe great technology should be easier to access. VYRO brings gaming hardware to customers across Greece with straightforward pricing, tracked fulfilment and direct support.',

        wholesaleHeadline: 'Buying for your business?',
        wholesaleText:
          'Volume pricing is available for retailers and trade partners.',
        wholesaleButton: 'VYRO Wholesale',

        footerText:
          'PlayStation hardware for customers across Greece.',
        wholesale: 'Wholesale',
        terms: 'Terms',
        privacy: 'Privacy',
        contact: 'Contact',
      }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setMobileOpen(false)
  }

  return (
    <main className="site-shell retail-home">
      {/* HEADER */}

      <header className="site-header">
        <Link className="brand" href="/">
          <span className="brand-dot" />
          VYRO
        </Link>

        <nav className={mobileOpen ? 'main-nav is-open' : 'main-nav'}>
          <button onClick={() => scrollTo('compare')}>
            {copy.navShop}
          </button>

          <button onClick={() => scrollTo('accessories')}>
            {copy.navAccessories}
          </button>

          <button onClick={() => scrollTo('standard')}>
            {copy.navSupport}
          </button>

          <Link
            className="nav-creator-link"
            href="/creators"
            onClick={() => setMobileOpen(false)}
          >
            {copy.navCreators}
          </Link>
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLanguage(isGreek ? 'en' : 'el')}
            aria-label="Change language"
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

      {/* PS5 PRO HERO */}

      <section className="product-hero product-hero-pro">
        <div className="product-hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.heroLabel}
          </div>

          <h1>{copy.heroHeadline}</h1>

          <p>{copy.heroText}</p>

          <div className="hero-price">
            <strong>{pro.price}</strong>
            <span>{copy.vat}</span>
          </div>

          <div className="hero-actions">
            <Link
              className="button button-ghost"
              href={pro.learnMoreLink}
            >
              {copy.learnMore}
              <ArrowRight size={15} />
            </Link>

            <a
              className="button button-primary"
              href={pro.buyLink}
              target="_blank"
              rel="noreferrer"
            >
              {copy.buy}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="product-hero-visual">
          <div className="product-hero-glow" />

          <img
            src={pro.image}
            alt={pro.name}
            draggable={false}
          />
        </div>

        <div className="product-hero-trust">
          <ShieldCheck size={14} />
          {copy.heroTrust}
        </div>
      </section>

      {/* SLIM DISC CAMPAIGN */}

      <section className="campaign-section">
        <article className="campaign-card campaign-slim-disc">
          <div className="campaign-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.slimLabel}
            </div>

            <h2>{copy.slimHeadline}</h2>
            <p>{copy.slimText}</p>

            <div className="campaign-price">
              <strong>{slimDisc.price}</strong>
              <span>{copy.vat}</span>
            </div>

            <div className="campaign-actions">
              <Link
                className="button button-ghost"
                href={slimDisc.learnMoreLink}
              >
                {copy.learnMore}
              </Link>

              <a
                className="button button-primary"
                href={slimDisc.buyLink}
                target="_blank"
                rel="noreferrer"
              >
                {copy.buy}
              </a>
            </div>
          </div>

          <div className="campaign-visual">
            <img
              src={slimDisc.image}
              alt={slimDisc.name}
              draggable={false}
            />
          </div>
        </article>
      </section>

      {/* DIGITAL CAMPAIGN */}

      <section className="campaign-section">
        <article className="campaign-card campaign-digital">
          <div className="campaign-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.digitalLabel}
            </div>

            <h2>{copy.digitalHeadline}</h2>
            <p>{copy.digitalText}</p>

            <div className="campaign-price">
              <strong>{digital.price}</strong>
              <span>{copy.vat}</span>
            </div>

            <div className="campaign-actions">
              <Link
                className="button button-ghost"
                href={digital.learnMoreLink}
              >
                {copy.learnMore}
              </Link>

              <a
                className="button button-primary"
                href={digital.buyLink}
                target="_blank"
                rel="noreferrer"
              >
                {copy.buy}
              </a>
            </div>
          </div>

          <div className="campaign-visual">
            <img
              src={digital.image}
              alt={digital.name}
              draggable={false}
            />
          </div>
        </article>
      </section>

      {/* COMPARE */}

      <section id="compare" className="section compare-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.compareLabel}
            </div>

            <h2>{copy.compareHeadline}</h2>
          </div>

          <p>{copy.compareText}</p>
        </div>

        <div className="compare-grid">
          {products.map((product) => (
            <article
              className={`compare-card compare-${product.key}`}
              key={product.key}
            >
              <div className="compare-visual">
                <img
                  src={product.image}
                  alt={product.name}
                  draggable={false}
                />
              </div>

              <div className="compare-content">
                <h3>{product.name}</h3>

                <p>
                  {isGreek
                    ? product.description.el
                    : product.description.en}
                </p>

                <strong className="compare-price">
                  {product.price}
                </strong>

                <span className="compare-vat">
                  {copy.vat}
                </span>

                <div className="compare-actions">
                  <Link
                    className="text-link"
                    href={product.learnMoreLink}
                  >
                    {copy.learnMore}
                    <ArrowRight size={12} />
                  </Link>

                  <a
                    className="button button-primary"
                    href={product.buyLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.buy}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VYRO STANDARD */}

      <section
        id="standard"
        className="section service-section"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.standardLabel}
            </div>

            <h2>{copy.standardHeadline}</h2>
          </div>

          <p>{copy.standardText}</p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <ShieldCheck size={20} />

            <div>
              <h3>{copy.sealedTitle}</h3>
              <p>{copy.sealedText}</p>
            </div>
          </article>

          <article className="service-card">
            <Check size={20} />

            <div>
              <h3>{copy.vatTitle}</h3>
              <p>{copy.vatText}</p>
            </div>
          </article>

          <article className="service-card">
            <Package size={20} />

            <div>
              <h3>{copy.trackedTitle}</h3>
              <p>{copy.trackedText}</p>
            </div>
          </article>

          <article className="service-card">
            <MessageCircle size={20} />

            <div>
              <h3>{copy.supportTitle}</h3>
              <p>{copy.supportText}</p>
            </div>
          </article>
        </div>
      </section>

      {/* ACCESSORIES */}

      <section
        id="accessories"
        className="section accessories-section"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.accessoriesLabel}
            </div>

            <h2>{copy.accessoriesHeadline}</h2>
          </div>

          <p>{copy.accessoriesText}</p>
        </div>

        <div className="accessories-grid">
          {accessories.map((product) => (
            <article
              className={`accessory-card accessory-${product.key}`}
              key={product.key}
            >
              <div className="accessory-visual">
                <img
                  src={product.image}
                  alt={product.name}
                  draggable={false}
                />
              </div>

              <div className="accessory-content">
                <small>{product.name}</small>

                <h3>
                  {isGreek
                    ? product.headline.el
                    : product.headline.en}
                </h3>

                <p>
                  {isGreek
                    ? product.description.el
                    : product.description.en}
                </p>

                <div className="accessory-purchase">
                  <div>
                    <strong>{product.price}</strong>
                    <span>{copy.vat}</span>
                  </div>

                  <div>
                    <Link
                      className="text-link"
                      href={product.learnMoreLink}
                    >
                      {copy.learnMore}
                    </Link>

                    <a
                      className="button button-primary"
                      href={product.buyLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy.buy}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BRAND */}

      <section className="section brand-section">
        <div className="brand-manifesto">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.brandLabel}
          </div>

          <h2>{copy.brandHeadline}</h2>

          <p>{copy.brandText}</p>
        </div>
      </section>

      {/* WHOLESALE TEASER */}

      <section className="section wholesale-teaser">
        <div>
          <h2>{copy.wholesaleHeadline}</h2>
          <p>{copy.wholesaleText}</p>
        </div>

        <Link
          href="/wholesale"
          className="button button-ghost"
        >
          {copy.wholesaleButton}
          <ArrowRight size={15} />
        </Link>
      </section>

      {/* FOOTER */}

      <footer className="site-footer retail-footer">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <span className="brand-dot" />
            VYRO
          </Link>

          <p>{copy.footerText}</p>
        </div>

        <div className="footer-links">
          <button onClick={() => scrollTo('compare')}>
            {copy.navShop}
          </button>

          <button onClick={() => scrollTo('accessories')}>
            {copy.navAccessories}
          </button>

          <Link href="/wholesale">
            {copy.wholesale}
          </Link>

          <Link href="/contact">
            {copy.contact}
          </Link>
        </div>

        <div className="footer-legal">
          <span>© 2026 VYRO</span>

          <Link href="/terms">
            {copy.terms}
          </Link>

          <Link href="/privacy">
            {copy.privacy}
          </Link>
        </div>
      </footer>
    </main>
  )
}
