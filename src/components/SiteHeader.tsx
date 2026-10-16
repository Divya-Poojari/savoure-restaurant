import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="SAVOURÉ home" onClick={close}>
        <span className="wordmark-main">SAVOURÉ</span><span className="wordmark-sub">A WORLD OF FLAVOUR</span>
      </Link>
      <button className="mobile-menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end onClick={close} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <a href={location.pathname === '/' ? '#story' : '/#story'} className="nav-link" onClick={close}>Our story</a>
        <a href={location.pathname === '/' ? '#cuisines' : '/#cuisines'} className="nav-link" onClick={close}>Culinary worlds</a>
        <a href={location.pathname === '/' ? '#experience' : '/#experience'} className="nav-link" onClick={close}>Experience</a>
      </nav>
      <a className="header-cta" href={location.pathname === '/' ? '#reservations' : '/#reservations'} onClick={close}>Reserve a table <ArrowUpRight size={15} strokeWidth={1.6} /></a>
    </header>
  );
}
