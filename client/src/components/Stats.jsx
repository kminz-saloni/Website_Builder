import useScrollAnimation from '../hooks/useScrollAnimation';
import useCountUp from '../hooks/useCountUp';

const Stats = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

    const stats = [
        { value: 150, suffix: '+', label: 'Projects Completed' },
        { value: 98, suffix: '%', label: 'Client Satisfaction' },
        { value: 3, suffix: 'x', label: 'Faster Load Times' },
        { value: 5, suffix: '+', label: 'Years Experience' },
    ];

    return (
        <section className="section section-accent" ref={ref}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2>Proven <span className="text-gradient-primary">Results</span></h2>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '1rem auto' }}>
                        Numbers that speak louder than words
                    </p>
                </div>

                <div className="grid grid-2 gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} isVisible={isVisible} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ stat, isVisible, delay }) => {
    const count = useCountUp(stat.value, 2000, isVisible);

    return (
        <div
            className={`card text-center ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{
                animationDelay: `${delay}ms`,
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(10px)',
            }}
        >
            <h3 className="text-gradient-primary" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                {count}{stat.suffix}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{stat.label}</p>
        </div>
    );
};

export default Stats;
