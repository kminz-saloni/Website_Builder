import { useState } from 'react';

const FAQ = ({ questions }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const defaultQuestions = [
        {
            question: 'How long does it take to build a website?',
            answer: 'Typically 2-4 weeks for a standard business website, depending on complexity and content. We\'ll give you an exact timeline after our discovery call.',
        },
        {
            question: 'What do you need from me to get started?',
            answer: 'Just your business goals, brand assets (logo, colors), and any content you want on the site. We\'ll guide you through everything else.',
        },
        {
            question: 'Do you offer ongoing support after launch?',
            answer: 'Absolutely! We offer maintenance packages for updates, security, and performance monitoring. Or we can train you to manage it yourself.',
        },
        {
            question: 'How much does a website cost?',
            answer: 'Projects typically range from $2,000-$10,000 depending on features and complexity. Book a free audit call for a custom quote.',
        },
        {
            question: 'Will my website be mobile-friendly?',
            answer: 'Yes, 100%. All our sites are fully responsive and tested on all devices. With 60%+ of traffic being mobile, this is non-negotiable.',
        },
        {
            question: 'Can you help with SEO and Google rankings?',
            answer: 'Yes! We build SEO-optimized sites from day one with proper meta tags, fast loading, and clean code. We can also help with ongoing SEO strategy.',
        },
    ];

    const faqItems = questions || defaultQuestions;

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section section-dark">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2>Frequently Asked <span className="text-gradient-primary">Questions</span></h2>
                    <p style={{ color: 'var(--text-dim)', margin: '1rem auto' }}>
                        Got questions? We've got answers.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                cursor: 'pointer',
                                transition: 'all 0.3s var(--ease)',
                            }}
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    marginBottom: openIndex === index ? '1rem' : 0,
                                    transition: 'margin 0.3s var(--ease)',
                                }}>
                                    {item.question}
                                </h3>
                                <span style={{
                                    fontSize: '1.5rem',
                                    color: 'var(--primary)',
                                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                                    transition: 'transform 0.3s var(--ease)',
                                    flexShrink: 0,
                                    marginLeft: '1rem',
                                }}>
                                    +
                                </span>
                            </div>

                            <div style={{
                                maxHeight: openIndex === index ? '500px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s var(--ease)',
                            }}>
                                <p style={{
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.6,
                                    paddingTop: openIndex === index ? '0.5rem' : 0,
                                }}>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
