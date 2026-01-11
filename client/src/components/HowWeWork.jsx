import useScrollAnimation from '../hooks/useScrollAnimation';

const HowWeWork = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const steps = [
        {
            number: '1',
            title: 'Review',
            description: 'We look at your website or idea and identify what\'s holding it back.',
        },
        {
            number: '2',
            title: 'Plan',
            description: 'We focus on what actually matters for your customers.',
        },
        {
            number: '3',
            title: 'Build or Fix',
            description: 'Clean, fast, reliable execution.',
        },
        {
            number: '4',
            title: 'Launch & Improve',
            description: 'Your site goes live ready to perform — with clear next steps.',
        },
    ];

    return (
        <section className="section section-light" ref={ref}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 className={isVisible ? 'animate-fade-in-up' : ''}>
                        Our <span className="text-gradient-primary">approach</span>
                    </h2>
                </div>

                <div className="grid grid-2 gap-4" style={{ marginBottom: '3rem' }}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`card ${isVisible ? 'animate-fade-in-up' : ''}`}
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
                        Simple. Transparent. No guesswork.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
