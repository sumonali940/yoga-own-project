import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>This is About Us page</h2>
            <button><NavLink to="/">Home</NavLink></button>
        </div>
    );
};

export default About;