import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Industries = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const industries = [
        {
            icon: '🚨',
            title: 'Emergency Plumbers',
            slug: 'emergency-plumbers',
            description: 'Get more emergency calls with a fast, mobile-optimized website that ranks locally.',
        },
        {
            icon: '🔑',
            title: 'Auto Locksmith',
            slug: 'auto-locksmith',
            description: 'Stand out from competitors with a professional site that converts urgent customers.',
        },
        {
            icon: '🦷',
            title: 'Dentist',
            slug: 'dentist',
            description: 'Attract new patients with a modern, trustworthy website and online booking.',
        },
        {
            icon: '🧹',
            title: 'House Cleaning',
            slug: 'house-cleaning',
            description: 'Showcase your services and get more bookings with an easy-to-use website.',
        },
        {
            icon: '⚡',
            title: 'Electrician',
            slug: 'electrician',
            description: 'Build trust and get more service calls with a professional online presence.',
        },
        {
            icon: '❄️',
            title: 'HVAC',
            slug: 'hvac',
            description: 'Generate leads year-round with a website optimized for heating and cooling services.',
        },
    ];

    return (
        <section id="industries" className="section" ref={ref}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2><span className="text-gradient-primary">Industries we work with</span></h2>
                    <p>Specialized web solutions for service-based businesses</p>
                </div>

                <div className="grid grid-3 gap-4">
                    {industries.map((industry, index) => (
                        <Link
                            key={index}
                            to={`/industries/${industry.slug}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div
                                className={`card ${isVisible ? 'animate-fade-in-up' : ''}`}
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s var(--ease)',
                                    textAlign: 'center',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px -20px rgba(96, 165, 250, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px -20px rgba(0, 0, 0, 0.5)';
                                }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem',
                                }}>
                                    {industry.icon}
                                </div>

                                <h3 style={{ marginBottom: '1rem' }}>{industry.title}</h3>

                                <p style={{ margin: '0 0 1.5rem 0', flex: 1 }}>
                                    {industry.description}
                                </p>

                                <div style={{
                                    marginTop: '1.5rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid rgba(255,255,255,0.1)',
                                    color: 'var(--primary)',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                }}>
                                    Learn More →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
