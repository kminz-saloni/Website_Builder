import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const ContactPage = () => {
    const contactMethods = [
        {
            icon: '📧',
            title: 'Email Us',
            detail: 'webcreststudios@gmail.com',
            description: 'Send us an email anytime. We typically respond within 24 hours.',
        },
        {
            icon: '⏰',
            title: 'Response Time',
            detail: 'Within 24 hours',
            description: 'We aim to respond to all inquiries within one business day.',
        },
        {
            icon: '🌍',
            title: 'Remote First',
            detail: 'Work from anywhere',
            description: 'We work with clients globally through video calls and collaboration tools.',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in-down">
                        Get In <span className="text-gradient-primary">Touch</span>
                    </h1>
                    <p className="animate-fade-in-up delay-200" style={{
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '2rem auto',
                        color: 'var(--text-muted)'
                    }}>
                        Ready to transform your online presence? Let's talk about your project and how we can help you achieve your goals.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="section section-light">
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: '4rem' }}>
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="card text-center animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{method.icon}</div>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{method.title}</h3>
                                <div style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                    color: 'var(--text-main)',
                                }}>
                                    {method.detail}
                                </div>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                                    {method.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <Contact />

            {/* FAQ Section */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Common <span className="text-gradient-primary">Questions</span></h2>
                        <p style={{ color: 'var(--text-dim)', margin: '1rem auto' }}>
                            Quick answers to questions you may have
                        </p>
                    </div>

                    <FAQ questions={[
                        {
                            question: 'How quickly can you start my project?',
                            answer: 'We can typically start within 1-2 weeks of signing the contract. Rush projects may be accommodated depending on our current workload.',
                        },
                        {
                            question: 'Do you offer payment plans?',
                            answer: 'Yes! We offer flexible payment plans. Typically 50% upfront and 50% upon completion, but we can work out a schedule that fits your budget.',
                        },
                        {
                            question: 'What if I need changes after the site is live?',
                            answer: 'All projects include a support period (1-6 months depending on package). After that, we offer maintenance packages or hourly rates for updates.',
                        },
                        {
                            question: 'Can you help with content and copywriting?',
                            answer: 'Absolutely! We can help with content strategy, copywriting, and even provide professional photography recommendations if needed.',
                        },
                    ]} />
                </div>
            </section>

            {/* Process Overview */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>
                        What Happens <span className="text-gradient-primary">Next?</span>
                    </h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        <div className="card">
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>1️⃣</div>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Free Consultation</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                                15-minute call to discuss your needs
                            </p>
                        </div>
                        <div className="card">
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>2️⃣</div>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Custom Proposal</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                                Detailed plan and pricing for your project
                            </p>
                        </div>
                        <div className="card">
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>3️⃣</div>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Get Started</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                                Sign contract and we begin work
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
