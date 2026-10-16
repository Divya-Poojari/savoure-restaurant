import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Cuisine, Dish } from '../data/cuisines';
import { formatPrice } from '../data/cuisines';
export default function DishCard({ dish, cuisine, compact = false }: { dish: Dish; cuisine: Cuisine; compact?: boolean }) {
  return <article className={`dish-card ${compact ? 'dish-card-compact' : ''}`}>
    <Link to={`/cuisine/${cuisine.id}#menu`} className="dish-image-link" aria-label={`Explore ${dish.name} in the ${cuisine.name} menu`}><img src={dish.image} alt={dish.name} loading="lazy" /><span className="dish-image-arrow"><ArrowUpRight size={17}/></span></Link>
    <div className="dish-meta"><span>{cuisine.name}</span><span>{formatPrice(dish.price)}</span></div>
    <h3><Link to={`/cuisine/${cuisine.id}#menu`}>{dish.name}</Link></h3>
    {!compact && <p>{dish.description}</p>}
  </article>;
}
