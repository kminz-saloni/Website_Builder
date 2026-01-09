import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Logo from './assets/WC_logo.png';
import './App.css';

function App() {
  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        padding: '1.5rem 0',
        background: 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-3" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
            <img src={Logo} alt="WebCrest Studio" style={{ height: '50px', width: 'auto' }} />
            <span>WebCrest <span style={{ color: 'var(--primary)' }}>Studio</span></span>
          </div>
          <div className="flex gap-2">
            <a href="#services" className="btn" style={{ color: 'white' }}>Services</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Get Started</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Problem />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <footer style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="WebCrest Studio" style={{ height: '40px', opacity: 0.8 }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <a href="mailto:webcreststudios@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
            onMouseOut={(e) => e.target.style.color = 'inherit'}>
            webcreststudios@gmail.com
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} WebCrest Studio All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
