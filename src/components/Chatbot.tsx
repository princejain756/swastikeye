import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type Role = 'user' | 'assistant'
type Msg = { id: string; role: Role; content: string }

function ChatIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])
  return reduced
}

type Option = { label: string; to?: string; href?: string }
type Node = { id: string; prompt?: string; answer?: string; options?: Option[] }

const WA_NUMBER = '916363355305' // no plus for wa.me
const CALL_TEL = '+916363355305'
const MAPS_URL = 'https://maps.google.com/?q=No.76,+Vani+Vilas+Road,+Basavanagudi,+Bangalore-560004'

const NODES: Record<string, Node> = {
  root: {
    id: 'root',
    prompt: 'How can we help today?',
    options: [
      { label: 'Book appointment', to: 'appointments' },
      { label: 'LASIK', to: 'lasik' },
      { label: 'Cataract', to: 'cataract' },
      { label: 'Glaucoma', to: 'glaucoma' },
      { label: 'Contact lenses', to: 'contactlens' },
      { label: 'Timings & Location', to: 'visit' },
      { label: 'Doctors', to: 'doctors' },
      { label: 'Something else', to: 'contact' },
    ],
  },
  appointments: {
    id: 'appointments',
    answer:
      'Booking is quick via WhatsApp or phone.\n\n' +
      '• Clinic hours: Mon–Sat, 10:00 AM – 07:00 PM.\n' +
      '• For surgery availability, a doctor consult is required first.\n' +
      '• You can also book online at /book.',
    options: [
      { label: 'WhatsApp us', href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hello Swastik Eye Hospital, I’d like to book an appointment.')}` },
      { label: 'Call now', href: `tel:${CALL_TEL}` },
      { label: 'Book online', href: '/book' },
    ],
  },
  lasik: {
    id: 'lasik',
    answer:
      'LASIK corrects myopia, hyperopia, and astigmatism.\n\n' +
      'Eligibility basics:\n' +
      '• Age 18+, stable power, healthy cornea (final decision after evaluation).\n\n' +
      'Recovery:\n' +
      '• Quick procedure, functional vision often same/next day. Use drops and avoid eye rubbing.\n\n' +
      'Typical costs per eye:\n' +
      '• Conventional ₹30k–45k\n• Bladeless ₹45k–70k\n• Custom Wavefront ₹60k–90k\n• Contoura Vision ₹80k–1L\n• SMILE ₹85k–1.1L',
    options: [
      { label: 'Learn more', href: '/lasik' },
      { label: 'WhatsApp us', href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi, I have a question about LASIK at Swastik Eye Hospital.')}` },
      { label: 'Call now', href: `tel:${CALL_TEL}` },
    ],
  },
  cataract: {
    id: 'cataract',
    answer:
      'Cataract surgery uses micro‑incision phacoemulsification with personalized IOLs.\n\n' +
      'IOL options:\n' +
      '• Monofocal, toric, and multifocal depending on your needs.\n\n' +
      'A short evaluation will help decide the best IOL and plan. ',
    options: [
      { label: 'Learn more', href: '/cataract' },
      { label: 'WhatsApp us', href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi, I’d like to know about cataract surgery/IOL options.')}` },
      { label: 'Call now', href: `tel:${CALL_TEL}` },
    ],
  },
  glaucoma: {
    id: 'glaucoma',
    answer:
      'We provide comprehensive glaucoma care: pressure/field testing, medical and laser management, and surgery when needed.\n\n' +
      'If you notice vision changes or discomfort, schedule an evaluation—early care protects sight.',
    options: [
      { label: 'Learn more', href: '/glaucoma' },
      { label: 'WhatsApp us', href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi, I have a question about glaucoma care.')}` },
      { label: 'Call now', href: `tel:${CALL_TEL}` },
    ],
  },
  contactlens: {
    id: 'contactlens',
    answer:
      'Precise fitting for soft, toric, and specialty lenses with comfort care and hygiene guidance.\n\n' +
      'Follow‑ups help fine‑tune fit and clarity.',
    options: [
      { label: 'Learn more', href: '/contact-lens' },
      { label: 'WhatsApp us', href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi, I’d like help with contact lenses/fitting.')}` },
      { label: 'Call now', href: `tel:${CALL_TEL}` },
    ],
  },
  visit: {
    id: 'visit',
    answer:
      'Clinic hours: Mon–Sat, 10:00 AM – 07:00 PM.\n\n' +
      'Address:\n' +
      'No.76, Vani Vilas Road, Basavanagudi, Bangalore-560004.',
    options: [
      { label: 'Directions', href: MAPS_URL },
      { label: 'Call now', href: `tel:${CALL_TEL}` },
    ],
  },
  doctors: {
    id: 'doctors',
    answer: 'Meet our senior surgeons and care team.',
    options: [
      { label: 'View doctors', href: '/doctors' },
      { label: 'Book appointment', to: 'appointments' },
    ],
  },
  contact: {
    id: 'contact',
    answer: 'Tell us a bit on WhatsApp or give us a quick call. We’ll help right away.',
    options: [
      { label: 'WhatsApp us', href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi Swastik Eye Hospital, I need help with…')}` },
      { label: 'Call now', href: `tel:${CALL_TEL}` },
    ],
  },
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([{ id: 'hello', role: 'assistant', content: 'Hi! Tap an option below for instant answers.' }])
  const [path, setPath] = useState<string>('root')
  const [stack, setStack] = useState<string[]>([])
  const listRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Global triggers: links with data-open-chat or #chat hash
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (t?.closest('[data-open-chat]')) {
        e.preventDefault()
        setOpen(true)
      }
    }
    const onHash = () => { if (location.hash === '#chat') setOpen(true) }
    document.addEventListener('click', onClick)
    window.addEventListener('hashchange', onHash)
    onHash()
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  useEffect(() => {
    // autoscroll on new messages
    const el = listRef.current
    if (!el) return
    el.scrollTo({ top: el.scrollHeight, behavior: reducedMotion ? 'auto' : 'smooth' })
  }, [msgs, reducedMotion])

  function go(to: string, viaLabel: string) {
    const nextNode = NODES[to]
    if (!nextNode) return
    setMsgs(m => [
      ...m,
      { id: Math.random().toString(36).slice(2), role: 'user', content: viaLabel },
      ...(nextNode.answer ? [{ id: Math.random().toString(36).slice(2), role: 'assistant', content: nextNode.answer }] : []),
    ])
    setStack(s => [...s, path])
    setPath(to)
  }

  function back() {
    setStack(s => {
      const copy = [...s]
      const prev = copy.pop()
      if (!prev) return s
      const prevNode = NODES[prev]
      setPath(prev)
      if (prevNode?.answer) {
        setMsgs(m => [...m, { id: Math.random().toString(36).slice(2), role: 'assistant', content: prevNode.answer! }])
      }
      return copy
    })
  }

  function restart() {
    setMsgs([{ id: 'hello', role: 'assistant', content: 'Hi! Tap an option below for instant answers.' }])
    setPath('root')
    setStack([])
  }

  // Button‑based flow only; no free‑text input.

  const node = NODES[path]
  const opts: Option[] = [ ...(node?.options || []), ...(stack.length ? [{ label: 'Back', to: '__back__' }] : []), { label: 'Restart', to: 'root' } ]

  const panel = (
    <div className={"chat-panel " + (open ? 'open' : '')} role="dialog" aria-modal="true" aria-label="Chat with us">
      <div className="chat-head">
        <div className="chat-title">
          <span className="dot" aria-hidden /> Ask Swastik
        </div>
        <button className="chat-x" aria-label="Close chat" onClick={() => setOpen(false)}>
          ×
        </button>
      </div>
      <div ref={listRef} className="chat-list" aria-live="polite">
        {msgs.map(m => (
          <div key={m.id} className={"chat-msg " + (m.role === 'user' ? 'me' : 'bot')}>
            <div className="bubble">{m.content}</div>
          </div>
        ))}
      </div>
      <div className="chat-suggestions" aria-label="Options">
        {opts.map(o => (
          o.href ? (
            <a key={o.label} className="chip" href={o.href} target={o.href.startsWith('http') ? '_blank' : undefined} rel={o.href.startsWith('http') ? 'noreferrer noopener' : undefined}>{o.label}</a>
          ) : (
            <button key={o.label} className="chip" onClick={() => {
              if (o.to === 'root') return restart()
              if (o.to === '__back__') return back()
              if (o.to) return go(o.to, o.label)
            }}>{o.label}</button>
          )
        ))}
      </div>
    </div>
  )

  return (
    <>
      <button className="chat-fab" aria-label={open ? 'Close chat' : 'Open chat'} onClick={() => setOpen(v => !v)}>
        <ChatIcon />
      </button>
      {createPortal(panel, document.body)}
    </>
  )
}
