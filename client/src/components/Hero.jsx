const Hero = () => {
  return (
    <section className="section section-dark" style={{
      paddingTop: '8rem',
      paddingBottom: '8rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Floating background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1), transparent)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} className="animate-float" />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1), transparent)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} className="animate-float delay-200" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="text-gradient animate-fade-in-down" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          lineHeight: '1.2',
          marginBottom: '2rem',
        }}>
          Websites built to help businesses get <span className="text-gradient-primary">more enquiries</span> — not just look good
        </h1>

        <p className="animate-fade-in-up delay-200" style={{
          fontSize: '1.25rem',
          maxWidth: '700px',
          margin: '0 auto 1.5rem',
          color: 'var(--text-muted)',
          lineHeight: '1.7',
        }}>
          WebCrest Studio helps service-based businesses fix slow, confusing websites that cost them real customers.
        </p>

        <p className="animate-fade-in-up delay-300" style={{
          fontSize: '1.15rem',
          maxWidth: '650px',
          margin: '0 auto 3rem',
          color: 'var(--text-muted)',
          lineHeight: '1.7',
        }}>
          We audit, rebuild, and simplify websites so visitors understand what you offer — and take action.
        </p>

        <div className="animate-fade-in-up delay-400" style={{ marginBottom: '1.5rem' }}>
          <a
            href="https://wa.me/919811674377?text=Hi!%20I'd%20like%20a%20free%20website%20review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              fontSize: '1.1rem',
              padding: '1rem 2.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            📞 Request a Free Website Review
          </a>
        </div>

        <p className="animate-fade-in-up delay-500" style={{
          fontSize: '0.9rem',
          color: 'var(--text-dim)',
        }}>
          No obligation · Clear feedback · Honest advice
        </p>
      </div>
    </section>
  );
};

export default Hero;
