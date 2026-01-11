import useScrollAnimation from '../hooks/useScrollAnimation';

const WhoThisIsFor = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const criteria = [
        'Run a service-based business',
        'Rely on calls or enquiries',
        'Want a website that feels trustworthy',
        'Prefer clarity over hype',
    ];

    return (
        <section className="section section-dark" ref={ref}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 className={isVisible ? 'animate-fade-in-up' : ''}>
                        WebCrest is a <span className="text-gradient-primary">good fit</span> if you:
                    </h2>
                </div>

                <div className={`card ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '150ms' }}>
                    <ul style={{
                        listStyle: 'none',
                        fontSize: '1.1rem',
                        marginBottom: '2rem',
                        lineHeight: '2.2',
                    }}>
                        {criteria.map((item, index) => (
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
                            If you're looking for flashy experiments or instant results, we may not be the right fit — and that's okay.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoThisIsFor;
