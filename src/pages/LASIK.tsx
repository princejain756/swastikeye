import { Seo } from '../Seo'
import lasikHero from '../../images/lasik.webp'

export default function LASIK() {
  return (
    <main className="page">
      <Seo title="Top LASIK Eye Surgery in Bangalore | Swastik Eye Hospital" description="Expert LASIK with advanced tech and faster recovery. Book a consultation and start your journey to clear vision." image={lasikHero} />
      <section className="hero-page">
        <div className="hero-media" aria-hidden>
          <img src={lasikHero} alt="" />
        </div>
        <div className="container hero-content">
          <h1>LASIK eye surgery</h1>
          <p className="lede">Precision correction for myopia, hyperopia, and astigmatism.</p>
        </div>
      </section>
      <section className="section">
        <div className="container cols">
          <div>
            <h2>What to expect</h2>
            <ul className="list">
              <li>Personalized pre-op evaluation</li>
              <li>Advanced bladeless options</li>
              <li>Quick procedure, fast recovery</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{marginTop:0}}>Typical costs (per eye)</h3>
            <ul className="list">
              <li>Conventional LASIK: ₹30k – ₹45k</li>
              <li>Bladeless LASIK: ₹45k – ₹70k</li>
              <li>Custom Wavefront: ₹60k – ₹90k</li>
              <li>Contoura Vision: ₹80k – ₹1L</li>
              <li>SMILE: ₹85k – ₹1.1L</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

