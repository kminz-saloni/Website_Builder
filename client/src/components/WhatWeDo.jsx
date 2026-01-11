import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const WhatWeDo = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const services = [
        {
            icon: '🏗️',
            title: 'Website Builds',
            description: 'Clean, professional websites built for clarity, speed, and trust.',
        },
        {
            icon: '⚡',
            title: 'Website Fixes',
            description: 'Speed, structure, and reliability improvements for existing sites.',
        },
        {
            icon: '📈',
            title: 'Conversion Improvements',
            description: 'Layout and messaging changes that guide visitors to take action.',
        },
    ];

    return (
        <section className="section section-dark" ref={ref}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 className={isVisible ? 'animate-fade-in-up' : ''}>
                        How WebCrest <span className="text-gradient-primary">helps</span>
                    </h2>
                </div>

                <div className="grid grid-3 gap-4" style={{ marginBottom: '3rem' }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`card text-center ${isVisible ? 'animate-fade-in-up' : ''}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                            <h3 style={{
                                marginBottom: '1rem',
                                color: 'var(--primary)',
                                fontSize: '1.3rem',
                            }}>
                                {service.title}
                            </h3>
                            <p style={{
                                color: 'var(--text-muted)',
                                lineHeight: '1.7',
                            }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-muted)',
                        fontStyle: 'italic',
                    }}>
                        Everything we do focuses on real business outcomes, not unnecessary features.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
