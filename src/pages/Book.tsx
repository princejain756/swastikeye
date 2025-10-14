import { useMemo, useState } from 'react'
import { Seo } from '../Seo'

const WA_NUMBER = '916363355305' // WhatsApp expects country code without +

export default function Book() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [service, setService] = useState('General Consultation')
  const [note, setNote] = useState('')

  const waUrl = useMemo(() => {
    const lines = [
      'New appointment request',
      `Name: ${name || '-'}`,
      `Phone: ${phone || '-'}`,
      `Date: ${date || '-'}`,
      `Time: ${time || '-'}`,
      `Service: ${service || '-'}`,
      note ? `Note: ${note}` : ''
    ].filter(Boolean)
    const text = encodeURIComponent(lines.join('\n'))
    return `https://wa.me/${WA_NUMBER}?text=${text}`
  }, [name, phone, date, time, service, note])

  function submit(e: React.FormEvent) {
    e.preventDefault()
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="page">
      <Seo title="Book Appointment - Swastik Eye Hospital" description="Book your appointment via WhatsApp in a few seconds." />
      <section className="section subtle">
        <div className="container cols">
          <div>
            <h1 style={{marginTop:0}}>Book appointment</h1>
            <p className="lede">Fill in your details and continue to WhatsApp to confirm.</p>
          </div>
          <form className="card form" onSubmit={submit} aria-labelledby="book-title">
            <h3 id="book-title" style={{marginTop:0}}>Your details</h3>
            <label>
              <span>Name</span>
              <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Phone</span>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" placeholder="Your phone" required />
            </label>
            <div style={{display:'grid',gap:'.6rem',gridTemplateColumns:'1fr 1fr'}}>
              <label>
                <span>Preferred date</span>
                <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" />
              </label>
              <label>
                <span>Preferred time</span>
                <input value={time} onChange={(e)=>setTime(e.target.value)} type="time" />
              </label>
            </div>
            <label>
              <span>Service</span>
              <select value={service} onChange={(e)=>setService(e.target.value)}>
                <option>General Consultation</option>
                <option>LASIK Evaluation</option>
                <option>Cataract Consultation</option>
                <option>Glaucoma Check</option>
                <option>Contact Lens Fitting</option>
              </select>
            </label>
            <label>
              <span>Note (optional)</span>
              <input value={note} onChange={(e)=>setNote(e.target.value)} type="text" placeholder="Any symptoms or requests" />
            </label>
            <a className="button" href={waUrl} target="_blank" rel="noreferrer noopener">Preview WhatsApp message</a>
            <button className="button primary" type="submit">Continue in WhatsApp</button>
          </form>
        </div>
      </section>
    </main>
  )
}

