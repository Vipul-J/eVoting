import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo.png';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            toast.error('Username and password are required');
            setError('Username and password are required');
            return;
        }

        // Simulating authentication logic
        if (username === 'kohinoor' && password === 'dfordivine') {
            toast.success('Login successful!');
            onLogin();
        } else {
            toast.error('Invalid username or password');
            setError('Invalid username or password');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                        <h2 className="card-title text-center mt-4">E-Voting Portal</h2>
                             <h4 className="card-title text-center mb-4">Admin Login</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="text-center mt-4 mb-4">
                                    <button
                                        type="submit"
                                        className='btn btn-info text-white fw-bolder'
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            {error && <div className="alert alert-danger mt-3">{error}</div>} 
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Login;
