import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutPage = () => {
    const [whyRef, whyVisible] = useScrollAnimation({ threshold: 0.2 });
    const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.2 });
    const [processRef, processVisible] = useScrollAnimation({ threshold: 0.2 });

    const problems = [
        'slow',
        'outdated',
        'confusing',
        'or built with no clear purpose',
    ];

    const values = [
        {
            title: 'Practical Results',
            description: 'We measure success by clarity, speed, and enquiries — not design awards.',
        },
        {
            title: 'Simplicity',
            description: 'Simple websites are faster, easier to use, and easier to maintain.',
        },
        {
            title: 'Transparency',
            description: 'You\'ll always know what we\'re building, why it matters, and what it\'s meant to improve.',
        },
        {
            title: 'Reliability',
            description: 'No bloated plugins, fragile setups, or unnecessary complexity.',
        },
        {
            title: 'Long-Term Thinking',
            description: 'We build websites that are easy to update, scale, and improve over time.',
        },
    ];

    const processSteps = [
        {
            number: '1.',
            title: 'Review',
            description: 'We understand your business, audience, and current setup.',
        },
        {
            number: '2.',
            title: 'Plan',
            description: 'We decide what the website actually needs — and what it doesn\'t.',
        },
        {
            number: '3.',
            title: 'Build',
            description: 'We design and build a fast, clean, conversion-focused website.',
        },
        {
            number: '4.',
            title: 'Launch & Improve',
            description: 'Your site goes live ready to perform, with clear next steps for growth.',
        },
    ];

    const idealClient = [
        'Run a service-based business',
        'Rely on leads, calls, or enquiries',
        'Want a website that looks trustworthy and works reliably',
        'Prefer clear communication over technical jargon',
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
                        About <span className="text-gradient-primary">WebCrest Studio</span>
                    </h1>
                    <p className="animate-fade-in-up delay-200" style={{
                        fontSize: '1.4rem',
                        margin: '0 auto 2rem',
                        fontWeight: '600',
                        color: 'var(--text-main)',
                    }}>
                        Websites built for businesses that need real results
                    </p>
                    <p className="animate-fade-in-up delay-300" style={{
                        fontSize: '1.1rem',
                        margin: '0 auto',
                        color: 'var(--text-muted)',
                        maxWidth: '750px',
                        lineHeight: '1.8',
                    }}>
                        WebCrest Studio helps businesses fix one simple but expensive problem:
                        websites that look fine but don't actually generate enquiries, calls, or trust.
                    </p>
                    <p className="animate-fade-in-up delay-400" style={{
                        fontSize: '1.1rem',
                        margin: '2rem auto 0',
                        color: 'var(--text-muted)',
                        maxWidth: '750px',
                        lineHeight: '1.8',
                    }}>
                        We focus on building fast, clear, and reliable websites that help customers understand what you offer — and take action without friction.
                    </p>
                    <p className="animate-fade-in-up delay-500" style={{
                        fontSize: '1.15rem',
                        margin: '2rem auto 0',
                        fontWeight: '600',
                        color: 'var(--primary)',
                    }}>
                        No fluff. No overengineering. Just websites that work.
                    </p>
                </div>
            </section>

            {/* Why We Exist */}
            <section className="section section-light" ref={whyRef}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2 className={isVisible(whyVisible) ? 'animate-fade-in-up' : ''}>
                            Why We <span className="text-gradient-primary">Exist</span>
                        </h2>
                    </div>

                    <div className={`card ${isVisible(whyVisible) ? 'animate-fade-in-up' : ''}`} style={{
                        animationDelay: '150ms',
                    }}>
                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem',
                            lineHeight: '1.8',
                        }}>
                            Too many businesses lose opportunities every day because their website is:
                        </p>

                        <ul style={{
                            listStyle: 'none',
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                            lineHeight: '2',
                        }}>
                            {problems.map((problem, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem' }}>
                                    ❌ {problem}
                                </li>
                            ))}
                        </ul>

                        <p style={{
                            fontSize: '1.15rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            color: 'var(--primary)',
                        }}>
                            We started WebCrest Studio to fix that.
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                        }}>
                            Our goal is simple:<br />
                            <strong>help businesses turn their website into a practical tool, not a liability.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* How We Think */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>How We <span className="text-gradient-primary">Think</span></h2>
                    </div>

                    <div className="card" style={{ textAlign: 'center' }}>
                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                            lineHeight: '1.8',
                        }}>
                            We don't believe in "one-size-fits-all" websites or trendy features.
                        </p>

                        <p style={{
                            fontSize: '1.15rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            color: 'var(--primary)',
                        }}>
                            Every project starts with one question:
                        </p>

                        <div style={{
                            padding: '2rem',
                            background: 'rgba(96, 165, 250, 0.1)',
                            borderRadius: '8px',
                            marginBottom: '2rem',
                        }}>
                            <p style={{
                                fontSize: '1.3rem',
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: 'var(--primary)',
                                margin: 0,
                            }}>
                                "What should a visitor do on this site, and what's stopping them right now?"
                            </p>
                        </div>

                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.8',
                            color: 'var(--text-muted)',
                        }}>
                            Everything else — design, layout, speed, structure — supports that answer.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Value */}
            <section className="section section-light" ref={valuesRef}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2>What We <span className="text-gradient-primary">Value</span></h2>
                    </div>

                    <div className="grid grid-2 gap-4">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`card ${isVisible(valuesVisible) ? 'animate-fade-in-up' : ''}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h3 style={{
                                    marginBottom: '1rem',
                                    color: 'var(--primary)',
                                    fontSize: '1.3rem',
                                }}>
                                    {value.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.7',
                                }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="section section-dark" ref={processRef}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2>Our <span className="text-gradient-primary">Process</span></h2>
                    </div>

                    <div className="grid grid-2 gap-4" style={{ marginBottom: '3rem' }}>
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`card ${isVisible(processVisible) ? 'animate-fade-in-up' : ''}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--primary)',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                }}>
                                    {step.number}
                                </div>
                                <h3 style={{
                                    marginBottom: '1rem',
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
                            Clear process. No confusion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Work Best With */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Who We Work <span className="text-gradient-primary">Best With</span></h2>
                    </div>

                    <div className="card">
                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                        }}>
                            WebCrest Studio is a good fit if you:
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
                                If you're looking for flashy experiments or trend-driven design, we're probably not the right fit — and that's okay.
                            </p>
                        </div>
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
                        Ready to Work <span className="text-gradient-primary">Together?</span>
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        marginBottom: '2.5rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.8',
                    }}>
                        If you're unsure whether your website is helping or hurting your business, we can review it honestly and tell you where you stand.
                    </p>
                    <p style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginBottom: '2rem',
                        color: 'var(--text-main)',
                    }}>
                        Start with a free website review.
                    </p>
                    <a
                        href="https://wa.me/919811674377?text=Hi!%20I'd%20like%20to%20start%20my%20project%20with%20WebCrest%20Studio"
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
                        📞 Start Your Project
                    </a>
                </div>
            </section>
        </>
    );
};

const isVisible = (visible) => visible;

export default AboutPage;
