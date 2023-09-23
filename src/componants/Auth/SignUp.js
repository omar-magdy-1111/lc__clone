import React, { useEffect, useState } from 'react';
import '../../styleSheet/Auth_css/SignUP.css';
import { useDispatch } from 'react-redux';
import { signUP } from '../../rtk/auth/signupSlice';
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [ email, setemail ] = useState('');
  const [ password, setpassword ] = useState('');
  const [ phone, setphone ] = useState('');
  const [ cart, setcart ] = useState();
  const dispatch = useDispatch();
  const GO_TO = useNavigate();

  useEffect(() => {
    setcart(localStorage.getItem('favourites'));
  }, []);


  const handelcreation = (e) => {
    e.preventDefault();
    signUP({
      email: email,
      password: password,
      phone: phone,
      cart: cart
    })
    setemail("");
    setpassword("");
    setphone("");
    GO_TO('/LCstore/products');
  };


  return (
    <div className='SignUp'>
      <div className='card '>
        <div className='card-body'>
          <h3 >Sign Up</h3>
          <form className="row g-3" onSubmit={ handelcreation }>
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">Email</label>
              <input value={ email } onChange={ (e) => { setemail(e.target.value); } } type="email" className="form-control" id="email" placeholder="member" />
            </div>
            <div className="col-md-12">
              <label htmlFor="password" className="form-label">Password</label>
              <input value={ password } onChange={ (e) => { setpassword(e.target.value); } } type="password" className="form-control" id="password" placeholder="*********" />
            </div>
            <div className="col-12">
              <label htmlFor="phone" className="form-label">Address</label>
              <input value={ phone } onChange={ (e) => { setphone(e.target.value); } } type="text" className="form-control" id="phone" placeholder="0110 485 9246" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

