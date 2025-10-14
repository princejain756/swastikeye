import { Seo } from '../Seo'
import heroImg from '../../images/eyesimageforrepresentingthatitisaeyehospital.webp'
import { EyeIcon, SunglassesIcon, TrendUpIcon, TargetIcon, ArrowRightIcon } from '../components/icons'
import { reviews as allReviews, averageRating } from '../data/reviews'
import { useMemo, useState } from 'react'

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
      <div className="container plan-wrap" aria-labelledby="plan-title">
        <div className="plan-head">
          <h2 id="plan-title">Plan your visit</h2>
          <p className="muted">A crisp checklist so everything goes smoothly.</p>
        </div>
        <div className="plan-grid">
          <div className="plan-card" aria-label="Before your appointment">
            <div className="plan-card-head">
              <span className="dot dot-teal" aria-hidden></span>
              <h3>Before your appointment</h3>
            </div>
            <ol className="steps">
              <li>Book your annual eye examination in advance.</li>
              <li>Bring previous records, prescriptions, and glasses.</li>
              <li>If you use contact lenses, avoid wearing them 24 hours prior.</li>
              <li>If diabetic, confirm medication adjustments with your physician.</li>
              <li>For children, ensure they’ve eaten; exams may take time.</li>
            </ol>
          </div>

          <div className="plan-card" aria-label="On the day of visit">
            <div className="plan-card-head">
              <span className="dot dot-blue" aria-hidden></span>
              <h3>On the day</h3>
            </div>
            <ol className="steps">
              <li>Expect a confirmation call a day prior to surgery.</li>
              <li>Have an adult accompany you to and from the procedure.</li>
              <li>Take your routine morning medications unless advised otherwise.</li>
              <li>If on blood thinners, consult your physician about dosage.</li>
              <li>Avoid public transport post‑procedure; arrange safe transport.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stars({ value = 5 }: { value?: number }) {
  const full = Math.round(value)
  return (
    <div aria-label={`${value} out of 5 stars`} className="stars" title={`${value} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? 'on' : ''}>★</span>
      ))}
    </div>
  )
}

function Reviews() {
  const reviews = allReviews
  const GOOGLE_LOGO = 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000'
  const [paused, setPaused] = useState(false)
  const Cards = useMemo(() => (
    reviews.map((r, i) => {
      const t = (r.text || '').trim()
      return (
        <figure className="review-card" key={i}>
          {t && <blockquote>“{t}”</blockquote>}
          <figcaption>
            <strong>{r.name}</strong>
            <Stars value={r.stars} />
            {r.date && <span className="muted small">{r.date}</span>}
          </figcaption>
        </figure>
      )
    })
  ), [reviews])
  return (
    <section id="reviews" className="section subtle">
      <div className="container">
        <div className="reviews-head">
          <div className="left">
            <img src={GOOGLE_LOGO} alt="Google" className="gmark" />
            <div>
              <h2>What patients say</h2>
              <p className="muted">Real reviews from Google</p>
            </div>
          </div>
          <div className="right">
            <Stars value={averageRating} />
            <div className="muted small">Avg. rating {averageRating} / 5</div>
          </div>
        </div>

        <div
          className={`reviews-marquee ${paused ? 'paused' : ''}`}
          aria-label="Patient reviews carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onTouchCancel={() => setPaused(false)}
        >
          <div className="track">
            <div className="group">{Cards}</div>
            <div className="group" aria-hidden>{Cards}</div>
          </div>
        </div>

        <div className="reviews-cta">
          <a
            className="button primary"
            href="https://www.google.com/search?client=safari&sca_esv=e43c86de5287e939&rls=en&sxsrf=AE3TifPyll8xccYn61TKQb1bKfEUzmx_Lg:1760481273254&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1WfENbvc3q4mZMzZAYgxS2Br5mwRloUIvdsXQCZ9FBm6a8JPS4TCtC6CLO225bVby5FnlL3GuWqZPWcvJM2dwTL4rNZBiYM0_mFh4a_KmoMwYSlVA%3D%3D&q=Swastik+Eye+Hospital+Reviews&sa=X&ved=2ahUKEwiJirTn36SQAxUQUGcHHRpnHDEQ0bkNegQIJRAE&biw=1551&bih=1084&dpr=2#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Post your review on Google
          </a>
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
      <Reviews />
      <PlanVisit />
    </>
  )
}
