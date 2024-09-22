import React, { useState } from 'react';

const subTitle = 'Save The Day';
const title = (
  <h2 className='title'>
    Join on Day Long Free Workshop for <b>Advance <span>Mastering</span></b> on Sales
  </h2>
);
const desc = "Limited Time Offer ! Hurry Up";

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', number: '' });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful registration
    setIsRegistered(true);
  };

  return (
    <section className='register-section padding-tb pb-0'>
      <div className='container'>
        <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
          <div className='col'>
            <div className='section-header'>
              <span className='subtitle'>
                {subTitle}
              </span>

              {title}

              <p>{desc}</p>
            </div>
          </div>
          <div className='col'>
            <div className='section-wrapper'>
              <h4>Register Now</h4>

              {!isRegistered ? (
                <form className='register-form' onSubmit={handleSubmit}>
                  <input
                    type='text'
                    name='name'
                    placeholder='Username'
                    className='reg-input'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='reg-input'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='number'
                    name='number'
                    placeholder='Phone'
                    className='reg-input'
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                  <button type='submit' className='lab-btn'>
                    Register Now
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <h5>Registration Successful!</h5>
                  <p>Thank you for registering. We'll get in touch soon!</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;