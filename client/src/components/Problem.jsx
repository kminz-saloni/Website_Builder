import useScrollAnimation from '../hooks/useScrollAnimation';

const Problem = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

    const problems = [
        'load too slowly on mobile',
        'confuse visitors',
        'hide contact actions',
        'look unreliable at first glance',
    ];

    return (
        <section className="section section-light" ref={ref}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 className={isVisible ? 'animate-fade-in-up' : ''}>
                        Most websites don't <span className="text-gradient-primary">fail</span> — they quietly underperform
                    </h2>
                </div>

                <div className={`card ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '150ms' }}>
                    <p style={{
                        fontSize: '1.1rem',
                        marginBottom: '1.5rem',
                        lineHeight: '1.8',
                    }}>
                        Many business websites:
                    </p>

                    <ul style={{
                        listStyle: 'none',
                        fontSize: '1.05rem',
                        marginBottom: '2rem',
                        lineHeight: '2',
                    }}>
                        {problems.map((problem, index) => (
                            <li key={index} style={{ marginBottom: '0.5rem' }}>
                                ❌ {problem}
                            </li>
                        ))}
                    </ul>

                    <div style={{
                        padding: '1.5rem',
                        background: 'rgba(96, 165, 250, 0.1)',
                        borderLeft: '3px solid var(--primary)',
                        borderRadius: '4px',
                        marginBottom: '1.5rem',
                    }}>
                        <p style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'var(--primary)',
                            marginBottom: '0.5rem',
                        }}>
                            The result?
                        </p>
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                            margin: 0,
                        }}>
                            Visitors leave before they ever call or enquire.
                        </p>
                    </div>

                    <p style={{
                        fontSize: '1.15rem',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        textAlign: 'center',
                    }}>
                        We help fix that.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Problem;
