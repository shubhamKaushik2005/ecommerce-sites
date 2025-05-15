import React, { useState } from 'react';
import './Login.css';
import Nav from '../components/Nav';

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
        <Nav/>
            <div className='newer'>
                <div>
                    {isLogin ? (
                        <div className="containerer" id="form-container">
                            <h2>Login</h2>
                            <form action="#" method="post">
                                <input type="email" placeholder="Email" required />
                                <input type="password" placeholder="Password" required />
                                <button className="btn" type="submit">Login</button>
                                <div className="switch">
                                    Don't have an account?{' '}
                                    <button type="button" className="link-button" onClick={toggleForm}>
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="containerer" id="signup-container">
                            <h2>Sign Up</h2>
                            <form action="#" method="post">
                                <input type="text" placeholder="Full Name" required />
                                <input type="email" placeholder="Email" required />
                                <input type="password" placeholder="Password" required />
                                <input type="password" placeholder="Confirm Password" required />
                                <button className="btn" type="submit">Sign Up</button>
                                <div className="switch">
                                    Already have an account?{' '}
                                    <button type="button" className="link-button" onClick={toggleForm}>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Login;
