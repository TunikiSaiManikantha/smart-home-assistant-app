import React, { useState } from 'react';
import { auth } from '../../Firebase/Firebase'; // Adjust the import path according to your project structure
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
//import "./SignInUp.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignUpIn = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Sign Up Successful');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Sign In Successful');
        navigate('/'); // Redirect to home after sign in
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="form-container">
        <form onSubmit={handleSubmit} className={isSignUp ? 'signup show' : 'signup'}>
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          {error && <p className="error">{error}</p>}
          <p onClick={handleToggle}>Already have an account? Sign In</p>
        </form>
        <form onSubmit={handleSubmit} className={isSignUp ? 'signin' : 'signin show'}>
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
          {error && <p className="error">{error}</p>}
          <p onClick={handleToggle}>Don't have an account? Sign Up</p>
        </form>
      </div>
    </div>
  );
};

export default SignUpIn;
