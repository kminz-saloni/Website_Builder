const CTABanner = () => {
    return (
        <section className="section section-light" style={{
            paddingTop: '5rem',
            paddingBottom: '5rem',
            textAlign: 'center',
        }}>
            <div className="container" style={{ maxWidth: '700px' }}>
                <h2 className="animate-fade-in-up" style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    marginBottom: '2rem',
                }}>
                    Not sure if your website is <span className="text-gradient-primary">helping or hurting?</span>
                </h2>
                <p className="animate-fade-in-up delay-100" style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-muted)',
                    marginBottom: '2.5rem',
                    lineHeight: '1.7',
                }}>
                    We'll review it honestly and tell you where you stand.
                </p>
                <a
                    href="https://wa.me/919811674377?text=Hi!%20I'd%20like%20a%20free%20website%20review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-pulse animate-fade-in-up delay-200"
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
        </section>
    );
};

export default CTABanner;
