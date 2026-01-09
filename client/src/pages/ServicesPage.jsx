import useScrollAnimation from '../hooks/useScrollAnimation';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';

const ServicesPage = () => {
    const [pricingRef, pricingVisible] = useScrollAnimation({ threshold: 0.3 });

    const packages = [
        {
            name: 'Starter',
            price: '$2,500',
            description: 'Perfect for small businesses just getting started online',
            features: [
                '5-page website',
                'Mobile responsive',
                'Basic SEO setup',
                'Contact form',
                '1 month support',
            ],
            highlighted: false,
        },
        {
            name: 'Professional',
            price: '$5,000',
            description: 'Ideal for growing businesses that need more features',
            features: [
                '10-page website',
                'Advanced SEO',
                'Blog/CMS integration',
                'Analytics dashboard',
                'E-commerce ready',
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
                        Choose the perfect package for your business needs. Transparent pricing, no hidden fees.
                    </p>
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
                                }}
                            >
                                {pkg.highlighted && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        padding: '4px 16px',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '0.85rem',
                                        fontWeight: 'bold',
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

                                <button className="btn btn-primary" style={{ width: '100%' }}>
                                    Get Started
                                </button>
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
