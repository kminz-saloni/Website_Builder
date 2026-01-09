import { Link } from 'react-router-dom';

const CTABanner = ({
    title = "Ready to Transform Your Online Presence?",
    subtitle = "Stop losing customers to slow, broken websites. Let's build something that actually converts.",
    buttonText = "Start Your Project",
    buttonLink = "/contact"
}) => {
    return (
        <section className="section" style={{
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(167, 139, 250, 0.2))',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Animated background elements */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15), transparent)',
                borderRadius: '50%',
                filter: 'blur(60px)',
            }} className="animate-float" />

            <div style={{
                position: 'absolute',
                bottom: '-50%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent)',
                borderRadius: '50%',
                filter: 'blur(60px)',
            }} className="animate-float" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <h2 className="animate-fade-in-up" style={{ marginBottom: '1rem' }}>
                        {title}
                    </h2>
                    <p className="animate-fade-in-up delay-100" style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted)',
                        marginBottom: '2rem'
                    }}>
                        {subtitle}
                    </p>
                    <Link
                        to={buttonLink}
                        className="btn btn-primary btn-pulse animate-fade-in-up delay-200"
                        style={{
                            fontSize: '1.1rem',
                            padding: '16px 32px',
                        }}
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
