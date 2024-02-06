import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../../Navbar/Navbar';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // Login User
        signIn(email, password)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                navigate('/');
                toast.success('Login successfully!');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            });
    };


    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='md:w-3/4 lg:w-1/2 mx-auto'>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin}>
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='text-center py-3 border rounded-lg mt-2'>
                    <p>Didn't have an account? <Link className='text-orange' to='/register'>Register</Link></p>
                </div>
            </div>
            {/* Add ToastContainer to render notifications */}
        </div>
    );
};

export default Login;
