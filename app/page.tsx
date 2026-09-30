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
  pro: 'https://buy.stripe.com/eVqeV63eU53g7NJ1eHcQU01',
  digital: 'https://buy.stripe.com/28EaEQ02IfHU2tpaPhcQU03',
  slimDisc: 'https://buy.stripe.com/aFabIU7va0N0d837D5cQU04',
  slimDigital: 'https://buy.stripe.com/8x2eV69DicvIfgbaPhcQU05',
  controller: 'https://buy.stripe.com/7sYaEQ7vabrE8RNe1tcQU0g',
  discDrive: 'https://buy.stripe.com/bJe9AM2aQcvI1plg9BcQU0j',
}

const products = [
  {
    key: 'pro',
    name: 'PS5 Pro',
    greek: 'PS5 Pro',
    price: '€750.00',
    image: '/images/ps5-pro.png',
    link: stripeLinks.pro,
    learnMore: '/products/ps5-pro',
    en: {
      short: 'For maximum performance.',
      headline: 'The most powerful way to play.',
      description:
        'Built for players who want more from every game.',
    },
    el: {
      short: 'Για μέγιστες επιδόσεις.',
      headline: 'Ο πιο ισχυρός τρόπος να παίξετε.',
      description:
        'Για παίκτες που θέλουν περισσότερα από κάθε παιχνίδι.',
    },
  },
  {
    key: 'slimDisc',
    name: 'PS5 Slim Disc',
    greek: 'PS5 Slim Disc',
    price: '€549.99',
    image: '/images/ps5-slim-disc.PNG',
    link: stripeLinks.slimDisc,
    learnMore: '/products/ps5-slim-disc',
    en: {
      short: 'For physical and digital games.',
      headline: 'Your games. Your way.',
      description:
        'The complete PS5 experience with an integrated disc drive.',
    },
    el: {
      short: 'Για φυσικά και ψηφιακά παιχνίδια.',
      headline: 'Τα παιχνίδια σας. Με τον τρόπο σας.',
      description:
        'Η ολοκληρωμένη εμπειρία PS5 με ενσωματωμένο disc drive.',
    },
  },
  {
    key: 'digital',
    name: 'PS5 Digital Edition',
    greek: 'PS5 Digital Edition',
    price: '€489.99',
    image: '/images/ps5-digital.PNG',
    link: stripeLinks.digital,
    learnMore: '/products/ps5-digital',
    en: {
      short: 'For an all-digital library.',
      headline: 'Go all digital.',
      description:
        'Everything you need for the PS5 generation. No discs required.',
    },
    el: {
      short: 'Για μια πλήρως ψηφιακή συλλογή.',
      headline: 'Μπείτε στην ψηφιακή εποχή.',
      description:
        'Η εμπειρία της γενιάς PS5, χωρίς την ανάγκη για δίσκους.',
    },
  },
  {
    key: 'slimDigital',
    name: 'PS5 Slim Digital',
    greek: 'PS5 Slim Digital',
    price: '€490.00',
    image: '/images/ps5-slim-digital.png',
    link: stripeLinks.slimDigital,
    learnMore: '/products/ps5-slim-digital',
    en: {
      short: 'Slim. Digital. PS5.',
      headline: 'Less console. Same generation.',
      description:
        'A slim all-digital route into the PlayStation 5 generation.',
    },
    el: {
      short: 'Slim. Digital. PS5.',
      headline: 'Πιο λεπτό. Ίδια γενιά.',
      description:
        'Μια slim, πλήρως ψηφιακή είσοδος στη γενιά PlayStation 5.',
    },
  },
]

const accessories = [
  {
    key: 'controller',
    name: 'DualSense Wireless Controller',
    greek: 'Ασύρματο χειριστήριο DualSense',
    price: '€55.99',
    image: '/images/dual-sense.png',
    link: stripeLinks.controller,
    en: {
      headline: 'Another player? Another controller.',
      description:
        'Add another DualSense wireless controller to your setup.',
    },
    el: {
      headline: 'Άλλος ένας παίκτης; Άλλο ένα χειριστήριο.',
      description:
        'Προσθέστε ένα ακόμη ασύρματο χειριστήριο DualSense στο setup σας.',
    },
  },
  {
    key: 'discDrive',
    name: 'PS5 Disc Drive',
    greek: 'PS5 Disc Drive',
    price: '€69.99',
    image: '/images/ps5-disc-drive.png',
    link: stripeLinks.discDrive,
    en: {
      headline: 'Add the disc experience.',
      description:
        'Expand a compatible PS5 digital console with a disc drive.',
    },
    el: {
      headline: 'Προσθέστε την εμπειρία του δίσκου.',
      description:
        'Προσθέστε disc drive σε συμβατό ψηφιακό PS5.',
    },
  },
]

type Language = 'en' | 'el'

export default function Page() {
  const [language, setLanguage] = useState<Language>('en')
  const [mobileOpen, setMobileOpen] = useState(false)

  const isGreek = language === 'el'

  const copy = isGreek
    ? {
        navShop: 'PS5',
        navAccessories: 'Αξεσουάρ',
        navSupport: 'Υποστήριξη',
        navCreators: 'Creators',
        navWholesale: 'Χονδρική',

        heroLabel: 'PLAYSTATION 5 PRO',
        heroTitle: 'Ο πιο ισχυρός τρόπος να παίξετε.',
        heroText:
          'PS5 Pro. Για παίκτες που θέλουν περισσότερα από κάθε παιχνίδι.',
        vat: 'με ΦΠΑ',
        learnMore: 'Μάθετε περισσότερα',
        buy: 'Αγορά',

        heroTrust:
          'Εργοστασιακά σφραγισμένο · Ευρωπαϊκό μοντέλο · Αποστολή με tracking',

        slimLabel: 'PLAYSTATION 5 SLIM DISC',
        slimTitle: 'Τα παιχνίδια σας. Με τον τρόπο σας.',
        slimText:
          'Η ολοκληρωμένη εμπειρία PS5 με ενσωματωμένο disc drive.',

        digitalLabel: 'PLAYSTATION 5 DIGITAL EDITION',
        digitalTitle: 'Μπείτε στην ψηφιακή εποχή.',
        digitalText:
          'Η εμπειρία της γενιάς PS5, χωρίς την ανάγκη για δίσκους.',

        compareLabel: 'ΣΥΓΚΡΙΣΗ',
        compareTitle: 'Ποιο PS5 είναι για εσάς;',
        compareText:
          'Βρείτε το μοντέλο που ταιριάζει στον τρόπο που παίζετε.',
        viewModel: 'Δείτε το μοντέλο',

        standardLabel: 'ΤΟ ΠΡΟΤΥΠΟ VYRO',
        standardTitle:
          'Χωρίς αβεβαιότητα από την παραγγελία έως την παράδοση.',
        standardText:
          'Καθαρή τιμολόγηση, παρακολούθηση αποστολής και άμεση υποστήριξη όταν τη χρειάζεστε.',

        sealedTitle: 'Εργοστασιακά σφραγισμένο',
        sealedText:
          'Καινούργια προϊόντα, σφραγισμένα από το εργοστάσιο.',

        vatTitle: 'Ο ΦΠΑ περιλαμβάνεται',
        vatText:
          'Η εμφανιζόμενη τιμή περιλαμβάνει ΦΠΑ.',

        trackedTitle: 'Αποστολή με tracking',
        trackedText:
          'Παρακολούθηση μόλις αποσταλεί η παραγγελία σας.',

        supportTitle: 'Άμεση υποστήριξη',
        supportText:
          'Επικοινωνήστε απευθείας με τη VYRO πριν και μετά την αγορά.',

        accessoriesLabel: 'ΟΛΟΚΛΗΡΩΣΤΕ ΤΟ SETUP',
        accessoriesTitle: 'Περισσότερα από την κονσόλα.',
        accessoriesText:
          'Αξεσουάρ για να ολοκληρώσετε την εμπειρία PS5.',

        brandLabel: 'VYRO',
        brandTitle: 'Gaming for the people.',
        brandText:
          'Πιστεύουμε ότι η κορυφαία τεχνολογία πρέπει να είναι πιο προσιτή. Η VYRO φέρνει gaming hardware σε πελάτες σε όλη την Ελλάδα με ξεκάθαρες τιμές, παρακολούθηση αποστολής και άμεση υποστήριξη.',

        wholesaleTitle: 'Αγοράζετε για επιχείρηση;',
        wholesaleText:
          'Διατίθεται τιμολόγηση βάσει όγκου για retailers και εμπορικούς συνεργάτες.',
        wholesaleCta: 'VYRO Wholesale',

        contact: 'Επικοινωνία',
        delivery: 'Παράδοση',
        terms: 'Όροι',
        privacy: 'Απόρρητο',
        footerText:
          'PlayStation hardware για πελάτες σε όλη την Ελλάδα.',
      }
    : {
        navShop: 'PS5',
        navAccessories: 'Accessories',
        navSupport: 'Support',
        navCreators: 'Creators',
        navWholesale: 'Wholesale',

        heroLabel: 'PLAYSTATION 5 PRO',
        heroTitle: 'The most powerful way to play.',
        heroText:
          'PS5 Pro. Built for players who want more from every game.',
        vat: 'VAT included',
        learnMore: 'Learn more',
        buy: 'Buy',

        heroTrust:
          'Factory sealed · European model · Tracked delivery',

        slimLabel: 'PLAYSTATION 5 SLIM DISC',
        slimTitle: 'Your games. Your way.',
        slimText:
          'The complete PS5 experience with an integrated disc drive.',

        digitalLabel: 'PLAYSTATION 5 DIGITAL EDITION',
        digitalTitle: 'Go all digital.',
        digitalText:
          'Everything you need for the PS5 generation. No discs required.',

        compareLabel: 'COMPARE',
        compareTitle: 'Which PS5 is right for you?',
        compareText:
          'Find the model that fits the way you play.',
        viewModel: 'View model',

        standardLabel: 'THE VYRO STANDARD',
        standardTitle:
          'No uncertainty between order and delivery.',
        standardText:
          'Clear pricing, tracked delivery and direct support when you need it.',

        sealedTitle: 'Factory sealed',
        sealedText:
          'Brand-new products supplied factory sealed.',

        vatTitle: 'VAT included',
        vatText:
          'The displayed price includes VAT.',

        trackedTitle: 'Tracked delivery',
        trackedText:
          'Follow your order once it has been dispatched.',

        supportTitle: 'Direct support',
        supportText:
          'Speak directly with VYRO before and after your purchase.',

        accessoriesLabel: 'COMPLETE YOUR SETUP',
        accessoriesTitle: 'More than the console.',
        accessoriesText:
          'The essentials to complete your PS5 setup.',

        brandLabel: 'VYRO',
        brandTitle: 'Gaming for the people.',
        brandText:
          'We believe great technology should be easier to access. VYRO brings gaming hardware to customers across Greece with straightforward pricing, tracked fulfilment and direct support.',

        wholesaleTitle: 'Buying for your business?',
        wholesaleText:
          'Volume pricing is available for retailers and trade partners.',
        wholesaleCta: 'VYRO Wholesale',

        contact: 'Contact',
        delivery: 'Delivery',
        terms: 'Terms',
        privacy: 'Privacy',
        footerText:
          'PlayStation hardware for customers across Greece.',
      }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setMobileOpen(false)
  }

  return (
    <main className="site-shell retail-home">
      {/* =====================================================
          HEADER
          ===================================================== */}

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
          id="main-navigation"
          className={
            mobileOpen
              ? 'main-nav is-open'
              : 'main-nav'
          }
        >
          <button onClick={() => scrollTo('compare')}>
            {copy.navShop}
          </button>

          <button onClick={() => scrollTo('accessories')}>
            {copy.navAccessories}
          </button>

          <button onClick={() => scrollTo('vyro-standard')}>
            {copy.navSupport}
          </button>

          <Link
            className="nav-creator-link"
            href="/Creators"
            onClick={() => setMobileOpen(false)}
          >
            {copy.navCreators}
          </Link>

          <Link
            href="/wholesale"
            onClick={() => setMobileOpen(false)}
          >
            {copy.navWholesale}
          </Link>
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
              setMobileOpen((current) => !current)
            }
            aria-label={
              mobileOpen
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={mobileOpen}
            aria-controls="main-navigation"
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          PS5 PRO — COMMERCIAL HERO
          ===================================================== */}

      <section
        className="product-hero product-hero-pro"
        id="top"
      >
        <div className="product-hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.heroLabel}
          </div>

          <h1>{copy.heroTitle}</h1>

          <p>{copy.heroText}</p>

          <div className="hero-price">
            <strong>€750</strong>
            <span>{copy.vat}</span>
          </div>

          <div className="hero-actions">
            <Link
              className="button button-ghost"
              href="/products/ps5-pro"
            >
              {copy.learnMore}
            </Link>

            <a
              className="button button-primary"
              href={stripeLinks.pro}
              target="_blank"
              rel="noreferrer"
            >
              {copy.buy}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="product-hero-visual">
          <div className="product-hero-glow" />

          <img
            src="/images/ps5-pro.png"
            alt="PlayStation 5 Pro"
            draggable={false}
          />
        </div>

        <div className="product-hero-trust">
          <ShieldCheck size={15} />
          <span>{copy.heroTrust}</span>
        </div>
      </section>

      {/* =====================================================
          PS5 SLIM DISC — FEATURE CAMPAIGN
          ===================================================== */}

      <section className="campaign-section">
        <article className="campaign-card campaign-slim-disc">
          <div className="campaign-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.slimLabel}
            </div>

            <h2>{copy.slimTitle}</h2>

            <p>{copy.slimText}</p>

            <div className="campaign-price">
              <strong>€549.99</strong>
              <span>{copy.vat}</span>
            </div>

            <div className="campaign-actions">
              <Link
                className="button button-ghost"
                href="/products/ps5-slim-disc"
              >
                {copy.learnMore}
              </Link>

              <a
                className="button button-primary"
                href={stripeLinks.slimDisc}
                target="_blank"
                rel="noreferrer"
              >
                {copy.buy}
              </a>
            </div>
          </div>

          <div className="campaign-visual">
            <img
              src="/images/ps5-slim-disc.PNG"
              alt="PlayStation 5 Slim Disc Edition"
              draggable={false}
            />
          </div>
        </article>
      </section>

      {/* =====================================================
          PS5 DIGITAL — FEATURE CAMPAIGN
          ===================================================== */}

      <section className="campaign-section">
        <article className="campaign-card campaign-digital">
          <div className="campaign-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.digitalLabel}
            </div>

            <h2>{copy.digitalTitle}</h2>

            <p>{copy.digitalText}</p>

            <div className="campaign-price">
              <strong>€489.99</strong>
              <span>{copy.vat}</span>
            </div>

            <div className="campaign-actions">
              <Link
                className="button button-ghost"
                href="/products/ps5-digital"
              >
                {copy.learnMore}
              </Link>

              <a
                className="button button-primary"
                href={stripeLinks.digital}
                target="_blank"
                rel="noreferrer"
              >
                {copy.buy}
              </a>
            </div>
          </div>

          <div className="campaign-visual">
            <img
              src="/images/ps5-digital.PNG"
              alt="PlayStation 5 Digital Edition"
              draggable={false}
            />
          </div>
        </article>
      </section>

      {/* =====================================================
          PS5 COMPARISON
          ===================================================== */}

      <section
        className="section compare-section"
        id="compare"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.compareLabel}
            </div>

            <h2>{copy.compareTitle}</h2>
          </div>

          <p>{copy.compareText}</p>
        </div>

        <div className="compare-grid">
          {products.map((product) => {
            const text = isGreek
              ? product.el
              : product.en

            return (
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
                  <h3>
                    {isGreek
                      ? product.greek
                      : product.name}
                  </h3>

                  <p>{text.short}</p>

                  <strong className="compare-price">
                    {product.price}
                  </strong>

                  <span className="compare-vat">
                    {copy.vat}
                  </span>

                  <div className="compare-actions">
                    <Link
                      href={product.learnMore}
                      className="text-link"
                    >
                      {copy.viewModel}
                      <ArrowRight size={14} />
                    </Link>

                    <a
                      href={product.link}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-primary"
                    >
                      {copy.buy}
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* =====================================================
          VYRO STANDARD
          ===================================================== */}

      <section
        className="section service-section"
        id="vyro-standard"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.standardLabel}
            </div>

            <h2>{copy.standardTitle}</h2>
          </div>

          <p>{copy.standardText}</p>
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
            <Check size={18} />

            <div>
              <h3>{copy.vatTitle}</h3>
              <p>{copy.vatText}</p>
            </div>
          </article>

          <article className="service-card">
            <Package size={18} />

            <div>
              <h3>{copy.trackedTitle}</h3>
              <p>{copy.trackedText}</p>
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

      {/* =====================================================
          ACCESSORIES
          ===================================================== */}

      <section
        className="section accessories-section"
        id="accessories"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {copy.accessoriesLabel}
            </div>

            <h2>{copy.accessoriesTitle}</h2>
          </div>

          <p>{copy.accessoriesText}</p>
        </div>

        <div className="accessories-grid">
          {accessories.map((accessory) => {
            const text = isGreek
              ? accessory.el
              : accessory.en

            return (
              <article
                className={`accessory-card accessory-${accessory.key}`}
                key={accessory.key}
              >
                <div className="accessory-visual">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    draggable={false}
                  />
                </div>

                <div className="accessory-content">
                  <small>
                    {isGreek
                      ? accessory.greek
                      : accessory.name}
                  </small>

                  <h3>{text.headline}</h3>

                  <p>{text.description}</p>

                  <div className="accessory-purchase">
                    <div>
                      <strong>
                        {accessory.price}
                      </strong>
                      <span>{copy.vat}</span>
                    </div>

                    <a
                      className="button button-primary"
                      href={accessory.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy.buy}
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* =====================================================
          BRAND
          ===================================================== */}

      <section className="section brand-section">
        <div className="brand-manifesto">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {copy.brandLabel}
          </div>

          <h2>{copy.brandTitle}</h2>

          <p>{copy.brandText}</p>
        </div>
      </section>

      {/* =====================================================
          WHOLESALE — SMALL RETAIL-SITE ENTRY
          ===================================================== */}

      <section className="section wholesale-teaser">
        <div>
          <h2>{copy.wholesaleTitle}</h2>
          <p>{copy.wholesaleText}</p>
        </div>

        <Link
          href="/wholesale"
          className="button button-ghost"
        >
          {copy.wholesaleCta}
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="site-footer retail-footer">
        <div className="footer-brand">
          <a
            className="brand"
            href="#top"
          >
            <span className="brand-dot" />
            VYRO
          </a>

          <p>{copy.footerText}</p>
        </div>

        <nav className="footer-links">
          <button onClick={() => scrollTo('compare')}>
            PS5
          </button>

          <button onClick={() => scrollTo('accessories')}>
            {copy.navAccessories}
          </button>

          <a href="https://wa.me/306978255016">
            {copy.contact}
          </a>

          <Link href="/wholesale">
            {copy.navWholesale}
          </Link>
        </nav>

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
