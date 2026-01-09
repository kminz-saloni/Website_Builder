const Hero = () => {
  return (
    <section className="section" style={{ paddingTop: '8rem', paddingBottom: '8rem', textAlign: 'center' }}>
      <div className="container">
        <h1 className="text-gradient">
          Stop Losing Clients to <br />
          <span className="text-gradient-primary">Bad Websites</span>
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '2rem auto', color: 'var(--text-muted)' }}>
          We audit, fix, and build high-performance websites that turn visitors into paying customers. Don't let a slow site kill your business.
        </p>
        <div className="flex justify-center gap-2">
          <a href="#contact" className="btn btn-primary">Get Free Site Audit</a>
          <a href="#services" className="btn btn-outline">View Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
