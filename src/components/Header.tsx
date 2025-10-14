import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import logo from '../../images/logo.png'
import { MenuIcon, CloseIcon } from './icons'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function close() { setOpen(false) }

  return (
    <>
      <header className="header">
        <Link className="brand" to="/" aria-label="Swastik Eye Hospital home" onClick={close}>
          <img src={logo} alt="Swastik Eye Hospital" className="brand-mark" />
        </Link>
        <nav className="nav" aria-label="Primary">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/doctors">Doctors</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/book" className="cta">Book</NavLink>
        </nav>

        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {createPortal(
        <div id="mobile-menu" className={`mobile-nav ${open ? 'open' : ''}`} role="dialog" aria-modal="true">
          <div className="sheet">
            <div className="sheet-head">
              <Link className="sheet-brand" to="/" onClick={close} aria-label="Swastik Eye Hospital home">
                <img src={logo} alt="" className="brand-mark" />
              </Link>
              <button className="menu-close" aria-label="Close menu" onClick={close}><CloseIcon /></button>
            </div>
            <nav className="sheet-nav">
              <NavLink to="/about" onClick={close}>About</NavLink>
              <NavLink to="/services" onClick={close}>Services</NavLink>
              <NavLink to="/doctors" onClick={close}>Doctors</NavLink>
              <NavLink to="/contact" onClick={close}>Contact</NavLink>
            </nav>
            <div className="sheet-divider" />
            <div className="sheet-more">
              <span>More</span>
              <span>+</span>
            </div>
            <div className="sheet-cta">
              <div className="sheet-buttons">
                <a href="tel:+916363355305" className="block-btn">Call us</a>
                <NavLink to="/book" className="block-btn primary" onClick={close}>Book appointment</NavLink>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
