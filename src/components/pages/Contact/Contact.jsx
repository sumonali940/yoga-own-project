import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h2>This is contact us page</h2>
            <button><NavLink to="/">Home</NavLink></button>
        </div>
    );
};

export default Contact;