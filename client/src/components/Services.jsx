import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="services" className="section section-dark" ref={ref}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2>Our <span className="text-gradient-primary">Expert Solutions</span></h2>
                    <p>Everything you need to dominate your niche online.</p>
                </div>

                <div className="grid grid-3 gap-4">
                    {/* Service 1 */}
                    <div className={`card ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0ms' }}>
                        <h3>🚀 New Site Build</h3>
                        <p style={{ margin: '1rem 0' }}>
                            A complete, custom-designed website built from scratch using the latest tech (React/Vite). Fast, secure, and SEO-ready.
                        </p>
                        <ul style={{ listStyle: 'none', color: 'var(--text-dim)' }}>
                            <li>✓ Custom Design System</li>
                            <li>✓ Mobile Responsive</li>
                            <li>✓ SEO Foundation</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className={`card ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '150ms' }}>
                        <h3>⚡ Performance Fix</h3>
                        <p style={{ margin: '1rem 0' }}>
                            Already have a site? We analyze it, strip out the bloat, optimize images, and make it fly. Better Google rankings guaranteed.
                        </p>
                        <ul style={{ listStyle: 'none', color: 'var(--text-dim)' }}>
                            <li>✓ Speed Optimization</li>
                            <li>✓ Core Web Vitals Fix</li>
                            <li>✓ Hosting Migration</li>
                        </ul>
                    </div>

                    {/* Service 3 */}
                    <div className={`card ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '300ms' }}>
                        <h3>📈 Conversion Optimization</h3>
                        <p style={{ margin: '1rem 0' }}>
                            Tweaking your layout, buttons, and copy to get more phone calls and form submissions from existing traffic.
                        </p>
                        <ul style={{ listStyle: 'none', color: 'var(--text-dim)' }}>
                            <li>✓ UI/UX Improvements</li>
                            <li>✓ A/B Testing Ideas</li>
                            <li>✓ Call-to-Action Strategy</li>
                        </ul>
                    </div>
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

