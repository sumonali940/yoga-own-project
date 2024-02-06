import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-3xl">This page is found redirect in the home page.</h2>
            <button><NavLink to="/">Home</NavLink></button>
        </div>
    );
};

export default ErrorPage;