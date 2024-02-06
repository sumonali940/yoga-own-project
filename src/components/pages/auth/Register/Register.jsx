import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../../Navbar/Navbar';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const { user, createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    // Form Handle Submit
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const url = form.get('url');
        const email = form.get('email');
        const password = form.get('password');

        // password validate
        if (password.length < 6) {
            toast.error('Password should be 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at latest one upper case characters.')
            return;
        }
        else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            toast.error('Your password should have one special characters')
            return;
        }


        // User created
        createUser(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser)
                toast.success('User Register Successfully!')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error.message)
            })
    }



    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='md:w-3/4 lg:w-1/2 mx-auto'>
                <h2 className="text-3xl my-10 text-center">Registration Form</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Full name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='url' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className='w-full text-center'>
                    <div className='join mx-auto py-3'>
                        <button onClick={handleGoogleLogin} className="btn join-item"><FaGoogle></FaGoogle>Google</button>
                        <button onClick={handleGithubLogin} className="btn join-item"><FaGithub></FaGithub>Github</button>
                        <button className="btn join-item"><FaFacebook></FaFacebook>Facebook</button>
                    </div>
                </div>
                <div className='text-center py-3 border rounded-lg mt-2'>
                    <p>Already have an account? <Link className='text-orange-600' to='/login'>Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;