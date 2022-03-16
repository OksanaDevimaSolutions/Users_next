import React from 'react';
// import useSwr from 'swr';
// import Link from 'next/link';
// import fetcher from '../src/utils/fetcher';

function Login() {
//   const { data, error } = useSwr('/api/login', fetcher);
//   if (error) return <div>Failed to load login form</div>;
//   if (!data) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <h2>Login form</h2>
        <form method="POST" action="/api/register">
          <label htmlFor="email">
            Login:
            <input type="email" name="email" id="email" required />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input type="password" name="password" id="password" required />
          </label>
          <br />
          <input type="submit" value="Login" name="submit" />
          <br />

        </form>
      </div>
    </div>
  );
}

export default Login;
