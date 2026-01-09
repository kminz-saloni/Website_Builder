import { useEffect, useState } from 'react';

/**
 * Custom hook for typewriter/typing effect
 * @param {string} text - Text to type out
 * @param {number} speed - Typing speed in milliseconds per character
 * @param {boolean} start - Whether to start the animation
 * @returns {string} Current typed text
 */
const useTypingEffect = (text, speed = 100, start = true) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!start) {
            setDisplayedText('');
            setCurrentIndex(0);
            return;
        }

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed, start]);

    return displayedText;
};

export default useTypingEffect;
