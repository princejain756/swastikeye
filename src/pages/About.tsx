import { Seo } from '../Seo'
import aboutHero from '../../images/adult-female-doctor-ophthalmologist.png'
import nabhLogo from '../../images/NABH-Logo.png'

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

      {/* NABH statement + Vision & Mission */}
      <section className="section">
        <div className="container cols">
          <div>
            <p className="eyebrow">Statement</p>
            <h2>Vision and mission statement</h2>
            <p>
              We are a certified SHCO ( Small Health Care Organization) by NABH (National
              Accreditation Board for Hospitals and health care providers)..
            </p>

            <div className="grid two" style={{ marginTop: '1.25rem' }}>
              <div>
                <p className="eyebrow">Vision</p>
                <p>
                  To achieve excellence in eye care and be a trusted partner in protecting and
                  improving visual health
                </p>
              </div>
              <div>
                <p className="eyebrow">Mission</p>
                <p>
                  Enhance quality of life of our patients through Dedicated, Patient-centric
                  Compassionate Eye care, enriched by education, science and technology.
                </p>
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'grid', placeItems: 'center' }}>
            <img
              src={nabhLogo}
              alt="NABH Certified (Entry Level) — Patient Safety and Quality of Care"
              style={{ width: '100%', maxWidth: 360, height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
