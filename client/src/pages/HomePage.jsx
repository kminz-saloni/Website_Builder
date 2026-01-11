import Hero from '../components/Hero';
import Problem from '../components/Problem';
import WhatWeDo from '../components/WhatWeDo';
import Industries from '../components/Industries';
import HowWeWork from '../components/HowWeWork';
import WhoThisIsFor from '../components/WhoThisIsFor';
import CTABanner from '../components/CTABanner';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Problem />
            <WhatWeDo />
            <Industries />
            <HowWeWork />
            <WhoThisIsFor />
            <CTABanner />
        </>
    );
};

export default HomePage;
