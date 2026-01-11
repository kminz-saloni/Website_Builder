import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessType: '',
        website: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct mailto link
        const subject = encodeURIComponent(`Website Review Request from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Business Type: ${formData.businessType}\n` +
            `Website: ${formData.website || 'N/A'}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open default email client
        window.location.href = `mailto:webcreststudios@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="card">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2" style={{ textAlign: 'left' }}>
                <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--bg-dark)',
                            border: '1px solid #333',
                            color: 'white'
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--bg-dark)',
                            border: '1px solid #333',
                            color: 'white'
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="businessType" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>
                        Business type
                    </label>
                    <input
                        id="businessType"
                        name="businessType"
                        type="text"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        placeholder="e.g., Plumber, Dentist, Electrician"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--bg-dark)',
                            border: '1px solid #333',
                            color: 'white'
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="website" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>
                        Website (optional)
                    </label>
                    <input
                        id="website"
                        name="website"
                        type="text"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="yourwebsite.com"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--bg-dark)',
                            border: '1px solid #333',
                            color: 'white'
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>
                        Short message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us briefly what you're looking for..."
                        rows="4"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--bg-dark)',
                            border: '1px solid #333',
                            color: 'white',
                            resize: 'vertical',
                            fontFamily: 'inherit'
                        }}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                        marginTop: '1rem',
                        width: '100%',
                        fontSize: '1.05rem',
                        padding: '14px',
                    }}
                >
                    Request Free Website Review
                </button>
            </form>
        </div>
    );
};

export default Contact;
