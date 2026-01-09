import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTypingEffect from '../hooks/useTypingEffect';

const Hero = () => {
  const [showTyping, setShowTyping] = useState(false);
  const typedText = useTypingEffect('Bad Websites', 80, showTyping);

  useEffect(() => {
    // Start typing animation after component mounts
    const timer = setTimeout(() => setShowTyping(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section section-dark" style={{
      paddingTop: '8rem',
      paddingBottom: '8rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Floating background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1), transparent)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} className="animate-float" />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1), transparent)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} className="animate-float delay-200" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="text-gradient animate-fade-in-down">
          Stop Losing Clients to <br />
          <span className="text-gradient-primary">
            {typedText}
            {showTyping && typedText.length < 12 && <span className="typing-cursor"></span>}
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200" style={{
          fontSize: '1.25rem',
          maxWidth: '600px',
          margin: '2rem auto',
          color: 'var(--text-muted)'
        }}>
          We audit, fix, and build high-performance websites that turn visitors into paying customers. Don't let a slow site kill your business.
        </p>

        <div className="flex justify-center gap-2 animate-fade-in-up delay-300">
          <Link to="/contact" className="btn btn-primary">Get Free Site Audit</Link>
          <Link to="/services" className="btn btn-outline">View Our Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

