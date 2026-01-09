import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Problem />
            <Services />
            <Testimonials />
            <CTABanner />
        </>
    );
};

export default HomePage;
