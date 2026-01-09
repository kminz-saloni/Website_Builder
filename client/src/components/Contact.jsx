import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct mailto link
        const subject = encodeURIComponent(`New Audit Request from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nWebsite: ${formData.website}\n\nI'm interested in a free site audit.`);

        // Open default email client
        window.location.href = `mailto:webcreststudios@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section" style={{ background: 'linear-gradient(to top, var(--bg-dark), var(--bg-card))' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <div className="card text-center">
                    <h2>Ready to <span className="text-gradient-primary">Scale?</span></h2>
                    <p style={{ margin: '1rem 0 2rem' }}>
                        Book a free 15-minute audit call. I'll look at your current site (or plans) and tell you exactly how to win.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2" style={{ textAlign: 'left' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>Your Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                style={{
                                    width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)',
                                    background: 'var(--bg-dark)', border: '1px solid #333', color: 'white'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>Your Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                style={{
                                    width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)',
                                    background: 'var(--bg-dark)', border: '1px solid #333', color: 'white'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="website" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>Website URL (If you have one)</label>
                            <input
                                id="website"
                                name="website"
                                type="text"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="example.com"
                                style={{
                                    width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)',
                                    background: 'var(--bg-dark)', border: '1px solid #333', color: 'white'
                                }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                            Get My Free Plan
                        </button>
                    </form>

                    <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Prefer email?</p>
                        <a href="mailto:webcreststudios@gmail.com" style={{ color: 'var(--primary)', fontWeight: 500, textDecoration: 'none' }}>
                            webcreststudios@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
