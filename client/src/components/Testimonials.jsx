
const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "CEO, Lumiere Fashion",
            content: "We were struggling to convert visitors into buyers. WebCrest didn't just redesign our site; they reimagined our entire customer journey. Sales are up 40% in just two months.",
            initial: "S"
        },
        {
            name: "David Chen",
            role: "Founder, Apex Digital",
            content: "Fast, professional, and incredibly talented. They understood our brand voice immediately and delivered a site that feels lightyears ahead of our competition.",
            initial: "D"
        },
        {
            name: "Marcus Thorne",
            role: "Director, Thorne Realty",
            content: "The attention to detail is unmatched. From the micro-animations to the SEO optimization, every part of the site feels premium. Highly recommended.",
            initial: "M"
        }
    ];

    return (
        <section id="testimonials" className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2>What Our <span className="text-gradient-primary">Clients Say</span></h2>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '1rem auto' }}>
                        Don't just take our word for it. Here's how we've helped businesses transform their online presence.
                    </p>
                </div>

                <div className="grid grid-3 gap-4">
                    {testimonials.map((t, index) => (
                        <div key={index} className="card" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                fontSize: '8rem',
                                opacity: 0.05,
                                fontFamily: 'serif',
                                color: 'var(--primary)',
                                pointerEvents: 'none'
                            }}>
                                "
                            </div>

                            <div style={{ flex: 1, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--text-light)' }}>
                                    "{t.content}"
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary), var(--primary-glow))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    color: 'white'
                                }}>
                                    {t.initial}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: 'white' }}>{t.name}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
