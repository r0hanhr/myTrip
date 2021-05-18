import React from "react";

const LoginComponent = () => {
  return (
    <>
      <div className="text-center container col-md-4">
        <form className="form-signin">
          <img
            src="https://www.etraveli.com/wp-content/uploads/2017/05/logo-mytrip.png"
            alt="logo"
          />
          <h1 className="h3 font-weight-normal text-info mb-4">Please login</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control m-2"
            placeholder="Email address"
            required
            autofocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control m-2"
            placeholder="Password"
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </button>
          <div className="mt-4 text-center">
            <small>Don't have an acocunt?</small>
            <a href="./registration.html" className="small font-weight-bold">
              Register
            </a>
          </div>
          <p className="mt-4 mb-3 text-muted">© rohan223423@gmail.com</p>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
