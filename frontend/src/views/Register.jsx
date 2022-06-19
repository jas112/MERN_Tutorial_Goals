import React from 'react';
import {useState, useEffect} from 'react';
import {FaUser} from 'react-icons/fa';

function Register() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const {firstName, lastName, email, password, passwordConfirm} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.firstName]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account.</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className='form-control' 
              id='firstName' 
              name='firstName' 
              value={firstName} 
              placeholder='Enter your first name.' 
              onChange={onChange} />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className='form-control' 
              id='lastName' name='lastName' 
              value={lastName} 
              placeholder='Enter your last name.' 
              onChange={onChange} />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className='form-control' 
              id='email' name='email' 
              value={email} 
              placeholder='Enter your email.' 
              onChange={onChange} />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className='form-control' 
              id='password' 
              name='password' 
              value={password} 
              placeholder='Enter your password.' 
              onChange={onChange} 
            />
          </div>
          <div className="form-group">
            <input type="password" 
              className='form-control' 
              id='passwordConfirm' 
              name='passwordConfirm' 
              value={passwordConfirm} 
              placeholder='Confirm your password.' 
              onChange={onChange} 
            />
          </div>
          <div className="form-group">
           <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register