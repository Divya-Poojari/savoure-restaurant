import { ArrowUpRight, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cuisines } from '../data/cuisines';
export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top">
      <div><Link to="/" className="footer-brand">SAVOURÉ<span>FIVE WORLDS. ONE TABLE.</span></Link><p className="footer-note">A considered meeting of traditions, ingredients and the people who bring them to life.</p></div>
      <div className="footer-column"><span className="footer-label">Explore</span><Link to="/">Home</Link><a href="/#story">Our story</a><a href="/#cuisines">Culinary worlds</a><a href="/#reservations">Reservations</a></div>
      <div className="footer-column"><span className="footer-label">The cuisines</span>{cuisines.map(c => <Link key={c.id} to={`/cuisine/${c.id}`}>{c.name}</Link>)}</div>
      <div className="footer-column footer-address"><span className="footer-label">Find us</span><span><MapPin size={14}/> Jubilee Hills, Hyderabad<br/>Telangana, India</span><a href="mailto:hello@savoure.example">hello@savoure.example <ArrowUpRight size={13}/></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={14}/> Instagram</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 SAVOURÉ. A fictional restaurant concept.</span><span>Sample menu prices · No real bookings are made</span><a href="#top">Back to top ↑</a></div>
  </footer>;
}
