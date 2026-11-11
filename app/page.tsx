"use client";

import { useMemo, useState } from "react";

const properties = [
  { title: "Large Flats in Lagos, Nigeria", count: "Over 3,500+ listings", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90", keywords: "flat apartment lagos nigeria" },
  { title: "Highrise buildings in New York, USA", count: "Over 5,000+ listings", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=90", keywords: "highrise building new york usa" },
  { title: "Farm Lands in Niger, Nigeria", count: "Over 400+ listings", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90", keywords: "farm land niger nigeria" },
  { title: "Beach Houses in Rio, Brazil", count: "Over 23,700+ listings", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=90", keywords: "beach house rio brazil" },
];

const reviews = [
  { name: "Setemi Williams", text: "On my first visit, the team explained the options and made sure I found the right property for my needs." },
  { name: "Mitchelle Randell", text: "Such a nice experience. The team was patient and helped me find a place that felt right." },
  { name: "Diane George", text: "Finding the right home should be easy. Agents at Crest Haven made the whole process smooth and gave me a breath of fresh air." },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const filtered = useMemo(() => properties.filter((p) => (p.title + " " + p.keywords).toLowerCase().includes(query.toLowerCase())), [query]);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">5% commission upon referrals and 10% off new purchases. Offer ends soon! <a href="#listings">Get started</a></div>
      <section className="hero" id="home">
        <header className="header">
          <a className="logo" href="#home">Crest Haven</a>
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "Menu"}</button>
          <nav className={menuOpen ? "nav nav-open" : "nav"}>
            <a href="#about" onClick={closeMenu}>About us</a>
            <a href="#listings" onClick={closeMenu}>Listings</a>
            <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
            <a href="#articles" onClick={closeMenu}>Articles</a>
            <button className="nav-call" onClick={() => { setContactOpen(true); closeMenu(); }}>Give us a call</button>
          </nav>
        </header>
        <div className="hero-content">
          <h1>We’ve Got<br />Properties You<br />Can’t Miss Out On</h1>
          <p>With over 50,000+ listings, apartments and plots<br className="desktop-break" /> available to fit a diverse choice set.</p>
          <div className="hero-actions">
            <button className="btn btn-white" onClick={() => setContactOpen(true)}>Give us a call</button>
            <a className="btn btn-glass" href="#about"><span className="play-dot">▶</span> See how we work</a>
          </div>
        </div>
        <div className="stats">
          <div><strong>50k+</strong><span>Ready properties</span></div>
          <div><strong>35+</strong><span>Combined years of experience</span></div>
          <div><strong>7k+</strong><span>Happy clients</span></div>
        </div>
      </section>

      <section className="reviews" id="testimonials">
        {reviews.map((r, i) => <article className="review" key={r.name}><div className={"avatar avatar-" + i}>{r.name.slice(0, 1)}</div><div><strong>{r.name}</strong><p>{r.text}</p></div></article>)}
      </section>

      <section className="listings" id="listings">
        <div className="listings-head">
          <div><h2>What Kind of Property<br />Are You Looking For?</h2><p>Choose from 50,000+ diverse options ranging from flats,<br className="desktop-break" /> short lets, lands, buildings, duplexes and so much more.</p></div>
          <div className="search-area"><label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for properties, locations, descriptions..." aria-label="Search properties" /></label><a className="all-listings" href="#listings" onClick={() => setQuery("")}>See all listings</a></div>
        </div>
        <div className="property-row">
          {filtered.map((p) => <article className="property" key={p.title}><img src={p.image} alt="" /><h3>{p.title}</h3><p>{p.count}</p></article>)}
          {filtered.length === 0 && <p className="no-results">No matching properties. Try another search.</p>}
        </div>
      </section>

      <section className="why" id="about">
        <div className="why-copy">
          <span className="eyebrow">WHY US?</span>
          <h2>We Listen And Give<br />You Beyond Your<br />Expectations</h2>
          <p className="why-intro">With over 50,000+ listings, apartments and plots available to fit a diverse choice set.</p>
          <div className="reasons">
            <article><span>♧</span><div><h3>We are big on Trust and Delivering</h3><p>In this real estate market, we guide clients every step of the way and keep it simple and transparent at all times.</p></div></article>
            <article><span>♧</span><div><h3>We are Widespread and Diverse</h3><p>Our large spread of listings ensures that you have options to pick from to suit your needs and preferences.</p></div></article>
            <article><span>♧</span><div><h3>Not One Bad Review</h3><p>Our clients speak about all the times we've worked with them. We value every review and every experience.</p></div></article>
          </div>
        </div>
        <img className="why-image" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85" alt="Property consultation" />
      </section>

      <section className="story" id="articles">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=85" alt="A Crest Haven customer story" />
        <div className="story-shade"></div>
        <button className="story-play" aria-label="Play customer story" onClick={() => setContactOpen(true)}>▶</button>
        <div className="story-caption"><strong>We gave Suleiman Akinboyede just what he wanted</strong><span>When Suleiman gave us a brief, we helped him find the right property.</span></div>
        <button className="youtube" onClick={() => setContactOpen(true)}>Go to our Youtube</button>
      </section>

      <section className="shortlet">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85" alt="A welcoming shortlet dining space" />
        <div className="shortlet-copy"><h2>Book Shortlets in Lagos<br />Before You and Your<br />Family Arrive</h2><div><button className="btn btn-black" onClick={() => setContactOpen(true)}>Give us a call</button><a className="btn btn-outline" href="#listings">See our listings</a></div></div>
      </section>

      <section className="closing">
        <h2>We’ve Got Properties You<br />Can’t Miss Out On</h2>
        <p>With over 50,000+ listings, apartments and plots<br /> available to fit a diverse choice set.</p>
        <button className="btn btn-white" onClick={() => setContactOpen(true)}>Give us a call</button>
      </section>

      <footer className="footer"><a href="#home">Crest Haven</a><nav><a href="#about">About us</a><a href="#listings">Listings</a><a href="#testimonials">Testimonials</a><a href="#articles">Articles</a></nav></footer>

      {contactOpen && <div className="modal-backdrop" onClick={() => { setContactOpen(false); setSubmitted(false); }}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" aria-label="Close" onClick={() => { setContactOpen(false); setSubmitted(false); }}>×</button>{submitted ? <><h2>Thank you.</h2><p>Your enquiry has been recorded in this demo.</p><button className="btn btn-black" onClick={() => { setContactOpen(false); setSubmitted(false); }}>Close</button></> : <><span className="eyebrow">GET IN TOUCH</span><h2 id="contact-title">How can we help?</h2><p>Leave your details and tell us what you are looking for.</p><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="Email address" /></label><label>I'm interested in<select defaultValue="Property enquiry"><option>Property enquiry</option><option>Shortlet booking</option><option>Referral</option></select></label><button className="btn btn-black" type="submit">Send enquiry</button></form></>}</section></div>}
    </main>
  );
}
