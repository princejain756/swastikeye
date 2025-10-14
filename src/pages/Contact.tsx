import { Seo } from '../Seo'

export default function Contact() {
  return (
    <main className="page">
      <Seo title="Contact - Swastik Eye Hospital" description="Reach us for appointments, directions, and general queries." />
      <section className="section subtle">
        <div className="container cols contact">
          <div>
            <h1>Contact</h1>
            <address className="stack small">
              <p>No.76, Vani Vilas Road, Basavanagudi, Bangalore-560004.</p>
              <p>
                <a href="mailto:tpa.swastikeye@gmail.com">tpa.swastikeye@gmail.com</a>
              </p>
              <p>Mon–Sat, 10:00 AM – 07:00 PM</p>
              <ul className="phones" aria-label="Contact phone numbers">
                <li><a href="tel:08026622663" aria-label="Call 080 2662 2663">080-26622663</a></li>
                <li><a href="tel:08026623663" aria-label="Call 080 2662 3663">080-26623663</a></li>
                <li><a href="tel:08047058393" aria-label="Call 080 4705 8393">080-47058393</a></li>
                <li><a href="tel:+916363355305" aria-label="Call plus 91 63633 55305">+91-6363355305</a></li>
              </ul>
            </address>
            <div className="actions">
              <a className="button primary" href="https://maps.google.com/?q=No.76,+Vani+Vilas+Road,+Basavanagudi,+Bangalore-560004" target="_blank" rel="noreferrer noopener">Directions</a>
              <a className="button" href="tel:+916363355305" aria-label="Call Swastik Eye Hospital">Call Now</a>
            </div>
          </div>
          <div className="card" aria-label="Map and directions to Swastik Eye Hospital">
            <h3 style={{marginTop:0}}>Find us</h3>
            <div className="thumb ratio" style={{marginTop:'.5rem'}}>
              <iframe
                title="Swastik Eye Hospital — Google Maps"
                src={"https://www.google.com/maps?q=" + encodeURIComponent('No.76, Vani Vilas Road, Basavanagudi, Bangalore-560004') + "&output=embed"}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{border:0, width:'100%', height:'100%'}}
              />
            </div>
            <div className="actions" style={{marginTop:'.8rem'}}>
              <a className="button" href="https://maps.google.com/?q=No.76,+Vani+Vilas+Road,+Basavanagudi,+Bangalore-560004" target="_blank" rel="noreferrer noopener">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
