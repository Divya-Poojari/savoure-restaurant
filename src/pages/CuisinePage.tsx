
import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { cuisines, formatPrice, getCuisine } from '../data/cuisines';
import ReservationForm from '../components/ReservationForm';

// These images are used ONLY for the main cuisine hero.
// They do not change the images shown on the homepage.
const cuisineHeroImages: Record<string, string> = {
  'south-indian': '/images/south-cuisine.jpeg',
  'north-indian': '/images/north-cuisine.jpeg',
  japanese: '/images/japanese-cuisine.jpeg',
  italian: '/images/italian-cuisine.jpeg',
  continental: '/images/continental-cuisine.jpeg',
};

export default function CuisinePage() {
  const { id } = useParams();

  const cuisine = getCuisine(id);

  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  const filtered = useMemo(
    () =>
      (cuisine?.dishes ?? []).filter(
        (dish) =>
          (category === 'All' || dish.category === category) &&
          (!query ||
            `${dish.name} ${dish.description} ${(dish.tags ?? []).join(' ')}`
              .toLowerCase()
              .includes(query.toLowerCase())) &&
          (!vegetarianOnly ||
            dish.tags?.some((tag) =>
              ['Vegetarian', 'Vegan'].includes(tag),
            )),
      ),
    [cuisine, category, query, vegetarianOnly],
  );

  if (!cuisine) {
    return (
      <main className="not-found">
        <p className="eyebrow">A LITTLE DETOUR</p>
        <h1>This culinary world is still being imagined.</h1>
        <Link className="button button-dark" to="/">
          Return home <ArrowRight size={16} />
        </Link>
      </main>
    );
  }

  // Use the custom hero image for this cuisine.
  // Fall back to the existing cuisine.hero if an ID is not mapped.
  const heroImage = cuisineHeroImages[cuisine.id] ?? cuisine.hero;

  const signature = cuisine.signatureIds
    .map((dishId) =>
      cuisine.dishes.find((dish) => dish.id === dishId),
    )
    .filter((dish) => Boolean(dish));

  const nextCuisine =
    cuisines[
      (cuisines.findIndex((item) => item.id === cuisine.id) + 1) %
        cuisines.length
    ];

  return (
    <main
      id="top"
      className="cuisine-page"
      style={
        {
          '--accent': cuisine.accent,
          '--deep': cuisine.deep,
          '--paper': cuisine.paper,
          '--sand': cuisine.sand,
          '--theme-text': cuisine.text,
          '--theme-muted': cuisine.muted,
          '--theme-border': cuisine.border,
        } as CSSProperties & Record<string, string>
      }
    >
      {/* MAIN CUISINE HERO */}
      <section className="cuisine-hero">
        <div className="cuisine-hero-image">
          <motion.img
            // A unique ID per cuisine, separate from the homepage image.
            key={`${cuisine.id}-hero`}
            src={heroImage}
            alt={`${cuisine.name} signature food`}
            initial={{ scale: 1.08, opacity: 0.65 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        <div className="cuisine-hero-shade" />

        <div className="cuisine-hero-copy">
          <Link to="/" className="back-home">
            <ArrowLeft size={14} />
            THE SAVOURÉ COLLECTION
          </Link>

          <p className="eyebrow">{cuisine.eyebrow}</p>

          <motion.h1
            key={`${cuisine.id}-title`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {cuisine.name}
            <br />
            <em>{cuisine.subtitle}</em>
          </motion.h1>

          <motion.p
            key={`${cuisine.id}-description`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {cuisine.description}
          </motion.p>

          <motion.a
            href="#menu"
            className="button button-light"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            Discover the menu <ArrowDown size={15} />
          </motion.a>
        </div>

        <span className="cuisine-hero-caption">
          A CULINARY PORTRAIT · {cuisine.shortName.toUpperCase()}
        </span>
      </section>

      {/* CUISINE SWITCHER */}
      <div className="cuisine-switcher">
        <span>EXPLORE THE COLLECTION</span>

        <div>
          {cuisines.map((item, index) => (
            <Link
              key={item.id}
              to={`/cuisine/${item.id}`}
              className={item.id === cuisine.id ? 'selected' : ''}
            >
              <span>0{index + 1}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* CUISINE STORY */}
      <section className="cuisine-story section">
        <div className="cuisine-story-title">
          <p className="eyebrow">A SENSE OF PLACE</p>
          <h2>{cuisine.headline}</h2>
        </div>

        <div className="cuisine-story-copy">
          <p>{cuisine.story}</p>
          <span className="story-signature">
            A note from the SAVOURÉ kitchen
          </span>
        </div>

        <img
          src={cuisine.detail}
          alt={`${cuisine.name} cuisine prepared with care`}
          loading="lazy"
        />
      </section>

      {/* SIGNATURE DISHES */}
      <section className="cuisine-signatures section">
        <div className="signature-heading">
          <div>
            <p className="eyebrow">FROM THIS KITCHEN</p>
            <h2>
              House <em>signatures.</em>
            </h2>
          </div>

          <p>
            A first taste of what makes this culinary tradition special.
          </p>
        </div>

        <div className="signature-grid">
          {signature.map((dish) => (
            <article key={dish!.id} className="dish-card">
              <a href="#menu" className="dish-image-link">
                <img
                  src={dish!.image}
                  alt={dish!.name}
                  loading="lazy"
                />

                <span className="dish-image-arrow">
                  <ArrowRight size={16} />
                </span>
              </a>

              <div className="dish-meta">
                <span>{dish!.category}</span>
                <span>{formatPrice(dish!.price)}</span>
              </div>

              <h3>{dish!.name}</h3>
              <p>{dish!.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FULL MENU */}
      <section id="menu" className="full-menu section">
        <div className="menu-heading">
          <div>
            <p className="eyebrow">THE FULL COLLECTION</p>

            <h2>
              From our kitchen, <em>with care.</em>
            </h2>

            <p>
              Sample menu · Prices in Indian rupees · Seasonal availability
              may vary.
            </p>
          </div>

          <div className="menu-count">
            <strong>{filtered.length.toString().padStart(2, '0')}</strong>
            <span>DISHES SHOWN</span>
          </div>
        </div>

        <div className="menu-tools">
          <div
            className="category-filters"
            role="group"
            aria-label="Filter menu by category"
          >
            {cuisine.categories.map((cat) => (
              <button
                key={cat}
                className={
                  category === cat ? 'filter-chip active' : 'filter-chip'
                }
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <label className="menu-search">
            <Search size={16} />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a dish"
              aria-label="Search dishes"
            />

            <SlidersHorizontal size={15} />
          </label>
        </div>

        <label className="vegetarian-toggle">
          <input
            type="checkbox"
            checked={vegetarianOnly}
            onChange={(event) => setVegetarianOnly(event.target.checked)}
          />

          <span className="veg-dot" />
          Vegetarian options only
        </label>

        {filtered.length ? (
          <div className="menu-list">
            {filtered.map((dish, index) => (
              <motion.article
                layout
                key={dish.id}
                className="menu-row"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.025,
                }}
              >
                <img src={dish.image} alt="" loading="lazy" />

                <div className="menu-row-copy">
                  <div className="menu-row-title">
                    <h3>{dish.name}</h3>
                    <span className="menu-price">
                      {formatPrice(dish.price)}
                    </span>
                  </div>

                  <p>{dish.description}</p>

                  <div className="dish-tags">
                    {dish.tags?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <span className="menu-row-category">
                  {dish.category}
                </span>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="empty-menu">
            <p className="eyebrow">NOT ON THIS PAGE</p>
            <h3>No dishes found.</h3>
            <p>Try another search or reset your filters.</p>

            <button
              className="text-button"
              onClick={() => {
                setCategory('All');
                setQuery('');
                setVegetarianOnly(false);
              }}
            >
              Clear filters <ArrowRight size={15} />
            </button>
          </div>
        )}
      </section>

      {/* CUISINE RESERVATION */}
      <section className="cuisine-reservation section">
        <div>
          <p className="eyebrow">PULL UP A CHAIR</p>

          <h2>
            Let this be the
            <br />
            <em>start of a story.</em>
          </h2>

          <p>
            Join us for a considered meal, and let the evening take its time.
          </p>

          <Link
            to={`/cuisine/${nextCuisine.id}`}
            className="text-button"
          >
            Next: {nextCuisine.name} <ArrowRight size={15} />
          </Link>
        </div>

        <ReservationForm />
      </section>
    </main>
  );
}
