import { Seo } from '../Seo'
import aboutHero from '../../images/adult-female-doctor-ophthalmologist.png'

export default function About() {
  return (
    <main className="page">
      <Seo title="About Us - Swastik Eye Hospital" description="Professional eye care with compassionate, personalized treatment and advanced technology in Bangalore." image={aboutHero} />
      <section className="hero-page">
        <div className="hero-media" aria-hidden>
          <img src={aboutHero} alt="" />
        </div>
        <div className="container hero-content">
          <h1>Professional eye care</h1>
          <p className="lede">High-quality, comprehensive, and affordable eye care for all ages.</p>
        </div>
      </section>

      <section className="section">
        <div className="container cols">
          <div>
            <h2>Who we are</h2>
            <p>
              Our mission is to help patients achieve optimal eye health and vision through
              personalized, compassionate care. We bring decades of surgical expertise across
              cataract, LASIK, glaucoma, and comprehensive ophthalmology.
            </p>
          </div>
          <div className="card">
            <ul className="list">
              <li>Decades of clinical leadership</li>
              <li>Advanced diagnostic and surgical equipment</li>
              <li>Patient-first, transparent care</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

