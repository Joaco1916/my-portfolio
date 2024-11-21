import React, { useState, useEffect } from 'react';
import '@/styles/Parallax.module.css'; // Import CSS file for styling

const Parallax = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container">
            <div
                className="parallax-bg"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            />
            <div className="parallax-content">
                <h1>Welcome to the Parallax Effect</h1>
                <p>This is a simple example of a parallax effect in React.js</p>
            </div>
        </div>
    );
};

export default Parallax;