const Problem = () => {
    return (
        <section className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="grid grid-2 gap-4 items-center">
                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>Is Your Website <span className="text-gradient-primary">Leaking Money?</span></h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Most business websites are pretty to look at but terrible at selling. They load slowly, look broken on mobile, and confuse visitors.
                        </p>
                        <p>
                            <strong>The Result?</strong> You pay for ads, people click, wait 5 seconds, and leave. We fix that.
                        </p>
                    </div>
                    <div className="grid grid-2 gap-4">
                        <div className="card text-center">
                            <h3 className="text-gradient-primary">3s+</h3>
                            <p>Load time kills 53% of visits</p>
                        </div>
                        <div className="card text-center">
                            <h3 className="text-gradient-primary">60%</h3>
                            <p>Traffic is mobile users</p>
                        </div>
                        <div className="card text-center">
                            <h3 className="text-gradient-primary">0%</h3>
                            <p>Leads from a broken form</p>
                        </div>
                        <div className="card text-center">
                            <h3 className="text-gradient-primary">ROI</h3>
                            <p>Maximize your ad spend</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
