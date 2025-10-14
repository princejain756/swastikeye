import { Seo } from '../Seo'
import heroImg from '../../images/eyesimageforrepresentingthatitisaeyehospital.webp'
import { EyeIcon, SunglassesIcon, TrendUpIcon, TargetIcon, ArrowRightIcon } from '../components/icons'

const TITLE = 'Swastik Eye Hospital - Top Eye Specialists in Bangalore'
const DESCRIPTION = 'Swastik Eye Hospital in Bangalore offers expert eye care. Trust our top specialists for all your vision needs. Book your appointment today!'

function Hero() {
  return (
    <section id="home" className="hero-split">
      <div className="container wrap">
        <div>
          <div className="eyebrow">Trusted eye specialists in Bangalore</div>
          <h1>Your path to clearer vision</h1>
          <p className="lede">
            Compassionate, outcome‑focused care by senior surgeons. From comprehensive eye
            exams to LASIK and cataract, we make world‑class care simple and accessible.
          </p>

          <div className="mini-cards">
            <a className="mini-card" href="/lasik">
              <span className="icon" aria-hidden><EyeIcon /></span>
              <div>
                <strong>LASIK</strong>
                <div className="sub">Vision correction</div>
              </div>
              <span className="arr" aria-hidden><ArrowRightIcon /></span>
            </a>
            <a className="mini-card" href="/cataract">
              <span className="icon" aria-hidden><SunglassesIcon /></span>
              <div>
                <strong>Cataract</strong>
                <div className="sub">Advanced IOLs</div>
              </div>
              <span className="arr" aria-hidden><ArrowRightIcon /></span>
            </a>
            <a className="mini-card" href="/glaucoma">
              <span className="icon" aria-hidden><TrendUpIcon /></span>
              <div>
                <strong>Glaucoma</strong>
                <div className="sub">Early detection</div>
              </div>
              <span className="arr" aria-hidden><ArrowRightIcon /></span>
            </a>
            <a className="mini-card" href="/contact-lens">
              <span className="icon" aria-hidden><TargetIcon /></span>
              <div>
                <strong>Contact Lens</strong>
                <div className="sub">Precise fitting</div>
              </div>
              <span className="arr" aria-hidden><ArrowRightIcon /></span>
            </a>
          </div>

          <div className="hero-actions">
            <a href="/book" className="button primary">Book Appointment</a>
            <a href="tel:+916363355305" className="button">Call +91 63633 55305</a>
            <a href="/contact" className="button">Get Directions</a>
          </div>
        </div>

        <aside className="panel" aria-label="Highlights">
          <div className="eyebrow" style={{color:'rgba(255,255,255,.8)'}}>Why patients choose us</div>
          <div className="chips">
            <span className="chip">Senior surgeons only</span>
            <span className="chip">Premium IOL options</span>
            <span className="chip">Transparent pricing</span>
            <span className="chip">Quick recovery care</span>
          </div>
          <div className="cta-row">
            <a href="/book" className="button primary">Book now</a>
            <a href="tel:+916363355305" className="button">Call us</a>
          </div>
        </aside>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container cols">
        <div>
          <h2>Clinical excellence. Human warmth.</h2>
          <p>
            With our clinical expertise and advanced technology, we offer the best in cataract
            surgery and LASIK laser vision correction. We’re committed to improving the quality
            of life for our patients and their families.
          </p>
        </div>
        <div className="card">
          <ul className="list">
            <li>LASIK & Laser Vision Correction</li>
            <li>Cataract Surgery</li>
            <li>Comprehensive Eye Exams</li>
            <li>Contact Lens Fitting</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function PlanVisit() {
  return (
    <section id="plan" className="section subtle">
      <div className="container">
        <h2>Plan your visit</h2>
        <div className="grid two">
          <ol className="list numbered">
            <li>Book your annual eye examination in advance.</li>
            <li>Bring previous records, prescriptions, and glasses.</li>
            <li>If you use contact lenses, avoid wearing them 24 hours prior.</li>
            <li>If diabetic, confirm medication adjustments with your physician.</li>
            <li>For children, ensure they’ve eaten; exams may take time.</li>
          </ol>
          <ol className="list numbered">
            <li>Expect a confirmation call a day prior to surgery.</li>
            <li>Have an adult accompany you to and from the procedure.</li>
            <li>Take your routine morning medications unless advised otherwise.</li>
            <li>If on blood thinners, consult your physician about dosage.</li>
            <li>Avoid public transport post-procedure; arrange safe transport.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        image={'https://swastikeye.com/wp-content/uploads/2023/02/Implantable-Contact-Lens.webp'}
      />
      <Hero />
      <About />
      <PlanVisit />
    </>
  )
}
