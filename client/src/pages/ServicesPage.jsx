import useScrollAnimation from '../hooks/useScrollAnimation';

const ServicesPage = () => {
    const [servicesRef, servicesVisible] = useScrollAnimation({ threshold: 0.2 });
    const [processRef, processVisible] = useScrollAnimation({ threshold: 0.2 });

    const services = [
        {
            number: '1️⃣',
            title: 'Website Build (From Scratch)',
            subtitle: 'For businesses that need a strong online foundation',
            description: 'We design and build clean, professional websites that load fast, look trustworthy, and guide visitors to take action.',
            bestFor: [
                'Local service businesses',
                'Clinics & professionals',
                'Companies without a reliable website',
            ],
            includes: [
                'Custom-designed website (no templates)',
                'Mobile-first layout',
                'Clear call-to-action structure',
                'SEO-ready foundation',
                'Fast load performance',
                'Easy content updates',
            ],
            outcome: 'Built to look credible and convert visitors into enquiries.',
        },
        {
            number: '2️⃣',
            title: 'Website Performance Fix',
            subtitle: 'For businesses losing traffic due to slow or outdated sites',
            description: 'If your site is slow, bloated, or unreliable, we identify what\'s broken and fix it — without rebuilding everything from scratch.',
            bestFor: [
                'Existing websites with poor speed',
                'Sites failing Core Web Vitals',
                'Businesses losing traffic or leads',
            ],
            includes: [
                'Speed & performance audit',
                'Asset and image optimization',
                'Code cleanup',
                'Hosting & delivery optimization',
                'Measurable performance improvements',
            ],
            outcome: 'A faster site builds trust and keeps visitors from leaving.',
        },
        {
            number: '3️⃣',
            title: 'Conversion Optimization',
            subtitle: 'For businesses getting traffic but not results',
            description: 'If people visit your site but don\'t call or enquire, the problem isn\'t traffic — it\'s clarity.\n\nWe improve structure, messaging, and user flow so visitors know exactly what to do next.',
            bestFor: [
                'Service-based businesses',
                'Lead-generation websites',
                'High-intent traffic sources',
            ],
            includes: [
                'Layout and CTA improvements',
                'Simplified user journeys',
                'Form & contact optimization',
                'Conversion tracking setup',
                'Ongoing improvement recommendations',
            ],
            outcome: 'Turn existing traffic into real enquiries.',
        },
    ];

    const processSteps = [
        {
            title: 'Review',
            description: 'We understand your business, audience, and current website.',
        },
        {
            title: 'Build or Fix',
            description: 'We design, optimize, or rebuild with a clear conversion goal.',
        },
        {
            title: 'Launch & Improve',
            description: 'Your site goes live fast, clean, and ready to perform.',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section section-dark" style={{
                paddingTop: '6rem',
                paddingBottom: '6rem',
                textAlign: 'center',
            }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h1 className="animate-fade-in-down" style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        lineHeight: '1.2',
                        marginBottom: '1.5rem',
                    }}>
                        <span className="text-gradient-primary">Our Services</span>
                    </h1>
                    <p className="animate-fade-in-up delay-200" style={{
                        fontSize: '1.5rem',
                        margin: '0 auto 1.5rem',
                        fontWeight: '600',
                        color: 'var(--text-main)',
                    }}>
                        Websites built to generate trust, speed, and real leads
                    </p>
                    <p className="animate-fade-in-up delay-300" style={{
                        fontSize: '1.1rem',
                        margin: '0 auto',
                        color: 'var(--text-muted)',
                        maxWidth: '700px',
                        lineHeight: '1.7',
                    }}>
                        We help businesses turn underperforming websites into fast, clear, and conversion-focused systems.
                        Whether you're starting fresh or fixing an existing site, our work is built around real business outcomes — not vanity features.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="section section-light" ref={servicesRef}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`card ${isVisible(servicesVisible) ? 'animate-fade-in-up' : ''}`}
                            style={{
                                animationDelay: `${index * 150}ms`,
                                marginBottom: index < services.length - 1 ? '3rem' : '0',
                            }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    fontSize: '2rem',
                                    marginBottom: '0.5rem',
                                }}>
                                    {service.number}
                                </div>
                                <h2 style={{
                                    fontSize: '1.8rem',
                                    marginBottom: '0.5rem',
                                    color: 'var(--primary)',
                                }}>
                                    {service.title}
                                </h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    fontStyle: 'italic',
                                    color: 'var(--text-dim)',
                                    marginBottom: '1rem',
                                }}>
                                    {service.subtitle}
                                </p>
                                <p style={{
                                    fontSize: '1.05rem',
                                    lineHeight: '1.7',
                                    color: 'var(--text-muted)',
                                    whiteSpace: 'pre-line',
                                }}>
                                    {service.description}
                                </p>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '2rem',
                                marginBottom: '1.5rem',
                            }}>
                                <div>
                                    <h4 style={{
                                        marginBottom: '1rem',
                                        color: 'var(--primary)',
                                        fontSize: '1.1rem',
                                    }}>
                                        Best for:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.8',
                                    }}>
                                        {service.bestFor.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.5rem' }}>
                                                ✓ {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 style={{
                                        marginBottom: '1rem',
                                        color: 'var(--primary)',
                                        fontSize: '1.1rem',
                                    }}>
                                        What this includes:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.8',
                                    }}>
                                        {service.includes.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.5rem' }}>
                                                ✔ {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div style={{
                                padding: '1rem',
                                background: 'rgba(96, 165, 250, 0.1)',
                                borderLeft: '3px solid var(--primary)',
                                borderRadius: '4px',
                            }}>
                                <p style={{
                                    fontSize: '1.05rem',
                                    fontWeight: '600',
                                    color: 'var(--primary)',
                                    margin: 0,
                                }}>
                                    👉 {service.outcome}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How We Work */}
            <section className="section section-dark" ref={processRef}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2>How We Work</h2>
                    </div>

                    <div className="grid grid-3 gap-4" style={{ marginBottom: '3rem' }}>
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`card ${isVisible(processVisible) ? 'animate-fade-in-up' : ''}`}
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    textAlign: 'center',
                                }}
                            >
                                <h3 style={{
                                    marginBottom: '1rem',
                                    color: 'var(--primary)',
                                    fontSize: '1.3rem',
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

                    <div className="text-center">
                        <p style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: 'var(--text-main)',
                        }}>
                            No confusion. No long contracts. No tech headaches.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>
                        <span className="text-gradient-primary">Pricing</span>
                    </h2>

                    <div className="card">
                        <p style={{
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem',
                            color: 'var(--primary)',
                        }}>
                            We don't sell one-size-fits-all packages.
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem',
                            lineHeight: '1.7',
                        }}>
                            Every business is different.<br />
                            Pricing depends on:
                        </p>

                        <ul style={{
                            listStyle: 'none',
                            fontSize: '1.05rem',
                            marginBottom: '2rem',
                            lineHeight: '2',
                        }}>
                            <li>• Scope</li>
                            <li>• Complexity</li>
                            <li>• Existing setup</li>
                        </ul>

                        <div style={{
                            padding: '1.5rem',
                            background: 'rgba(96, 165, 250, 0.1)',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                        }}>
                            <p style={{
                                fontSize: '1.15rem',
                                fontWeight: '600',
                                color: 'var(--primary)',
                                margin: 0,
                            }}>
                                👉 Free website review available before any commitment.
                            </p>
                        </div>

                        <p style={{
                            fontSize: '0.95rem',
                            fontStyle: 'italic',
                            color: 'var(--text-dim)',
                        }}>
                       
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
                        marginBottom: '1.5rem',
                    }}>
                        Not sure what you <span className="text-gradient-primary">need?</span>
                    </h2>
                    <p style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        marginBottom: '2rem',
                        color: 'var(--text-main)',
                    }}>
                        Get a free website review
                    </p>
                    <p style={{
                        fontSize: '1.05rem',
                        marginBottom: '2.5rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.7',
                    }}>
                        We'll look at your current site (or idea) and tell you honestly:
                    </p>
                    <ul style={{
                        listStyle: 'none',
                        fontSize: '1.05rem',
                        marginBottom: '3rem',
                        textAlign: 'left',
                        maxWidth: '500px',
                        margin: '0 auto 3rem',
                        lineHeight: '2',
                    }}>
                        <li>✓ What's broken</li>
                        <li>✓ What's unnecessary</li>
                        <li>✓ What will actually help your business grow</li>
                    </ul>
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
                        📞 Schedule Free Consultation
                    </a>
                </div>
            </section>
        </>
    );
};

const isVisible = (visible) => visible;

export default ServicesPage;
