import React, { useState } from 'react';
import UseAuth  from '../hooks/UseAuth';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); 
  const [isLogin, setIsLogin] = useState(true); 

  const {handleRegister, handleLogin} = UseAuth(); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email); 
    console.log('Password:', password);
    if (isLogin) {
      handleLogin({email, password});
    } else {
      handleRegister({name, email, password});
    }
  };

  


  return (
    <section className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-white w-full max-w-md shadow-md rounded-md p-8">
        <h1 className="text-text text-3xl font-semibold mb-6 text-center border-b-2 border-primary pb-2">
          WriteWise
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col text-md font-medium text-text">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
              placeholder="you@example.com"
            />
          </label>
          <label className="flex flex-col text-md font-medium text-text">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
              placeholder="Enter your password"
            />
          </label>

          {isLogin ? (
            <button
            type="submit"
            className="bg-primary text-white py-2 rounded hover:bg-primary-dark transition"
          >
            Login
          </button>
          ) : (
            <div className="flex flex-col gap-4">
              <label className="flex flex-col text-md font-medium text-text">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                placeholder="Enter your Name"
              />
            </label>
            <button
            type="submit"
            className="bg-primary text-white py-2 rounded hover:bg-primary-dark transition"
          >
            Sign Up
          </button>
            </div>
          )}
          <button onClick={() => setIsLogin(!isLogin)}>
            <span>
                Don't have an account? <a href="#" className="text-primary">Sign up</a>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
