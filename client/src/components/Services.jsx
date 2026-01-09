import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const services = [
        {
            icon: '🚀',
            title: 'New Site Build',
            price: 'From $3,000',
            description: 'A complete, custom-designed website built from scratch using the latest tech (React/Vite). Fast, secure, and SEO-ready.',
            features: [
                'Custom Design System',
                'Mobile Responsive',
                'SEO Foundation',
            ],
        },
        {
            icon: '⚡',
            title: 'Performance Fix',
            price: 'From $1,500',
            description: 'Already have a site? We analyze it, strip out the bloat, optimize images, and make it fly. Better Google rankings guaranteed.',
            features: [
                'Speed Optimization',
                'Core Web Vitals Fix',
                'Hosting Migration',
            ],
        },
        {
            icon: '📈',
            title: 'Conversion Optimization',
            price: 'From $2,000',
            description: 'Tweaking your layout, buttons, and copy to get more phone calls and form submissions from existing traffic.',
            features: [
                'UI/UX Improvements',
                'A/B Testing Ideas',
                'Call-to-Action Strategy',
            ],
        },
    ];

    return (
        <section id="services" className="section section-dark" ref={ref}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2><span className="text-gradient-primary">Pricing</span></h2>
                    <p>Transparent pricing for professional web solutions</p>
                </div>

                <div className="grid grid-3 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`card ${isVisible ? 'animate-fade-in-up' : ''}`}
                            style={{
                                animationDelay: `${index * 150}ms`,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <h3>{service.icon} {service.title}</h3>

                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: 'var(--primary)',
                                margin: '1rem 0',
                            }}>
                                {service.price}
                            </div>

                            <p style={{ margin: '0 0 1.5rem 0', flex: 1 }}>
                                {service.description}
                            </p>

                            <ul style={{ listStyle: 'none', color: 'var(--text-dim)' }}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>✓ {feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <Link to="/services" className="btn btn-primary">
                        View All Services & Pricing
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;

