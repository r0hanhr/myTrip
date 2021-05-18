import React from 'react'

const RegistrationComponent = () => {
    return (
      <>
        <div className="text-center container col-md-4">
          <div>
            <div className="mb-5 text-center">
              <h6 className="h3 mb-1 text-primary">Create your account</h6>
            </div>
            <span className="clearfix" />
            <form>
              <div className="form-group">
                <label className="form-control-label float-left text-info">
                  Name
                </label>
                <div className="input-group input-group-merge">
                  <input
                    type="text"
                    className="form-control form-control-prepend"
                    id="input-name"
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-control-label float-left text-info">
                  Email address
                </label>
                <div className="input-group input-group-merge">
                  <input
                    type="email"
                    className="form-control form-control-prepend"
                    id="input-email"
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-at-sign"
                      >
                        <circle cx={12} cy={12} r={4} />
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-control-label float-left text-info">
                  Mobile Number
                </label>
                <div className="input-group input-group-merge">
                  <input
                    type="email"
                    className="form-control form-control-prepend"
                    id="input-email"
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-phone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <label className="form-control-label text-info">
                      Password
                    </label>
                  </div>
                </div>
                <div className="input-group input-group-merge">
                  <input
                    type="password"
                    className="form-control form-control-prepend"
                    id="input-password"
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-key"
                      >
                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="d-flex align-items-center">
                  <label className="form-control-label mt-1 text-info">
                    Gender
                  </label>
                  <input type="radio" className="ml-4" name="gender" />
                  <p className="mb-1 text-info">Male</p>
                  <input type="radio" className="ml-4" name="gender" />
                  <p className="mb-1 text-info">Female</p>
                </div>
              </div>
              <div className="form-group mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <label className="form-control-label text-info">
                      Address
                    </label>
                  </div>
                </div>
                <div className="input-group input-group-merge">
                  <textarea
                    className="form-control"
                    name
                    id
                    cols={55}
                    rows={4}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="my-4">
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="check-terms"
                  />
                  <label className="custom-control-label" htmlFor="check-terms">
                    I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>
              <div className="mt-4">
                <button type="button" className="btn btn-block btn-primary">
                  Create my account
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <small>Already have an acocunt?</small>
              <a href="./login.html" className="small font-weight-bold">
                Login
              </a>
            </div>
          </div>
          <p className="mt-4 mb-3 text-muted">© rohan223423@gmail.com</p>
        </div>
      </>
    );
}

export default RegistrationComponent
