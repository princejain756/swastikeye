import { Seo } from '../Seo'
import servicesHero from '../../images/adult-female-doctor-ophthalmologist-checking-eye.jpg'
import lasikImg from '../../images/lasik.webp'
import cataractImg from '../../images/cataract.webp'
import contactLensImg from '../../images/Contact-Lens.webp'
import glaucomaImg from '../../images/Glaucoma-sevices.webp'

const services = [
  { title: 'LASIK & Vision Correction', to: '/lasik', img: lasikImg },
  { title: 'Cataract Surgery', to: '/cataract', img: cataractImg },
  { title: 'Glaucoma Care', to: '/glaucoma', img: glaucomaImg },
  { title: 'Contact Lenses', to: '/contact-lens', img: contactLensImg },
]

export default function Services() {
  return (
    <main className="page">
      <Seo title="Services - Swastik Eye Hospital" description="Discover our comprehensive eye care services in Bangalore: LASIK, cataract, glaucoma, contact lenses, and more." image={servicesHero} />

      <section className="hero-page">
        <div className="hero-media" aria-hidden>
          <img src={servicesHero} alt="" />
        </div>
        <div className="container hero-content">
          <h1>Services</h1>
          <p className="lede">Comprehensive eye care tailored to your vision.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards">
            {services.map((s) => (
              <a key={s.title} className="card card-link" href={s.to}>
                <div className="thumb"><img src={s.img} alt="" /></div>
                <h3>{s.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
