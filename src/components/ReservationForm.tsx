import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '19:00', guests: '2', note: '' });
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const update = (key: keyof typeof form, value: string) => setForm(prev => ({ ...prev, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.date || form.date < minDate) { setError('Please choose today or a future date.'); return; }
    setError(''); setSubmitted(true);
  };
  return <div className="reservation-panel">
    {submitted ? <div className="reservation-success" role="status"><CheckCircle2 size={34} strokeWidth={1.4}/><p className="eyebrow">REQUEST PREVIEW</p><h3>Thank you, {form.name.split(' ')[0]}.</h3><p>Your table request preview is ready for {form.guests} guests on {new Date(`${form.date}T12:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} at {form.time}. This demo does not send or store a real reservation.</p><button className="text-button" onClick={() => setSubmitted(false)}>Edit details <ArrowRight size={15}/></button></div> : <form onSubmit={submit} className="reservation-form">
      <div className="form-row"><label>Your name<input value={form.name} onChange={e => update('name', e.target.value)} required minLength={2} placeholder="Name for the table" autoComplete="name" /></label><label>Email address<input type="email" value={form.email} onChange={e => update('email', e.target.value)} required placeholder="you@example.com" autoComplete="email" /></label></div>
      <div className="form-row three"><label>Date<input type="date" value={form.date} min={minDate} onChange={e => update('date', e.target.value)} required /></label><label>Time<select value={form.time} onChange={e => update('time', e.target.value)}>{['12:00','12:30','13:00','13:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'].map(t => <option key={t}>{t}</option>)}</select></label><label>Guests<select value={form.guests} onChange={e => update('guests', e.target.value)}>{['1','2','3','4','5','6','7','8'].map(n => <option key={n} value={n}>{n} {n === '1' ? 'guest' : 'guests'}</option>)}</select></label></div>
      <label>Anything we should know? <span className="optional">Optional</span><textarea value={form.note} onChange={e => update('note', e.target.value)} rows={2} placeholder="An occasion, dietary note, or seating preference" /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-dark form-submit" type="submit">Preview reservation <ArrowRight size={16}/></button>
      <p className="form-disclaimer">This is a portfolio demo. No booking is sent to a restaurant or saved to a server.</p>
    </form>}
  </div>;
}
