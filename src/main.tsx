import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from 'framer-motion';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import CuisinePage from './pages/CuisinePage';
import './styles.css';

function ScrollManager() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }), 80);
    } else window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);
  return null;
}
function NotFoundPage() {
  return <main className="not-found"><p className="eyebrow">A LITTLE DETOUR</p><h1>This page is not on the menu.</h1><Link className="button button-dark" to="/">Return to the table</Link></main>;
}
function AnimatedRoutes() {
  const location = useLocation();
  return <><ScrollManager/><SiteHeader/><LayoutGroup id="savoure-cuisine-transitions"><AnimatePresence mode="sync" initial={false}><motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.22, ease: 'easeOut' }}><Routes location={location}><Route path="/" element={<HomePage/>}/><Route path="/cuisine/:id" element={<CuisinePage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></motion.div></AnimatePresence></LayoutGroup><SiteFooter/></>;
}
function App() { return <MotionConfig reducedMotion="user"><BrowserRouter><AnimatedRoutes/></BrowserRouter></MotionConfig>; }

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
