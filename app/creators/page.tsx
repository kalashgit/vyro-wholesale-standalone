import Link from 'next/link'

export default function CreatorsPage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="VYRO home">
          <span className="brand-dot" />
          VYRO
        </Link>
        <Link className="pill-button secondary" href="/">
          Back to VYRO
        </Link>
      </header>

      <section className="hero creators-page" aria-labelledby="creators-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            VYRO Creators
          </div>
          <h1 id="creators-title">
            Build with <span>momentum.</span>
          </h1>
          <p className="hero-intro">
            A dedicated space for creators, reviewers, and gaming voices who want to work with VYRO.
          </p>
          <div className="hero-actions">
            <a className="pill-button primary" href="mailto:hello@vyro.gr">
              Start a conversation
            </a>
            <Link className="pill-button secondary" href="/">
              Explore VYRO
            </Link>
          </div>
        </div>

        <div className="creators-panel">
          <span className="creators-panel-label">Creator network</span>
          <h2>Authentic products. Clear collaboration.</h2>
          <p>
            Tell us about your channel, audience, and the kind of collaboration you have in mind.
          </p>
        </div>
      </section>
    </main>
  )
}
