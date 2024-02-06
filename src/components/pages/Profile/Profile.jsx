import React, { useContext } from 'react';
import Navbar from '../../Navbar/Navbar';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Profile = () => {
    const { loading } = useContext(AuthContext);
    
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is my profile page</h2>
        </div>
    );
};

export default Profile;