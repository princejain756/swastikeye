import { Seo } from '../Seo'
import hero from '../../images/ophthalmologist-dr.png'
import { doctors } from '../data/doctors'
import { Link } from 'react-router-dom'

export default function Doctors() {
  return (
    <main className="page">
      <Seo title="Doctors - Swastik Eye Hospital" description="Meet our ophthalmology specialists providing expert, compassionate care in Bangalore." image={hero} />
      <section className="hero-page">
        <div className="hero-media" aria-hidden>
          <img src={hero} alt="" />
        </div>
        <div className="container hero-content">
          <h1>Our specialists</h1>
          <p className="lede">Experienced ophthalmologists committed to your vision.</p>
        </div>
      </section>

      <section className="section">
        <div className="container cards">
          {doctors.map((d) => (
            <Link key={d.slug} to={`/doctors/${d.slug}`} className="card card-link doctor">
              <div className="thumb ratio">
                <img src={d.image} alt={d.name} />
              </div>
              <h3 style={{marginBottom:'.2rem'}}>{d.name}</h3>
              <p className="muted" style={{marginTop:0}}>{d.role}</p>
              <p>{d.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
