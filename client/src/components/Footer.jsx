import { Link } from 'react-router-dom';
import Logo from '../assets/WC_logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: 'About Us', path: '/about' },
            { label: 'Portfolio', path: '/portfolio' },
            { label: 'Services', path: '/services' },
        ],
        services: [
            { label: 'New Site Build', path: '/services#new-build' },
            { label: 'Performance Fix', path: '/services#performance' },
            { label: 'Conversion Optimization', path: '/services#conversion' },
        ],
        contact: [
            { label: 'Get in Touch', path: '/contact' },
            { label: 'webcreststudios@gmail.com', href: 'mailto:webcreststudios@gmail.com' },
        ],
    };

    return (
        <footer style={{
            background: 'var(--bg-card)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '4rem 0 2rem',
        }}>
            <div className="container">
                {/* Main Footer Content */}
                <div className="grid gap-4" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    marginBottom: '3rem',
                }}>
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2" style={{ marginBottom: '1rem' }}>
                            <img src={Logo} alt="WebCrest Studio" style={{ height: '40px', opacity: 0.9 }} />
                            <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>
                                WebCrest <span style={{ color: 'var(--primary)' }}>Studio</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Building high-performance websites that turn visitors into customers.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Company</h4>
                        <div className="flex flex-col gap-1">
                            {footerLinks.company.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    style={{
                                        color: 'var(--text-dim)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-dim)'}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Services</h4>
                        <div className="flex flex-col gap-1">
                            {footerLinks.services.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    style={{
                                        color: 'var(--text-dim)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-dim)'}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Links */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Contact</h4>
                        <div className="flex flex-col gap-1">
                            {footerLinks.contact.map((link, index) => (
                                link.href ? (
                                    <a
                                        key={index}
                                        href={link.href}
                                        style={{
                                            color: 'var(--text-dim)',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                                        onMouseOut={(e) => e.target.style.color = 'var(--text-dim)'}
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={index}
                                        to={link.path}
                                        style={{
                                            color: 'var(--text-dim)',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                                        onMouseOut={(e) => e.target.style.color = 'var(--text-dim)'}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    textAlign: 'center',
                    color: 'var(--text-dim)',
                    fontSize: '0.9rem',
                }}>
                    <p>&copy; {currentYear} WebCrest Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
