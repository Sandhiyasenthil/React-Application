import React from 'react'
import { useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({}); // State to store error messages

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Check if fields are empty
    
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
    
      axios.get("http://localhost:4200/users")
         .then((response) => {
         console.log(response.data);

          const userExists = response.data.some((user) => user.email===email && user.password === password);

      if (userExists) {
        
        alert("successfully logged in");

          setEmail("");
          setPassword("");
          navigate('/home')
      }
    })
    .catch((error) => {
      console.error("Error :", error);
      alert("An error occurred. Please try again later.");
    });
  }    
    
  };
  return (
  <div className='login-component'>
  
                
    <div className='login-form-container'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='login-remover'>
            
             <Link to='/home' ><i class="glyphicon glyphicon-remove"></i></Link>
        </div>
        <div className='login-header'>
              <h1>Login</h1>
        </div>
            
        
        
        
        <div className='login-form-inputs'>
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
        <div className='login-form-inputs'>
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
        <div className='login-submit'>
            <input type="submit" value="Submit" />
        </div>
        
       
      </form>
    </div>
    </div>
  )
}



