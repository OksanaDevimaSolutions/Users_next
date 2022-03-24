import React from "react";
// import useSwr from 'swr';
// import Link from 'next/link';
// import fetcher from '../src/utils/fetcher';

function Register() {
  // const { data, error } = useSwr('/api/register', fetcher);
  // if (error) return <div>Failed to load registry form</div>;
  // if (!data) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <h2>Registration form</h2>
        <form method="POST" action="/api/register">
          <label htmlFor="name">
            Name:
            <input type="text" name="name" id="name" />
          </label>
          <br />
          <label htmlFor="login">
            Login:
            <input type="text" name="login" id="login" required />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input type="password" name="password" id="password" required />
          </label>
          <br />
          <label htmlFor="age">
            Age:
            <input type="number" name="age" id="age" />
          </label>
          <br />
          <input type="submit" value="Register" name="submit" />
          <br />
        </form>
      </div>
    </div>
  );
}

export default Register;
