
import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Sparkles,
  Utensils,
  Wine,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';

import ReservationForm from '../components/ReservationForm';
import DishCard from '../components/DishCard';
import { cuisines } from '../data/cuisines';
import { fadeUp, imageReveal, staggerReveal } from '../animations/motion';

const easeLuxury = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeLuxury },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeLuxury },
  },
};

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const storyImageRef = useRef<HTMLDivElement>(null);
  const experienceImageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyImageRef,
    offset: ['start end', 'end start'],
  });

  const storyImageY = useTransform(
    storyProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [28, -28],
  );

  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceImageRef,
    offset: ['start end', 'end start'],
  });

  const experienceImageY = useTransform(
    experienceProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [18, -18],
  );

  const featured = [cuisines[0], cuisines[2], cuisines[4]].map((c) => ({
    cuisine: c,
    dish: c.dishes.find((d) => c.signatureIds.includes(d.id))!,
  }));

  return (
    <main id="top" className="home-page">
      {/* =========================================================
          1. CINEMATIC HERO
      ========================================================= */}

      <section className="home-hero">
        <div
          className="hero-photo"
          role="img"
          aria-label="An intimate fine-dining table set in warm evening light"
        >
          <motion.img
            src="/images/hero.png"
            alt="An elegant restaurant table in warm evening light"
            fetchPriority="high"
            initial={
              shouldReduceMotion
                ? false
                : { scale: 1.14, opacity: 0.6 }
            }
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              scale: {
                duration: shouldReduceMotion ? 0 : 2,
                ease: easeLuxury,
              },
              opacity: {
                duration: shouldReduceMotion ? 0 : 1.2,
              },
            }}
          />
        </div>

        <motion.div
          className="hero-veil"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2 }}
        />

        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.16,
                delayChildren: shouldReduceMotion ? 0 : 0.25,
              },
            },
          }}
        >
          <motion.p
            className="eyebrow hero-eyebrow"
            variants={reveal}
          >
            <span className="eyebrow-line" />
            FIVE CULINARY WORLDS · ONE REMARKABLE TABLE
          </motion.p>

          <motion.h1 variants={reveal}>
            A world of flavour.
            <br />
            <em>One shared table.</em>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={reveal}
          >
            An invitation to travel by taste — from the spice-warmed
            coast to the quiet precision of Japan, and places in between.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={reveal}
          >
            <a className="button button-dark" href="#cuisines">
              Explore the cuisines <ArrowRight size={16} />
            </a>

            <a className="button button-outline" href="#reservations">
              Reserve a table
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-side-note"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.1 }}
        >
          <span>17° 25' N</span>
          <span>HYDERABAD, INDIA</span>
        </motion.div>

        <motion.a
          className="scroll-cue"
          href="#cuisines"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.25 }}
        >
          <span>SCROLL TO DISCOVER</span>
          <motion.span
            animate={
              shouldReduceMotion ? undefined : { y: [0, 5, 0] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.a>

        <motion.div
          className="hero-index"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.1 }}
        >
          <span>01</span>
          <i />
          <span>05</span>
        </motion.div>
      </section>

      {/* =========================================================
          2. CUISINE COLLECTION
      ========================================================= */}

      <section id="cuisines" className="section cuisine-section">
        <motion.div
          className="section-heading section-heading-centered"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            THE CULINARY COLLECTION
          </motion.p>

          <motion.h2 variants={fadeUp}>
            Five worlds.
            <br />
            <em>Infinite stories.</em>
          </motion.h2>

          <motion.p className="section-intro" variants={fadeUp}>
            Each cuisine has its own rhythm, rituals and ingredients.
            Find the one that speaks to you.
          </motion.p>
        </motion.div>

        <div className="collection-stickers" aria-hidden="true">
          <span className="collection-sticker sticker-dango">🍡</span>
          <span className="collection-sticker sticker-sparkle">✳</span>
          <span className="collection-sticker sticker-leaf">❋</span>
          <span className="collection-sticker sticker-tea">🍵</span>
          <span className="collection-sticker sticker-star">✦</span>
        </div>

        <motion.div
          className="cuisine-gallery"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={cuisine.id}
              className={`cuisine-tile tile-${index + 1}`}
              variants={cardReveal}
              whileHover={
                shouldReduceMotion ? undefined : { y: -8 }
              }
              whileTap={
                shouldReduceMotion ? undefined : { scale: 0.99 }
              }
              transition={{ duration: 0.35, ease: easeLuxury }}
            >
              <Link
                to={`/cuisine/${cuisine.id}`}
                className="cuisine-tile-link"
                style={
                  {
                    '--tile-accent': cuisine.accent,
                  } as CSSProperties & Record<string, string>
                }
              >
                <motion.img
                  layoutId={`cuisine-image-${cuisine.id}`}
                  src={cuisine.hero}
                  alt={`${cuisine.name} cuisine`}
                  loading="lazy"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 1.07 }
                  }
                  transition={{
                    duration: 0.8,
                    ease: easeLuxury,
                  }}
                />

                <span className="tile-shade" />
                <span className="tile-number">
                  0{index + 1}
                </span>

                <span className="tile-content">
                  <span className="tile-kicker">
                    {cuisine.subtitle}
                  </span>

                  <span className="tile-title">
                    {cuisine.name}
                  </span>

                  <span className="tile-enter">
                    Enter this world <ArrowUpRight size={15} />
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="collection-foot"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>01 — 05</span>
          <span>
            A collection of distinct traditions, brought together with care.
          </span>
          <span>SELECT A CUISINE ↗</span>
        </motion.div>
      </section>

      {/* =========================================================
          3. BRAND STORY + PARALLAX IMAGE
      ========================================================= */}

      <section id="story" className="story-section section">
        <motion.div
          ref={storyImageRef}
          className="story-image"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src="/images/interior.jpeg"
            alt="Warm, intimate restaurant interiors with natural textures and candlelight"
            loading="lazy"
            style={{
              y: storyImageY,
            }}
          />

          <motion.span
            className="image-caption"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
          >
            A place to pause, gather, and stay awhile.
          </motion.span>
        </motion.div>

        <motion.div
          className="story-copy"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="eyebrow"
            variants={fadeUp}
          >
            <span className="eyebrow-line" />
            OUR POINT OF VIEW
          </motion.p>

          <motion.h2 variants={fadeUp}>
            Good food is a
            <br />
            form of <em>connection.</em>
          </motion.h2>

          <motion.p variants={fadeUp}>
            At SAVOURÉ, we believe the most memorable meals are the
            ones that bring different worlds a little closer. Our kitchens
            honour the character of each tradition, while our table makes
            room for everyone.
          </motion.p>

          <motion.p variants={fadeUp}>
            Thoughtfully sourced ingredients, considered craft, and
            hospitality that feels effortless — this is our idea of a
            meal well shared.
          </motion.p>

          <motion.a
            className="text-button"
            href="#story"
            variants={fadeUp}
            whileHover={
              shouldReduceMotion ? undefined : { x: 4 }
            }
          >
            Discover our story <ArrowRight size={15} />
          </motion.a>

          <motion.div
            className="story-values"
            variants={staggerReveal}
          >
            <motion.div variants={fadeUp}>
              <Leaf size={19} />
              <span>
                Season-led
                <br />
                ingredients
              </span>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Utensils size={19} />
              <span>
                Respect for
                <br />
                tradition
              </span>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Wine size={19} />
              <span>
                Time well
                <br />
                spent
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          4. SIGNATURE DISHES
      ========================================================= */}

      <section
        className="signature-section section"
        id="signature-menu"
      >
        <motion.div
          className="signature-heading"
          initial="hidden"
          whileInView="visible"
          variants={staggerReveal}
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeUp}>
            <p className="eyebrow">A FEW HOUSE FAVOURITES</p>
            <h2>
              Made to be <em>remembered.</em>
            </h2>
          </motion.div>

          <motion.p variants={fadeUp}>
            Distinctive dishes, chosen for the stories they carry
            and the pleasure they leave behind.
          </motion.p>
        </motion.div>

        <div className="signature-stickers" aria-hidden="true">
          <span className="signature-sticker">🍡</span>
          <span className="signature-sticker">✿</span>
          <span className="signature-sticker">🍵</span>
          <span className="signature-sticker">🥐</span>
          <span className="signature-sticker">✦</span>
          <span className="signature-sticker">❋</span>
        </div>

        <motion.div
          className="signature-grid"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featured.map(({ cuisine, dish }) => (
            <motion.div
              key={dish.id}
              variants={cardReveal}
              whileHover={
                shouldReduceMotion ? undefined : { y: -6 }
              }
              transition={{ duration: 0.35, ease: easeLuxury }}
            >
              <DishCard dish={dish} cuisine={cuisine} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="signature-bottom"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>THE MENU CHANGES WITH THE SEASONS</span>

          <Link
            to={`/cuisine/${cuisines[0].id}#menu`}
            className="text-button"
          >
            Explore all menus <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>

      {/* =========================================================
          5. CINEMATIC EXPERIENCE BANNER + PARALLAX
      ========================================================= */}

      <section className="experience-section" id="experience">
        <motion.div
          ref={experienceImageRef}
          className="experience-image-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageReveal}
        >
          <motion.img
            src="/images/interior.jpeg"
            alt=""
            loading="lazy"
            style={{
              y: experienceImageY,
            }}
          />
        </motion.div>

        <motion.div
          className="experience-overlay"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
          }}
        />

        <motion.div
          className="experience-copy"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            MORE THAN A MEAL
          </motion.p>

          <motion.h2 variants={fadeUp}>
            Stay for the
            <br />
            <em>feeling.</em>
          </motion.h2>

          <motion.p variants={fadeUp}>
            Soft light. Thoughtful service. One more story before you go.
          </motion.p>

          <motion.a
            href="#reservations"
            className="button button-light"
            variants={fadeUp}
            whileHover={
              shouldReduceMotion ? undefined : { y: -3 }
            }
            whileTap={
              shouldReduceMotion ? undefined : { scale: 0.98 }
            }
          >
            Make an evening of it <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div
          className="experience-mark"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: shouldReduceMotion ? 0 : 0.25,
          }}
        >
          <Sparkles size={17} />
          <span>THE SAVOURÉ EXPERIENCE</span>
        </motion.div>
      </section>

      {/* =========================================================
          6. RESERVATION INTRO + FORM
      ========================================================= */}

      <section id="reservations" className="reservation-section section">
        <div className="reservation-doodles" aria-hidden="true">
          <span className="reservation-doodle doodle-onigiri">🍙</span>
          <span className="reservation-doodle doodle-flower">✿</span>
          <span className="reservation-doodle doodle-boba">🧋</span>
          <span className="reservation-doodle doodle-sparkle">✧</span>
          <span className="reservation-doodle doodle-matcha">🍵</span>
          <span className="reservation-doodle doodle-heart">♡</span>
        </div>

        <motion.div
          className="reservation-intro"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            <span className="eyebrow-line" />
            YOUR TABLE IS WAITING
          </motion.p>

          <motion.h2 variants={fadeUp}>
            Some moments
            <br />
            deserve a <em>table.</em>
          </motion.h2>

          <motion.p variants={fadeUp}>
            For a long-overdue catch-up, a small celebration, or simply
            a very good dinner. Tell us what you have in mind.
          </motion.p>

          <motion.div
            className="reservation-note"
            variants={fadeUp}
            whileHover={
              shouldReduceMotion ? undefined : { x: 4 }
            }
          >
            <span className="note-number">01</span>
            <span>
              <strong>Thoughtful hospitality</strong>
              <br />
              Every detail, considered.
            </span>
          </motion.div>

          <motion.div
            className="reservation-note"
            variants={fadeUp}
            whileHover={
              shouldReduceMotion ? undefined : { x: 4 }
            }
          >
            <span className="note-number">02</span>
            <span>
              <strong>Five culinary traditions</strong>
              <br />
              One place to discover them.
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="reservation-form-motion"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: easeLuxury,
          }}
        >
          <ReservationForm />
        </motion.div>
      </section>
    </main>
  );
}
