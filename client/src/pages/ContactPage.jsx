import Contact from '../components/Contact';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ContactPage = () => {
    const [nextStepsRef, nextStepsVisible] = useScrollAnimation({ threshold: 0.2 });
    const [bestForRef, bestForVisible] = useScrollAnimation({ threshold: 0.2 });

    const nextSteps = [
        {
            number: '1',
            title: 'We review your site or idea',
            description: 'We take a look at what you have and identify opportunities.',
        },
        {
            number: '2',
            title: 'We reply with clear feedback',
            description: 'Honest assessment of what matters and what doesn\'t.',
        },
        {
            number: '3',
            title: 'If it makes sense, we suggest next steps',
            description: 'Clear recommendations tailored to your business.',
        },
        {
            number: '4',
            title: 'If it\'s not a good fit, we\'ll tell you that too',
            description: 'No wasted time. No pressure.',
        },
    ];

    const idealClient = [
        'Service-based businesses',
        'Local businesses relying on leads or calls',
        'Owners who value clarity over hype',
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section section-dark" style={{
                paddingTop: '6rem',
                paddingBottom: '6rem',
                textAlign: 'center',
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="animate-fade-in-down" style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        lineHeight: '1.2',
                        marginBottom: '1.5rem',
                    }}>
                        Contact <span className="text-gradient-primary">WebCrest Studio</span>
                    </h1>
                    <p className="animate-fade-in-up delay-200" style={{
                        fontSize: '1.4rem',
                        margin: '0 auto 2rem',
                        fontWeight: '600',
                        color: 'var(--text-main)',
                    }}>
                        Let's see if we're a good fit
                    </p>
                    <p className="animate-fade-in-up delay-300" style={{
                        fontSize: '1.1rem',
                        margin: '0 auto',
                        color: 'var(--text-muted)',
                        maxWidth: '700px',
                        lineHeight: '1.8',
                    }}>
                        If you're unsure whether your website is helping or hurting your business, you can reach out for a quick, honest review.
                    </p>
                    <p className="animate-fade-in-up delay-400" style={{
                        fontSize: '1.05rem',
                        margin: '2rem auto 0',
                        color: 'var(--text-muted)',
                        maxWidth: '700px',
                        lineHeight: '1.8',
                    }}>
                        We'll look at your current setup (or plans) and tell you what matters — and what doesn't.
                    </p>
                </div>
            </section>

            {/* How to Reach Us */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>How to <span className="text-gradient-primary">Reach Us</span></h2>
                    </div>

                    <div className="grid gap-4" style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        marginBottom: '4rem',
                    }}>
                        <a
                            href="https://wa.me/919811674377?text=Hi!%20I'd%20like%20a%20free%20website%20review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card text-center"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>WhatsApp</h3>
                            <div style={{
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: 'var(--text-main)',
                            }}>
                                +91 98116 74377
                            </div>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                                Message us for instant responses
                            </p>
                        </a>

                        <div className="card text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Email</h3>
                            <div style={{
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: 'var(--text-main)',
                            }}>
                                webcreststudios@gmail.com
                            </div>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                                We reply within 24 hours on business days
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Free Website <span className="text-gradient-primary">Review</span></h2>
                        <p style={{
                            color: 'var(--text-muted)',
                            margin: '1rem auto',
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                        }}>
                            Fill out the form below and we'll review your website or idea before suggesting anything.
                        </p>
                        <p style={{
                            color: 'var(--text-dim)',
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                        }}>
                            No obligation. No pressure.
                        </p>
                    </div>

                    <Contact />
                </div>
            </section>

            {/* What Happens Next */}
            <section className="section section-light" ref={nextStepsRef}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2>What Happens <span className="text-gradient-primary">Next</span></h2>
                    </div>

                    <div className="grid grid-2 gap-4">
                        {nextSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`card ${isVisible(nextStepsVisible) ? 'animate-fade-in-up' : ''}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div style={{
                                    fontSize: '2rem',
                                    color: 'var(--primary)',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                }}>
                                    {step.number}
                                </div>
                                <h3 style={{
                                    marginBottom: '1rem',
                                    fontSize: '1.2rem',
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.7',
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Is Best For */}
            <section className="section section-dark" ref={bestForRef}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Who This Is <span className="text-gradient-primary">Best For</span></h2>
                    </div>

                    <div className={`card ${isVisible(bestForVisible) ? 'animate-fade-in-up' : ''}`}>
                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                        }}>
                            WebCrest Studio works best with:
                        </p>

                        <ul style={{
                            listStyle: 'none',
                            fontSize: '1.05rem',
                            marginBottom: '2rem',
                            lineHeight: '2.2',
                        }}>
                            {idealClient.map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem' }}>
                                    ✓ {item}
                                </li>
                            ))}
                        </ul>

                        <div style={{
                            padding: '1.5rem',
                            background: 'rgba(239, 68, 68, 0.1)',
                            borderLeft: '3px solid rgba(239, 68, 68, 0.5)',
                            borderRadius: '4px',
                        }}>
                            <p style={{
                                fontSize: '1.05rem',
                                fontStyle: 'italic',
                                color: 'var(--text-muted)',
                                margin: 0,
                            }}>
                                If you're looking for instant quotes or rushed work, we may not be the right fit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Work Style */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>
                        A Note on <span className="text-gradient-primary">Location & Work Style</span>
                    </h2>

                    <div className="card">
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.8',
                            color: 'var(--text-muted)',
                        }}>
                            We work remotely with clients globally using email and video calls.<br />
                            Clear communication and documented processes keep everything simple and transparent.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section section-dark" style={{
                paddingTop: '5rem',
                paddingBottom: '5rem',
                textAlign: 'center',
            }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        marginBottom: '2rem',
                    }}>
                        If you'd like an honest opinion about your website, <span className="text-gradient-primary">start with a free review</span>
                    </h2>
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
                        📞 Request Free Website Review
                    </a>
                </div>
            </section>
        </>
    );
};

const isVisible = (visible) => visible;

export default ContactPage;
