// import { Form } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="flex flex-col items-center justify-center">
      {/* <label htmlFor="name">Name</label>
      <input type="text" placeholder="Enter your name" />
      <label htmlFor="email">Email</label>
      <input type="text" placeholder="Enter your email" />
      <button type="submit">Submit</button> */}
      <h1 className="my-4 mx-auto font-bold">Coming Soon...</h1>
      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800">
        <Link to="/">Go to Home Page</Link>
    </button>
    </form>
  )
}

export default Login;