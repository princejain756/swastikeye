import { useParams, Link } from 'react-router-dom'
import { Seo } from '../Seo'
import { getDoctorBySlug } from '../data/doctors'

export default function DoctorPage() {
  const { slug } = useParams()
  const doctor = getDoctorBySlug(slug || '')

  if (!doctor) {
    return (
      <main className="page">
        <section className="section">
          <div className="container">
            <h1>Doctor not found</h1>
            <p>
              Try the <Link to="/doctors">doctors page</Link>.
            </p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <Seo title={`${doctor.name} - Swastik Eye Hospital`} description={doctor.summary} image={doctor.image} />
      <section className="section">
        <div className="container cols">
          <div>
            <h1 style={{marginTop:0}}>{doctor.name}</h1>
            <p className="muted" style={{marginTop:0}}>{doctor.role}</p>
            <p>{doctor.summary}</p>
            {doctor.credentials && (
              <div className="card">
                <h3 style={{marginTop:0}}>Credentials & Highlights</h3>
                <ul className="list">
                  {doctor.credentials.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="card">
            <div className="thumb ratio">
              <img src={doctor.image} alt={doctor.name} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

