"use client";

import { useMemo, useState } from "react";

const categories = [
  { name: "Apartments", place: "Lagos, Nigeria", count: "3,500+", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85", tag: "City living" },
  { name: "Highrise buildings", place: "New York, USA", count: "5,000+", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85", tag: "Urban spaces" },
  { name: "Farm lands", place: "Niger, Nigeria", count: "400+", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85", tag: "Room to grow" },
  { name: "Beach houses", place: "Rio, Brazil", count: "23,700+", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=85", tag: "Coastal escapes" },
];

const testimonials = [
  { quote: "The team listened carefully, understood what mattered to us, and made the entire process feel clear.", name: "Setemi Williams", role: "Homeowner" },
  { quote: "From the first conversation to getting the keys, Crest Haven made finding a home feel straightforward.", name: "Mitchelle Randell", role: "Property buyer" },
  { quote: "Professional, thoughtful, and genuinely interested in getting us the right place. I would recommend them.", name: "Diane George", role: "Happy client" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [testimonial, setTestimonial] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => categories.filter((item) => {
    const matchesQuery = `${item.name} ${item.place}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.name.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesQuery && matchesCategory;
  }), [query, activeCategory]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement"><span>Thoughtful property choices start here.</span><a href="#listings">Explore properties <span aria-hidden="true">↗</span></a></div>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Crest Haven home"><span className="brand-mark">C</span><span>Crest Haven</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span></span><span></span></button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about" onClick={closeMenu}>About us</a><a href="#listings" onClick={closeMenu}>Listings</a><a href="#testimonials" onClick={closeMenu}>Testimonials</a><a href="#stories" onClick={closeMenu}>Articles</a>
          <button className="nav-cta" onClick={() => { setShowContact(true); closeMenu(); }}>Let's talk <span>↗</span></button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot"></span> A better way to find your place</p>
          <h1>We’ve got properties <em>you can’t</em> miss out on.</h1>
          <p className="hero-description">The right property is more than a place. It is the beginning of something good. Let’s help you find yours.</p>
          <div className="hero-actions"><button className="button button-dark" onClick={() => setShowContact(true)}>Give us a call <span>↗</span></button><a className="text-link" href="#about">See how we work <span>↓</span></a></div>
          <div className="hero-stats"><div><strong>50k<span>+</span></strong><small>Ready properties</small></div><div><strong>35<span>+</span></strong><small>Combined years of experience</small></div><div><strong>7k<span>+</span></strong><small>Happy clients</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image"><div className="image-label"><span className="label-dot"></span><span>Find a place to call yours</span></div></div>
          <div className="floating-note"><span className="note-icon">⌂</span><div><strong>Good places.</strong><small>Better possibilities.</small></div></div>
          <div className="hero-index">01 <span></span> 04</div>
        </div>
      </section>

      <section className="promo-strip"><div><span className="promo-spark">✳</span><p><strong>A little something for your next move.</strong> Enjoy 5% commission upon referrals and 10% off new purchases.</p></div><button onClick={() => setShowContact(true)}>Get started <span>↗</span></button></section>

      <section className="section listings-section" id="listings">
        <div className="section-heading"><div><p className="eyebrow">Find your kind of place</p><h2>What kind of property<br/><em>are you looking for?</em></h2></div><p className="section-intro">From city apartments to open land, explore spaces that fit the life you want to live.</p></div>
        <div className="search-tools"><label className="search-box"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search properties, locations, descriptions..." aria-label="Search properties"/></label><div className="filters">{["All","Apartments","Farm","Beach"].map((item) => <button key={item} className={activeCategory === item ? "filter active" : "filter"} onClick={() => setActiveCategory(item)}>{item}</button>)}</div></div>
        <div className="property-grid">{filtered.map((item, index) => <article className="property-card" key={item.name}><div className="property-image" style={{backgroundImage: `url('${item.image}')`}}><span className="property-tag">{item.tag}</span><button className="save-button" aria-label={`Save ${item.name}`} onClick={(e) => e.currentTarget.classList.toggle("saved")}>♡</button></div><div className="property-meta"><div><h3>{item.name}</h3><p>{item.place}</p></div><span className="card-arrow">↗</span></div><div className="property-count"><span>{item.count} listings</span><span>Explore collection</span></div></article>)}</div>
        {filtered.length === 0 && <p className="empty-state">No matching collections yet. Try another search.</p>}
        <div className="center-action"><button className="button button-outline" onClick={() => { setQuery(""); setActiveCategory("All"); }}>See all listings <span>↗</span></button></div>
      </section>

      <section className="about-section" id="about">
        <div className="about-image"><div className="about-image-inner"></div><div className="about-caption">A considered approach<br/>to finding your next place.</div></div>
        <div className="about-copy"><p className="eyebrow">Why us?</p><h2>We listen and give you <em>beyond your expectations.</em></h2><p className="about-lead">Property decisions deserve care. We bring people, places, and possibilities together with a process built around what matters to you.</p><div className="value-list"><div><span>01</span><div><h3>We are big on trust and delivering</h3><p>Clear communication and thoughtful guidance, every step of the way.</p></div></div><div><span>02</span><div><h3>We are widespread and diverse</h3><p>A broad perspective and a growing range of properties to explore.</p></div></div><div><span>03</span><div><h3>Not one bad review</h3><p>Our relationships are built on care, consistency, and happy clients.</p></div></div></div><button className="button button-dark" onClick={() => setShowContact(true)}>Get to know us <span>↗</span></button></div>
      </section>

      <section className="testimonial-section" id="testimonials"><div className="testimonial-top"><p className="eyebrow">Kind words, real people</p><span className="testimonial-count">0{testimonial + 1} / 0{testimonials.length}</span></div><div className="testimonial-content"><div className="quote-mark">“</div><blockquote>{testimonials[testimonial].quote}</blockquote><div className="testimonial-bottom"><div><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].role}</span></div><div className="carousel-controls"><button onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">←</button><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div></div></div></section>

      <section className="story-section" id="stories"><div className="story-copy"><p className="eyebrow">A story worth sharing</p><h2>We gave Suleiman Akinboyede <em>just what he wanted.</em></h2><p>Every good property journey starts with listening. Discover how we helped one client find a place that felt right.</p><button className="button button-light" onClick={() => setShowContact(true)}>Talk to our team <span>↗</span></button></div><div className="story-art"><div className="story-play">▶</div><span>People. Places. Possibilities.</span></div></section>

      <section className="shortlet-section"><div className="shortlet-photo"></div><div className="shortlet-copy"><p className="eyebrow">Make room for good moments</p><h2>Book shortlets in Lagos <em>before you and your family arrive.</em></h2><p>Arrive with one less thing to worry about. Find a comfortable place for your stay.</p><button className="button button-dark" onClick={() => setShowContact(true)}>Find a shortlet <span>↗</span></button></div></section>

      <footer className="footer"><div className="footer-main"><div><a className="brand brand-footer" href="#"><span className="brand-mark">C</span><span>Crest Haven</span></a><p>Helping you find more than a property. Helping you find your place.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#about">About us</a><a href="#listings">Listings</a><a href="#testimonials">Testimonials</a></div><div><strong>Get in touch</strong><button onClick={() => setShowContact(true)}>Contact our team</button><a href="mailto:hello@cresthaven.example">Send an email</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Crest Haven. All rights reserved.</span><span>Made for the next chapter.</span></div></footer>

      {showContact && <div className="modal-backdrop" role="presentation" onClick={() => { setShowContact(false); setSubmitted(false); }}><div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => { setShowContact(false); setSubmitted(false); }} aria-label="Close">×</button>{submitted ? <div className="success-state"><span>✓</span><h2>Message noted.</h2><p>This demo form is ready to be connected to your enquiry inbox.</p><button className="button button-dark" onClick={() => { setShowContact(false); setSubmitted(false); }}>Close</button></div> : <><p className="eyebrow">Start a conversation</p><h2 id="contact-title">Let’s find your place.</h2><p>Tell us a little about what you’re looking for and our team can take it from here.</p><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}><label>Your name<input required placeholder="Full name"/></label><label>Email address<input required type="email" placeholder="you@example.com"/></label><label>What are you interested in?<select defaultValue=""><option value="" disabled>Select an option</option><option>Buying a property</option><option>Renting a property</option><option>Shortlet</option><option>Referring someone</option></select></label><button className="button button-dark" type="submit">Send enquiry <span>↗</span></button></form></>}</div></div>}
    </main>
  );
}
