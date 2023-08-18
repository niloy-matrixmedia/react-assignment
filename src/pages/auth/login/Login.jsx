import { IMAGES } from '../../../constants'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Login = () => {

    const [username, setusername] = useState('');
    const [passShow, setPassShow] = useState(false)
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://demoyourprojects.com:5085/auth/signin', {
                username: username,
                password: password
            });
            
            // Assuming the response contains the token in an object like:
            // { access_token: 'YOUR_TOKEN' }
            const token = response.data.data.access_token;
            if (token) {
                // Set the token in the local storage
                localStorage.setItem('access_token', token);
                
                // Invoke your login function
                login();
    
                // Navigate to the dashboard
                navigate("/dashboard");
            } else {
                // Handle the case where the token might not be in the response
                console.warn("Token not found in response");
            }
        } catch (error) {
            console.log(error, "line22");
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={IMAGES.Socimo} alt="Socimo" width="30" height="30" />
                </a>
                <a className="dash" href="#">𝕊𝕠𝕔𝕚𝕞𝕠</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div>
                    <form className="d-flex">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </nav>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">username</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Enter Your username" value={username} onChange={(e) => setusername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form_input">
                                    <label className="label">Password</label>
                                    <div className="two">
                                        <input type={!passShow ? "password" : "text"} className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <div className='showpass' onClick={() => setPassShow(!passShow)}>
                                            {!passShow ? "Show" : "Hide"}
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                                <div>
                                    if have not any account? please<a href='/register'>Register</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login