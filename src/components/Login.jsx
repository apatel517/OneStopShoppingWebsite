import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';


const title = "Login";
const socialTitle = "Login with Social Media";
const btnText = "Login Now"
const socialList = [{ iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', },]

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((result) => {
            const user = result.user;
            alert("Login Successfull");
            navigate("/", { replace: true })
        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email and password")
        })

    }
    const handleRegister = () => {
           signUpWithGmail()
           .then((result) =>
           {
           navigate(form, { replace: true })
          // const user = result.user;
           
           }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email and password")
        })
    }
    return (
        <div>
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className='title'>{title}</h3>
                        <form className='account-form' onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="email" id='email' placeholder='Email Address *' name='email' required />
                            </div>
                            <div className="form-group">
                                <input type="password" id='password' placeholder='Password *' name='password' required />
                            </div>
                            {/* shwoing message*/}
                            <div>
                                {
                                    errorMessage && (
                                        <div className='error-message text-danger mb-1'>
                                            {
                                                errorMessage
                                            }
                                        </div>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                                    <div className="checkgroup">
                                        <input type="checkbox" name='remember' id='remember' />
                                        <label htmlFor='remember'>Remember Me</label>
                                    </div>
                                    <Link to="/forgetpass">Forget Password?</Link>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type='submit' className='d-block lab-btn'>
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>
                        {/*account btn*/}
                        <div className="account-bottom">
                            <span className='d-block cate pt-10'>
                                Don't Have an Account? <Link to="/sign-up">Sign Up</Link>
                            </span>
                            <span className="or">
                                <span className="or">
                                    Or
                                </span>
                            </span>

                            {/* social login */}
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                    <button className='github' onClick={handleRegister}><i className='icofont-github'></i></button>
                                </li>
                                <li>
                                    <a href='/' className='facebook'><i className='icofont-facebook'></i></a>
                                </li>
                                <li>
                                    <a href='/' className='twitter'><i className='icofont-twitter'></i></a>
                                </li>
                                <li>
                                    <a href='/' className='linkedin'><i className='icofont-linkedin'></i></a>
                                </li>
                                <li>
                                    <a href='/' className='instagram'><i className='icofont-instagram'></i></a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login