import useScrollAnimation from '../hooks/useScrollAnimation';
import Stats from '../components/Stats';
import Process from '../components/Process';
import CTABanner from '../components/CTABanner';

const AboutPage = () => {
    const [missionRef, missionVisible] = useScrollAnimation({ threshold: 0.3 });
    const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.2 });

    const values = [
        {
            icon: '🎯',
            title: 'Results-Driven',
            description: 'We measure success by your ROI, not just pretty designs. Every decision is backed by data and conversion optimization.',
        },
        {
            icon: '⚡',
            title: 'Speed Obsessed',
            description: 'Fast websites rank higher and convert better. We optimize every millisecond to give you a competitive edge.',
        },
        {
            icon: '🤝',
            title: 'Transparent Process',
            description: 'No black boxes. You\'ll know exactly what we\'re doing, why we\'re doing it, and what results to expect.',
        },
        {
            icon: '🚀',
            title: 'Future-Proof Tech',
            description: 'We build with modern, maintainable code that scales with your business. No outdated WordPress plugins here.',
        },
        {
            icon: '💡',
            title: 'Strategic Thinking',
            description: 'We don\'t just code—we solve business problems. Every feature serves a purpose in your growth strategy.',
        },
        {
            icon: '🎨',
            title: 'Design Excellence',
            description: 'Beautiful interfaces that users love, backed by UX research and conversion best practices.',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in-down">
                        We Build Websites That <span className="text-gradient-primary">Actually Work</span>
                    </h1>
                    <p className="animate-fade-in-up delay-200" style={{
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '2rem auto',
                        color: 'var(--text-muted)'
                    }}>
                        WebCrest Studio is a team of developers and designers obsessed with building high-performance websites that drive real business results.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section section-light" ref={missionRef}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className={`text-center ${missionVisible ? 'animate-fade-in-up' : ''}`}>
                        <h2 style={{ marginBottom: '2rem' }}>Our <span className="text-gradient-primary">Mission</span></h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                            Too many businesses are held back by slow, outdated websites that cost them thousands in lost revenue every month.
                            We're here to change that. Our mission is to empower businesses with modern, lightning-fast websites that turn
                            visitors into customers and help you dominate your market online.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section section-dark" ref={valuesRef}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2>Our <span className="text-gradient-primary">Values</span></h2>
                        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '1rem auto' }}>
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`card ${valuesVisible ? 'animate-fade-in-up' : ''}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{value.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <Process />

            {/* Stats Section */}
            <Stats />

            {/* CTA Section */}
            <CTABanner
                title="Ready to Work Together?"
                subtitle="Let's build something amazing that drives real results for your business."
                buttonText="Start Your Project"
            />
        </>
    );
};

export default AboutPage;
