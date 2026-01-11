import useScrollAnimation from '../hooks/useScrollAnimation';

const AutoLocksmithPage = () => {
    const [problemRef, problemVisible] = useScrollAnimation({ threshold: 0.2 });
    const [solutionRef, solutionVisible] = useScrollAnimation({ threshold: 0.2 });
    const [processRef, processVisible] = useScrollAnimation({ threshold: 0.2 });
    const [qualifyRef, qualifyVisible] = useScrollAnimation({ threshold: 0.2 });

    const problems = [
        'Load too slowly when someone is locked out',
        'Look sketchy or unprofessional',
        'Bury the phone number',
        'Don\'t show service coverage clearly',
    ];

    const included = [
        'One-page auto locksmith website',
        'Mobile-optimized (most lockouts happen away from home)',
        'Prominent click-to-call buttons',
        'Service area map',
        'Trust badges and credentials',
        'Fast page loading',
        'Emergency contact form',
    ];

    const processSteps = [
        {
            step: 'Step 1',
            title: 'Free website review',
            description: 'We analyze your current site and show you what\'s costing you lockout calls.',
        },
        {
            step: 'Step 2',
            title: 'Build or fix',
            description: 'We create a locksmith-focused page designed for urgent customer needs.',
        },
        {
            step: 'Step 3',
            title: 'Approve & launch',
            description: 'You review it. We launch it. Simple.',
        },
        {
            step: 'Step 4',
            title: 'Start converting',
            description: 'Your site is live and turning stressed customers into paying jobs.',
        },
    ];

    const qualifications = [
        'Offer auto locksmith services',
        'Rely on emergency calls for business',
        'Get leads from Google Maps or local search',
        'Need to build trust instantly',
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
                        Auto locksmith websites that get you <span className="text-gradient-primary">emergency calls</span>
                    </h1>
                    <p className="animate-fade-in-up delay-200" style={{
                        fontSize: '1.25rem',
                        margin: '0 auto 2.5rem',
                        color: 'var(--text-muted)',
                        maxWidth: '600px',
                    }}>
                        Built for UK auto locksmiths who need urgent calls from stressed drivers, not casual browsers.
                    </p>
                    <div className="animate-fade-in-up delay-400">
                        <a
                            href="https://wa.me/919811674377?text=Hi!%20I'd%20like%20a%20free%20locksmith%20website%20review"
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
                            📞 Get a free locksmith website review
                        </a>
                    </div>
                    <p style={{
                        marginTop: '1.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-dim)',
                    }}>
                        No contracts · Mobile-first · Built for urgency
                    </p>
                </div>
            </section>

            {/* Problem Section */}
            <section className="section section-light" ref={problemRef}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2 className={isVisible(problemVisible) ? 'animate-fade-in-up' : ''}>
                            When someone is <span className="text-gradient-primary">locked out of their car</span>, they need help NOW
                        </h2>
                    </div>

                    <div className={`card ${isVisible(problemVisible) ? 'animate-fade-in-up' : ''}`} style={{
                        animationDelay: '150ms',
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong>Auto lockout customers are stressed and in a hurry.</strong><br />
                            They call the first locksmith who looks trustworthy and available.
                        </p>

                        <p style={{ marginBottom: '1rem' }}>If your website is:</p>
                        <ul style={{
                            listStyle: 'none',
                            marginBottom: '1.5rem',
                            paddingLeft: '1rem',
                        }}>
                            <li style={{ marginBottom: '0.5rem' }}>❌ slow to load</li>
                            <li style={{ marginBottom: '0.5rem' }}>❌ looks unprofessional</li>
                            <li style={{ marginBottom: '0.5rem' }}>❌ hard to find your number</li>
                            <li style={{ marginBottom: '0.5rem' }}>❌ doesn't show your coverage area</li>
                        </ul>

                        <p style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'var(--primary)',
                        }}>
                            they'll call the next locksmith on the list.
                        </p>

                        <p style={{
                            marginTop: '1.5rem',
                            fontSize: '1.15rem',
                            fontWeight: '600',
                        }}>
                            That's money left on the table — every single day.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Real Problem */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>The <span className="text-gradient-primary">Real Problem</span></h2>
                    </div>

                    <div className="card" style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                    }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            Most auto locksmith websites fail because they:
                        </h3>
                        <ul style={{
                            listStyle: 'none',
                            fontSize: '1.1rem',
                            lineHeight: '2',
                        }}>
                            {problems.map((problem, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem' }}>
                                    ⚠️ {problem}
                                </li>
                            ))}
                        </ul>
                        <p style={{
                            marginTop: '2rem',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'var(--primary)',
                            textAlign: 'center',
                        }}>
                            In emergencies, speed and trust win.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="section section-light" ref={solutionRef}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2 className={isVisible(solutionVisible) ? 'animate-fade-in-up' : ''}>
                            Websites designed specifically for <span className="text-gradient-primary">auto locksmiths</span>
                        </h2>
                    </div>

                    <div className={`card ${isVisible(solutionVisible) ? 'animate-fade-in-up' : ''}`} style={{
                        animationDelay: '150ms',
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        textAlign: 'center',
                    }}>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem' }}>
                            We build fast, mobile-optimized websites with one goal:
                        </p>
                        <p style={{
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            color: 'var(--primary)',
                            marginBottom: '2rem',
                        }}>
                            getting your phone to ring when someone is locked out.
                        </p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                        }}>
                            <p>No complicated navigation.</p>
                            <p>No distractions.</p>
                            <p>No fluff.</p>
                        </div>

                        <p style={{ fontSize: '1.15rem', fontWeight: '600' }}>
                            Just a clear path from "locked out" to "calling you."
                        </p>
                    </div>

                    {/* What's Included */}
                    <div className={`card ${isVisible(solutionVisible) ? 'animate-fade-in-up' : ''}`} style={{
                        animationDelay: '300ms',
                        marginTop: '3rem',
                    }}>
                        <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>What's Included</h3>
                        <ul style={{
                            listStyle: 'none',
                            fontSize: '1.05rem',
                            lineHeight: '2',
                        }}>
                            {included.map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem' }}>
                                    ✔ {item}
                                </li>
                            ))}
                        </ul>
                        <p style={{
                            marginTop: '2rem',
                            textAlign: 'center',
                            fontStyle: 'italic',
                            color: 'var(--text-dim)',
                        }}>
                            Everything built for stressed customers who need help fast.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section section-dark" ref={processRef}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2>How It Works</h2>
                        <p style={{ color: 'var(--text-dim)', marginTop: '1rem', fontSize: '1.1rem' }}>
                            Simple. No tech headaches.
                        </p>
                    </div>

                    <div className="grid grid-2 gap-4">
                        {processSteps.map((item, index) => (
                            <div
                                key={index}
                                className={`card ${isVisible(processVisible) ? 'animate-fade-in-up' : ''}`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--primary)',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                }}>
                                    {item.step}
                                </div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="section section-light" ref={qualifyRef}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2 className={isVisible(qualifyVisible) ? 'animate-fade-in-up' : ''}>
                            This is a <span className="text-gradient-primary">good fit</span> if you:
                        </h2>
                    </div>

                    <div className={`card ${isVisible(qualifyVisible) ? 'animate-fade-in-up' : ''}`} style={{
                        animationDelay: '150ms',
                    }}>
                        <ul style={{
                            listStyle: 'none',
                            fontSize: '1.1rem',
                            lineHeight: '2.2',
                        }}>
                            {qualifications.map((qual, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem' }}>
                                    ✓ {qual}
                                </li>
                            ))}
                        </ul>
                        <p style={{
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            fontStyle: 'italic',
                            color: 'var(--text-dim)',
                            textAlign: 'center',
                        }}>
                            If you're not an auto locksmith, this page isn't for you — and that's intentional.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Simple, <span className="text-gradient-primary">transparent pricing</span></h2>
                    </div>

                    <div className="card" style={{
                        textAlign: 'center',
                        border: '2px solid var(--primary)',
                        background: 'rgba(96, 165, 250, 0.05)',
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Auto locksmith website
                        </h3>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: 'var(--primary)',
                            marginBottom: '0.5rem',
                        }}>
                            From £499
                        </div>
                        <p style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-dim)',
                            marginBottom: '2rem',
                        }}>
                            (one-time)
                        </p>

                        <p style={{
                            fontSize: '1.05rem',
                            marginBottom: '0.5rem',
                        }}>
                            Optional ongoing care: <strong>£29/month</strong>
                        </p>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '0.95rem',
                            color: 'var(--text-dim)',
                        }}>
                            <p>No hidden fees.</p>
                            <p>No long-term contracts.</p>
                            <p>No unnecessary upsells.</p>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                                Final pricing depends on scope — reviewed upfront.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section section-light" style={{
                paddingTop: '5rem',
                paddingBottom: '5rem',
                textAlign: 'center',
            }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        marginBottom: '2rem',
                    }}>
                        Find out what's costing you <span className="text-gradient-primary">lockout calls</span>
                    </h2>
                    <a
                        href="https://wa.me/919811674377?text=Hi!%20I'd%20like%20a%20free%20auto%20locksmith%20website%20review"
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
                        📞 Get a free auto locksmith website review
                    </a>
                    <p style={{
                        marginTop: '1.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-dim)',
                    }}>
                        Takes 2 minutes · No obligation · Honest feedback
                    </p>
                </div>
            </section>

            {/* Footer Micro-copy */}
            <section className="section section-dark" style={{
                paddingTop: '2rem',
                paddingBottom: '2rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
                <div className="container">
                    <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-dim)',
                    }}>
                        Auto locksmith websites built for the UK<br />
                        <strong>WebCrest Studio</strong>
                    </p>
                </div>
            </section>
        </>
    );
};

const isVisible = (visible) => visible;

export default AutoLocksmithPage;
