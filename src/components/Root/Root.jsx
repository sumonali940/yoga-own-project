import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;