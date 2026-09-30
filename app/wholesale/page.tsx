'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  Menu,
  PackageCheck,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react';

const products = [
  {
    name: 'PS5 Pro',
    retail: '€899,99',
    five: '€725',
    ten: '€715',
    twenty: '€705',
    fifty: '€690',
    discount: '23,3%',
  },
  {
    name: 'PS5 Digital',
    retail: '€599,99',
    five: '€475',
    ten: '€465',
    twenty: '€455',
    fifty: '€445',
    discount: '25,8%',
  },
  {
    name: 'PS5 Slim Disc',
    retail: '€649,99',
    five: '€535',
    ten: '€525',
    twenty: '€515',
    fifty: '€505',
    discount: '22,3%',
  },
  {
    name: 'PS5 Slim Digital',
    retail: '€599,99',
    five: '€475',
    ten: '€465',
    twenty: '€455',
    fifty: '€445',
    discount: '25,8%',
  },
  {
    name: 'PS5 Disc Drive',
    retail: '€79,99',
    five: '€68',
    ten: '€67',
    twenty: '€65',
    fifty: '€64',
    discount: '20,0%',
  },
  {
    name: 'PS5 DualSense Controller',
    retail: '€74,99',
    five: '€54',
    ten: '€53',
    twenty: '€52',
    fifty: '€51',
    discount: '32,0%',
  },
];

export default function WholesalePage() {
  const [language, setLanguage] = useState<'EL' | 'EN'>('EL');
  const [menuOpen, setMenuOpen] = useState(false);

  const greek = language === 'EL';

  return (
    <main className="site-shell wholesale-page">
      {/* HEADER */}
      <header className="site-header">
        <Link href="/" className="brand">
          VYRO
          <span className="brand-dot" />
        </Link>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <Link href="/">{greek ? 'ΛΙΑΝΙΚΗ' : 'RETAIL'}</Link>
          <a href="#pricing">{greek ? 'ΤΙΜΕΣ' : 'PRICING'}</a>
          <a href="#process">{greek ? 'ΔΙΑΔΙΚΑΣΙΑ' : 'PROCESS'}</a>
          <a href="#quote">{greek ? 'ΕΠΙΚΟΙΝΩΝΙΑ' : 'CONTACT'}</a>
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLanguage(greek ? 'EN' : 'EL')}
            aria-label="Change language"
          >
            <Globe2 size={15} />
            {language}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="wholesale-hero">
        <div className="wholesale-hero-inner">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {greek ? 'VYRO ΧΟΝΔΡΙΚΗ' : 'VYRO WHOLESALE'}
          </div>

          <h1>
            {greek
              ? 'PlayStation stock. Έτοιμο για μεταπώληση.'
              : 'PlayStation stock. Built for resale.'}
          </h1>

          <p>
            {greek
              ? 'Τιμές όγκου για καταστήματα, e-commerce επιχειρήσεις και εμπορικούς συνεργάτες.'
              : 'Volume pricing for retailers, e-commerce businesses and trade partners.'}
          </p>

          <div className="wholesale-hero-actions">
            <a href="#pricing" className="button button-primary">
              {greek ? 'Δείτε τιμές χονδρικής' : 'View wholesale pricing'}
              <ArrowRight size={15} />
            </a>

            <a href="#quote" className="button button-ghost">
              {greek ? 'Ζητήστε προσφορά' : 'Request a quote'}
            </a>
          </div>

          <div className="wholesale-hero-meta">
            <span>
              <PackageCheck size={15} />
              MOQ 5
            </span>

            <span>
              <Truck size={15} />
              {greek ? 'Παραγγελίες όγκου' : 'Volume orders'}
            </span>

            <span>
              <ShieldCheck size={15} />
              {greek ? 'Άμεση επιβεβαίωση' : 'Direct confirmation'}
            </span>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section wholesale-pricing-section">
        <div className="wholesale-pricing-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {greek ? 'ΤΙΜΕΣ ΧΟΝΔΡΙΚΗΣ' : 'WHOLESALE PRICING'}
          </div>

          <h2>
            {greek
              ? 'Τιμολόγηση ανά μονάδα βάσει όγκου'
              : 'Per-unit pricing based on volume'}
          </h2>

          <p>
            {greek
              ? 'Η τιμή ανά μονάδα μειώνεται όσο αυξάνεται ο όγκος παραγγελίας. Οι τιμές χονδρικής εμφανίζονται χωρίς ΦΠΑ.'
              : 'Per-unit pricing decreases as order volume increases. Wholesale prices are shown excluding VAT.'}
          </p>

          <div className="wholesale-moq">
            <span>•</span>
            {greek
              ? 'Ελάχιστη ποσότητα παραγγελίας — 5 τεμάχια'
              : 'Minimum order quantity — 5 units'}
          </div>
        </div>

        <div className="wholesale-table-wrap">
          <table className="wholesale-table">
            <thead>
              <tr>
                <th>{greek ? 'ΠΡΟΪΟΝ' : 'PRODUCT'}</th>
                <th>{greek ? 'ΤΙΜΗ ΛΙΑΝ.' : 'RRP'}</th>
                <th>5+</th>
                <th>10+</th>
                <th>20+</th>
                <th>50+</th>
                <th>{greek ? 'ΕΚΠΤΩΣΗ @50+' : 'DISCOUNT @50+'}</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td className="wholesale-product-name">
                    {product.name}
                  </td>

                  <td className="wholesale-retail-price">
                    {product.retail}
                  </td>

                  <td>{product.five}</td>
                  <td>{product.ten}</td>
                  <td>{product.twenty}</td>

                  <td className="wholesale-best-price">
                    {product.fifty}
                  </td>

                  <td className="wholesale-discount">
                    {product.discount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="wholesale-price-note">
          {greek
            ? 'Οι τιμές και η διαθεσιμότητα επιβεβαιώνονται κατά την υποβολή αιτήματος και ενδέχεται να μεταβάλλονται.'
            : 'Pricing and availability are confirmed when a quote is requested and may change.'}
        </p>
      </section>

      {/* PROCESS */}
      <section id="process" className="section wholesale-process-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {greek ? 'ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ' : 'HOW IT WORKS'}
            </div>

            <h2>
              {greek
                ? 'Από την ποσότητα στην παραγγελία.'
                : 'From quantity to order.'}
            </h2>
          </div>
        </div>

        <div className="wholesale-process-grid">
          <article className="wholesale-process-card">
            <span>01</span>
            <h3>
              {greek
                ? 'Επιλέξτε προϊόν & ποσότητα'
                : 'Choose product & quantity'}
            </h3>
            <p>
              {greek
                ? 'Πείτε μας ποια προϊόντα εξετάζετε και πόσα τεμάχια χρειάζεστε.'
                : 'Tell us which products you are considering and the quantity required.'}
            </p>
          </article>

          <article className="wholesale-process-card">
            <span>02</span>
            <h3>
              {greek
                ? 'Επιβεβαίωση προσφοράς'
                : 'Quote confirmation'}
            </h3>
            <p>
              {greek
                ? 'Επιβεβαιώνουμε την τρέχουσα τιμή, τη διαθεσιμότητα και τους όρους της παραγγελίας.'
                : 'We confirm current pricing, availability and order terms.'}
            </p>
          </article>

          <article className="wholesale-process-card">
            <span>03</span>
            <h3>
              {greek
                ? 'Ολοκλήρωση παραγγελίας'
                : 'Complete the order'}
            </h3>
            <p>
              {greek
                ? 'Μετά την αποδοχή της προσφοράς, επιβεβαιώνεται η παραγγελία και η διαδικασία εκπλήρωσης.'
                : 'Once the quote is accepted, the order and fulfilment process are confirmed.'}
            </p>
          </article>
        </div>
      </section>

      {/* TRADE INFO */}
      <section className="section wholesale-standard-section">
        <div className="wholesale-standard-card">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              VYRO TRADE
            </div>

            <h2>
              {greek
                ? 'Καθαροί όροι. Καθαρή τιμολόγηση.'
                : 'Clear terms. Clear pricing.'}
            </h2>

            <p>
              {greek
                ? 'Πριν επιβεβαιωθεί οποιαδήποτε παραγγελία, παρέχονται οι διαθέσιμες πληροφορίες προϊόντος, η τελική τιμή, η ποσότητα και οι όροι συναλλαγής.'
                : 'Before an order is confirmed, available product information, final pricing, quantity and transaction terms are provided.'}
            </p>
          </div>

          <div className="wholesale-standard-points">
            <div>
              <Check size={16} />
              <span>
                {greek ? 'Τιμολόγηση βάσει όγκου' : 'Volume-based pricing'}
              </span>
            </div>

            <div>
              <Check size={16} />
              <span>
                {greek
                  ? 'Επιβεβαίωση διαθεσιμότητας'
                  : 'Availability confirmation'}
              </span>
            </div>

            <div>
              <Check size={16} />
              <span>
                {greek
                  ? 'Όροι πριν την παραγγελία'
                  : 'Terms before ordering'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section id="quote" className="section wholesale-quote-section">
        <div className="wholesale-quote-card">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {greek ? 'ΕΜΠΟΡΙΚΗ ΣΥΝΕΡΓΑΣΙΑ' : 'TRADE ENQUIRIES'}
          </div>

          <h2>
            {greek
              ? 'Τι ποσότητα χρειάζεστε;'
              : 'What quantity do you need?'}
          </h2>

          <p>
            {greek
              ? 'Στείλτε μας το μοντέλο και την ποσότητα που εξετάζετε για να επιβεβαιώσουμε τιμή και διαθεσιμότητα.'
              : 'Send us the model and quantity you are considering so we can confirm pricing and availability.'}
          </p>

          <a
            href="mailto:YOUR-EMAIL-HERE?subject=VYRO%20Wholesale%20Enquiry"
            className="button button-primary"
          >
            {greek ? 'Ζητήστε προσφορά' : 'Request a quote'}
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer retail-footer">
        <div className="footer-brand">
          <Link href="/" className="brand">
            VYRO
            <span className="brand-dot" />
          </Link>

          <p>
            {greek
              ? 'Technology retail & wholesale.'
              : 'Technology retail & wholesale.'}
          </p>
        </div>

        <div className="footer-links">
          <Link href="/">{greek ? 'Λιανική' : 'Retail'}</Link>
          <Link href="/wholesale">
            {greek ? 'Χονδρική' : 'Wholesale'}
          </Link>
          <Link href="/creators">Creators</Link>
        </div>

        <div className="footer-legal">
          <Link href="/terms">
            {greek ? 'Όροι' : 'Terms'}
          </Link>
          <Link href="/privacy">
            {greek ? 'Απόρρητο' : 'Privacy'}
          </Link>
        </div>
      </footer>
    </main>
  );
}
