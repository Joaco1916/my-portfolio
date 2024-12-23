// components/FrostedGlass.js

import React from 'react';
import './../../../styles/FrostedGlass.module.css';

const FrostedGlass = ({ children }) => {
    return (
        <div className="frosted-glass">
            {children}
        </div>
    );
};

export default FrostedGlass;