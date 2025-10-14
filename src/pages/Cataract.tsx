import { Seo } from '../Seo'
import cataractHero from '../../images/cataract.webp'

export default function Cataract() {
  return (
    <main className="page">
      <Seo title="Cataract Surgery in Bangalore | Swastik Eye Hospital" description="Modern cataract surgery with advanced IOL options and fast recovery." image={cataractHero} />
      <section className="hero-page">
        <div className="hero-media" aria-hidden>
          <img src={cataractHero} alt="" />
        </div>
        <div className="container hero-content">
          <h1>Cataract surgery</h1>
          <p className="lede">Safe, precise, and personalized IOLs for clearer vision.</p>
        </div>
      </section>
      <section className="section">
        <div className="container cols">
          <div>
            <h2>Procedure</h2>
            <ul className="list">
              <li>Micro-incision phacoemulsification</li>
              <li>Advanced monofocal, toric, and multifocal IOLs</li>
              <li>Quick recovery with minimal downtime</li>
            </ul>
          </div>
          <div className="card">
            <p style={{marginTop:0}}>
              Unsure which IOL suits you? Book a consultation for a clear, personalized plan.
            </p>
            <a className="button primary" href="/book">Book appointment</a>
          </div>
        </div>
      </section>
    </main>
  )
}

