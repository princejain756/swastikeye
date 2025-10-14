import { Seo } from '../Seo'
import hero from '../../images/Contact-Lens.webp'

export default function ContactLens() {
  return (
    <main className="page">
      <Seo title="Contact Lens Fitting in Bangalore | Swastik Eye Hospital" description="Precise contact lens fitting and guidance for vision and comfort." image={hero} />
      <section className="hero-page">
        <div className="hero-media" aria-hidden>
          <img src={hero} alt="" />
        </div>
        <div className="container hero-content">
          <h1>Contact lenses</h1>
          <p className="lede">Comfortable vision with careful fitting and hygiene guidance.</p>
        </div>
      </section>
      <section className="section">
        <div className="container cols">
          <div>
            <h2>What we cover</h2>
            <ul className="list">
              <li>Soft, toric, and specialty lenses</li>
              <li>First-time wear training and care</li>
              <li>Follow-ups to fine-tune comfort and clarity</li>
            </ul>
          </div>
          <div className="card">
            <p style={{marginTop:0}}>Ready to try lenses or refit your prescription?</p>
            <a className="button primary" href="/book">Book appointment</a>
          </div>
        </div>
      </section>
    </main>
  )
}

