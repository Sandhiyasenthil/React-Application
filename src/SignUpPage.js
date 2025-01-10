import React from 'react'
import { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({}); // State to store error messages

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Check if fields are empty
    if (!name.trim())
        { newErrors.name = "Name is required"};
    if (!email.trim())
        { newErrors.email = "Email is required"};
    if (!password.trim()) 
        {newErrors.password = "Password is required"};

    // Additional validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.(in|com)$/; // Regex for valid email
    if (email&&!emailPattern.test(email)) {
      newErrors.email = "Invalid email format";
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (password&&!passwordPattern.test(password)) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors); // Set the error messages
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert(`Form submitted successfully!
      Name: ${name}
      Email: ${email}`);
    }
  };
  return (
  <div className='singup-component'>
  
                
    <div className='signup-form-container'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='signup-remover'>
            
             <Link to='/home' ><i class="glyphicon glyphicon-remove"></i></Link>
        </div>
        <div className='signup-header'>
              <h1>Signup</h1>
        </div>
            
        
        
        <div className='form-inputs'>
          <label htmlFor="fullname">Enter your name:</label>
          <input
                type="text"
                id="fullname" 
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)} required
              />
              {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
           
        </div>
        <div className='form-inputs'>
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} required
              />
              {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div className='form-inputs'>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="Enter the password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
        </div>
        <div className='signup-submit'>
            <input type="submit" value="Submit" />
        </div>
        <div className='signup-login'>
          <p>if you already have an account?<Link to='/login' >Login</Link></p>
        </div>
       
      </form>
    </div>
    </div>
  )
}


