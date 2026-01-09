import useScrollAnimation from '../hooks/useScrollAnimation';
import useCountUp from '../hooks/useCountUp';

const Problem = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

    return (
        <section className="section section-light" ref={ref}>
            <div className="container">
                <div className="grid grid-2 gap-4 items-center">
                    <div className={isVisible ? 'animate-fade-in-up' : ''}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Is Your Website <span className="text-gradient-primary">Leaking Money?</span></h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Most business websites are pretty to look at but terrible at selling. They load slowly, look broken on mobile, and confuse visitors.
                        </p>
                        <p>
                            <strong>The Result?</strong> You pay for ads, people click, wait 5 seconds, and leave. We fix that.
                        </p>
                    </div>
                    <div className="grid grid-2 gap-4">
                        <StatCard value={53} suffix="%" label="Load time kills visits" isVisible={isVisible} delay={0} />
                        <StatCard value={60} suffix="%" label="Traffic is mobile users" isVisible={isVisible} delay={100} />
                        <StatCard value={0} suffix="%" label="Leads from broken form" isVisible={isVisible} delay={200} />
                        <div className={`card text-center ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '300ms' }}>
                            <h3 className="text-gradient-primary">ROI</h3>
                            <p>Maximize your ad spend</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ value, suffix, label, isVisible, delay }) => {
    const count = useCountUp(value, 2000, isVisible);

    return (
        <div className={`card text-center ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${delay}ms` }}>
            <h3 className="text-gradient-primary">{count}{suffix}</h3>
            <p>{label}</p>
        </div>
    );
};

export default Problem;

