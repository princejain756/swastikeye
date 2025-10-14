import { Seo } from '../Seo'
import glaucomaHero from '../../images/Glaucoma-sevices.webp'

export default function Glaucoma() {
  return (
    <main className="page">
      <Seo title="Best Glaucoma Treatment in Bangalore | Swastik Eye Care" description="Early diagnosis and expert glaucoma treatment to protect your sight. Personalized care with advanced diagnostics and ongoing management." image={glaucomaHero} />
      <section className="hero-page">
        <div className="hero-media" aria-hidden>
          <img src={glaucomaHero} alt="" />
        </div>
        <div className="container hero-content">
          <h1>Glaucoma care</h1>
          <p className="lede">Protect your vision with timely diagnosis and treatment.</p>
        </div>
      </section>
      <section className="section">
        <div className="container cols">
          <div>
            <h2>How we help</h2>
            <ul className="list">
              <li>Comprehensive pressure and field testing</li>
              <li>Medical and laser management</li>
              <li>Surgical options when indicated</li>
            </ul>
          </div>
          <div className="card">
            <p style={{marginTop:0}}>
              If you notice vision changes or eye discomfort, schedule an evaluation. Early
              intervention preserves sight.
            </p>
            <a className="button primary" href="/contact">Book appointment</a>
          </div>
        </div>
      </section>
    </main>
  )
}

