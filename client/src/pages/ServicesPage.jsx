import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';

const ServicesPage = () => {
    const [servicesRef, servicesVisible] = useScrollAnimation({ threshold: 0.2 });
    const [pricingRef, pricingVisible] = useScrollAnimation({ threshold: 0.3 });

    const services = [
        {
            icon: '🚀',
            title: 'New Site Build',
            description: 'A complete, custom-designed website built from scratch using the latest tech (React/Vite). Fast, secure, and SEO-ready.',
            features: [
                'Custom Design System',
                'Mobile Responsive Design',
                'SEO Foundation & Optimization',
                'Performance Optimization',
                'Analytics Integration',
                'Content Management',
            ],
            price: '$599',
        },
        {
            icon: '⚡',
            title: 'Performance Fix',
            description: 'Already have a site? We analyze it, strip out the bloat, optimize images, and make it fly. Better Google rankings guaranteed.',
            features: [
                'Speed Optimization',
                'Core Web Vitals Fix',
                'Image & Asset Optimization',
                'Code Cleanup & Refactoring',
                'Hosting Migration',
                'Performance Monitoring',
            ],
            price: '$129',
        },
        {
            icon: '📈',
            title: 'Conversion Optimization',
            description: 'Tweaking your layout, buttons, and copy to get more phone calls and form submissions from existing traffic.',
            features: [
                'UI/UX Improvements',
                'A/B Testing Strategy',
                'Call-to-Action Optimization',
                'Form Optimization',
                'User Flow Analysis',
                'Conversion Tracking',
            ],
            price: '$99',
        },
    ];

    const packages = [
        {
            name: 'Starter',
            price: '$599',
            description: 'Perfect for small businesses just getting started online',
            features: [
                '5-page website',
                'Mobile responsive',
                'Basic SEO setup',
                'Contact form',
                '1 year FREE hosting',
                'FREE domain name (non-premium & selected TLD)',
                '1 month support',
            ],
            highlighted: false,
        },
        {
            name: 'Professional',
            price: '$1,099',
            description: 'Ideal for growing businesses that need more features',
            features: [
                '10-page website',
                'Advanced SEO',
                'Blog/CMS integration',
                'Analytics dashboard',
                'E-commerce ready',
                '5 years FREE hosting',
                'FREE domain name (non-premium & selected TLD)',
                '3 months support',
            ],
            highlighted: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For businesses with complex requirements',
            features: [
                'Unlimited pages',
                'Custom functionality',
                'API integrations',
                'Advanced analytics',
                'Priority support',
                '6 months support',
            ],
            highlighted: false,
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in-down">
                        Our <span className="text-gradient-primary">Services</span>
                    </h1>
                    <p className="animate-fade-in-up delay-200" style={{
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '2rem auto',
                        color: 'var(--text-muted)'
                    }}>
                        Everything you need to dominate your niche online. From new builds to performance fixes, we've got you covered.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section section-light" ref={servicesRef}>
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`card ${servicesVisible ? 'animate-fade-in-up' : ''}`}
                                style={{ animationDelay: `${index * 150}ms`, height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{service.icon}</div>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{service.title}</h3>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', flex: 1 }}>
                                    {service.description}
                                </p>
                                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} style={{ color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                                            ✓ {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: 'var(--primary)',
                                    marginTop: 'auto',
                                }}>
                                    {service.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="section section-dark" ref={pricingRef}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2>Pricing <span className="text-gradient-primary">Packages</span></h2>
                        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '1rem auto' }}>
                            Choose the package that fits your needs, or let's create a custom solution
                        </p>
                    </div>

                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`card ${pricingVisible ? 'animate-fade-in-up' : ''}`}
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    border: pkg.highlighted ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.05)',
                                    background: pkg.highlighted ? 'rgba(96, 165, 250, 0.05)' : 'var(--bg-card)',
                                    position: 'relative',
                                    overflow: 'visible',
                                    marginTop: pkg.highlighted ? '20px' : '0',
                                }}
                            >
                                {pkg.highlighted && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-16px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        padding: '6px 20px',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '0.85rem',
                                        fontWeight: 'bold',
                                        zIndex: 10,
                                        boxShadow: '0 4px 10px rgba(96, 165, 250, 0.3)',
                                    }}>
                                        POPULAR
                                    </div>
                                )}

                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{pkg.name}</h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                    {pkg.price}
                                </div>
                                <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', minHeight: '3rem' }}>
                                    {pkg.description}
                                </p>

                                <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                                            ✓ {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none' }}>
                                    Start Your Project
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />

            {/* CTA Section */}
            <CTABanner
                title="Not Sure Which Service You Need?"
                subtitle="Book a free consultation and we'll create a custom plan tailored to your business goals."
                buttonText="Schedule Free Consultation"
            />
        </>
    );
};

export default ServicesPage;
