import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/WC_logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu on route change
        setIsMenuOpen(false);
        // Scroll to top on route change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1.5rem 0',
            background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 100,
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            transition: 'all 0.3s var(--ease)',
            boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        }}>
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2" style={{
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                }}>
                    <img src={Logo} alt="WebCrest Studio" style={{ height: '50px', width: 'auto' }} />
                    <span>WebCrest <span style={{ color: 'var(--primary)' }}>Studio</span></span>
                </Link>

                {/* Desktop Navigation */}
                <div className="flex gap-2" style={{ display: window.innerWidth > 768 ? 'flex' : 'none' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="btn"
                            style={{
                                color: location.pathname === link.path ? 'var(--primary)' : 'white',
                                background: location.pathname === link.path ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                                border: location.pathname === link.path ? '1px solid rgba(96, 165, 250, 0.3)' : '1px solid transparent',
                                padding: '8px 16px',
                                fontSize: '0.9rem',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: window.innerWidth <= 768 ? 'block' : 'none',
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: '0.5rem',
                    }}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu-enter" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(15, 23, 42, 0.98)',
                    backdropFilter: 'blur(10px)',
                    padding: '1rem',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="btn"
                                style={{
                                    color: location.pathname === link.path ? 'var(--primary)' : 'white',
                                    background: location.pathname === link.path ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                                    border: location.pathname === link.path ? '1px solid rgba(96, 165, 250, 0.3)' : '1px solid transparent',
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
