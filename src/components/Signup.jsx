import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const title = "Register Now";
const socialTitle = "Login with Social Media";
const btnText = "Create Account"
const socialList = [{ iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', },]


const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, creatUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"
    const handleRegister = (event) => {
        signUpWithGmail()
            .then((result) => {
                navigate(form, { replace: ture })
                // const user = result.user;

            }).catch((error) => {
                const errorMsg = error.message;
                setErrorMessage("Please provide valid email and password")
            })
    }


    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;
        if (password !== confirmpassword) {
            setErrorMessage("Password doesn't match ! Please , provide a correct password")
        }
        else {
            setErrorMessage("");
            creatUser( email , password).then((userCredential) => {
                const user = userCredential.user;
                alert("Account created succesfully!!")
                navigate(from, { replace: true })
            }).catch((error) => {
                console.log(error.message);
                alert(`${error.message}`)
            })
        }


    }
    return (
        <div className="login-section padding-tb section-bg">
            <div className="container">
                <div className="account-wrapper">
                    <h3 className='title'>{title}</h3>
                    <form className='account-form' onSubmit={handleSignup}>
                        <div className="form-group">
                            <input type="text" id='username' placeholder='Full Name *' name='username' required />
                        </div>
                        <div className="form-group">
                            <input type="email" id='email' placeholder='Email Address *' name='email' required />
                        </div>
                        <div className="form-group">
                            <input type="password" id='password' placeholder='Password *' name='password' required />
                        </div>
                        <div className="form-group">
                            <input type="password" id='confirmpassword' placeholder='Confirm Password *' name='confirmpassword' required />
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
                            <button type='submit' className='d-block lab-btn'>
                                <span>{btnText}</span>
                            </button>
                        </div>
                    </form>
                    {/*account btn*/}
                    <div className="account-bottom">
                        <span className='d-block cate pt-10'>
                            Don't Have an Account? <Link to="/login">Login</Link>
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
    )
}

export default Signup