import useScrollAnimation from '../hooks/useScrollAnimation';

const Process = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const steps = [
        {
            number: '01',
            title: 'Discovery & Audit',
            description: 'We analyze your current site, competitors, and target audience to identify opportunities and pain points.',
            icon: '🔍',
        },
        {
            number: '02',
            title: 'Strategy & Design',
            description: 'Create a custom design system and user experience tailored to convert your specific audience.',
            icon: '🎨',
        },
        {
            number: '03',
            title: 'Development & Testing',
            description: 'Build your site with modern tech, optimize for speed, and test across all devices and browsers.',
            icon: '⚡',
        },
        {
            number: '04',
            title: 'Launch & Optimize',
            description: 'Deploy your site, monitor performance, and continuously improve based on real user data.',
            icon: '🚀',
        },
    ];

    return (
        <section className="section section-light" ref={ref}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2>Our <span className="text-gradient-primary">Process</span></h2>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '1rem auto' }}>
                        A proven 4-step approach to building websites that actually work
                    </p>
                </div>

                <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`card ${isVisible ? 'animate-fade-in-up' : ''}`}
                            style={{
                                animationDelay: `${index * 150}ms`,
                                position: 'relative',
                                overflow: 'visible',
                            }}
                        >
                            <div style={{
                                fontSize: '4rem',
                                position: 'absolute',
                                top: '-20px',
                                right: '20px',
                                opacity: 0.1,
                                fontWeight: 'bold',
                                color: 'var(--primary)',
                            }}>
                                {step.number}
                            </div>

                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                {step.icon}
                            </div>

                            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                                {step.title}
                            </h3>

                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
