import useScrollAnimation from '../hooks/useScrollAnimation';
import CaseStudyCard from '../components/CaseStudyCard';
import CTABanner from '../components/CTABanner';

const PortfolioPage = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const projects = [
        {
            title: 'E-Commerce Redesign',
            category: 'E-Commerce',
            description: 'Complete redesign and performance optimization for a fashion retailer, resulting in dramatically improved conversion rates.',
            icon: '🛍️',
            color1: '#60a5fa',
            color2: '#a78bfa',
            metrics: [
                { value: '+40%', label: 'Sales' },
                { value: '2.1s', label: 'Load Time' },
            ],
            technologies: ['React', 'Stripe', 'Node.js'],
        },
        {
            title: 'SaaS Landing Page',
            category: 'SaaS',
            description: 'High-converting landing page for a B2B software company with integrated analytics and A/B testing.',
            icon: '💼',
            color1: '#34d399',
            color2: '#60a5fa',
            metrics: [
                { value: '+125%', label: 'Signups' },
                { value: '8.2%', label: 'Conversion' },
            ],
            technologies: ['Next.js', 'Tailwind', 'Analytics'],
        },
        {
            title: 'Restaurant Website',
            category: 'Hospitality',
            description: 'Mobile-first website with online ordering integration and real-time table reservations.',
            icon: '🍽️',
            color1: '#f59e0b',
            color2: '#ef4444',
            metrics: [
                { value: '+200%', label: 'Online Orders' },
                { value: '95%', label: 'Mobile Traffic' },
            ],
            technologies: ['React', 'Firebase', 'Maps API'],
        },
        {
            title: 'Real Estate Platform',
            category: 'Real Estate',
            description: 'Property listing platform with advanced search, virtual tours, and lead capture forms.',
            icon: '🏠',
            color1: '#8b5cf6',
            color2: '#ec4899',
            metrics: [
                { value: '+85%', label: 'Leads' },
                { value: '4.5min', label: 'Avg. Session' },
            ],
            technologies: ['React', 'PostgreSQL', 'AWS'],
        },
        {
            title: 'Fitness Studio Site',
            category: 'Health & Fitness',
            description: 'Class booking system with member portal, payment processing, and automated email campaigns.',
            icon: '💪',
            color1: '#10b981',
            color2: '#3b82f6',
            metrics: [
                { value: '+150%', label: 'Bookings' },
                { value: '92%', label: 'Retention' },
            ],
            technologies: ['React', 'Stripe', 'SendGrid'],
        },
        {
            title: 'Professional Services',
            category: 'Consulting',
            description: 'Corporate website for a consulting firm with case studies, team profiles, and contact forms.',
            icon: '📊',
            color1: '#6366f1',
            color2: '#8b5cf6',
            metrics: [
                { value: '+65%', label: 'Inquiries' },
                { value: '1.8s', label: 'Load Time' },
            ],
            technologies: ['Vite', 'React', 'EmailJS'],
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in-down">
                        Our <span className="text-gradient-primary">Portfolio</span>
                    </h1>
                    <p className="animate-fade-in-up delay-200" style={{
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '2rem auto',
                        color: 'var(--text-muted)'
                    }}>
                        Real projects, real results. See how we've helped businesses transform their online presence and drive measurable growth.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section section-light" ref={ref}>
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={isVisible ? 'animate-fade-in-up' : ''}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CaseStudyCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>
                        What Our <span className="text-gradient-primary">Clients Say</span>
                    </h2>
                    <div className="card" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                        <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
                            "WebCrest Studio didn't just build us a website—they built us a revenue-generating machine.
                            The attention to detail, speed optimization, and conversion focus is unmatched. Best investment we've made."
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                            }}>
                                S
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 700 }}>Sarah Jenkins</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>CEO, Lumiere Fashion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTABanner
                title="Want Results Like These?"
                subtitle="Let's discuss your project and create a custom strategy to achieve your business goals."
                buttonText="Start Your Project"
            />
        </>
    );
};

export default PortfolioPage;
