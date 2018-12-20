import React from 'react';

const Icon = ({ large, text }) => {
    return (
        <div className="nav__icon-container">
            <div className={`sq-icon ${large ? 'sq-icon--lg' : ''}`}>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Icon;
