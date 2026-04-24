import React, { useState } from 'react';


function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');


  const checkStrength = (pwd) => {
    let score = 0;


    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;


    switch (score) {
      case 5:
        return 'Very Strong 💪';
      case 4:
        return 'Strong ✅';
      case 3:
        return 'Medium ⚠️';
      case 2:
        return 'Weak ❌';
      default:
        return 'Very Weak ❌';
    }
  };


  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(checkStrength(pwd));
  };


  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
      <h2>Password Strength Checker</h2>


      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />


      {password && (
        <p>
          Strength: <strong>{strength}</strong>
        </p>
      )}
    </div>
  );
}


export default PasswordStrengthChecker;


