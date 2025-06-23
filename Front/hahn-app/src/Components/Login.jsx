import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8085/auth/login', {
        username: email,
        password: password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LQ9-TdbIDvmPwcQIUn_iB5aqW8LZ5sE7Jw&s"
                style={{ width: '185px' }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are Hahn</h4>
            </div>

            <p>Please login to your account</p>

            <form onSubmit={handleLogin}>
              <MDBInput
                wrapperClass='mb-4'
                label='Username'
                id='form1'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='form2'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p style={{ color: 'red' }}>{error}</p>}

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2" type="submit">Sign in</MDBBtn>
                <a className="text-muted" href="#!">Forgot password?</a>
              </div>
            </form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Register
              </MDBBtn>
            </div>

          </div>
        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">Hahn software...</p>
            </div>
          </div>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
