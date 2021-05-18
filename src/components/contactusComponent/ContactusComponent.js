import React from "react";

const ContactusComponent = () => {
  return (
    <>
      <h3 className="text-center text-primary">Profile</h3>
      <div className="container col-3 shadow p-3 mb-5">
        <div className="user card">
          <img
            src="https://uselooper.com/assets/images/avatars/profile.jpg"
            className="card-img-top mt-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center text-info">Beni Arisandi</h5>
            <p className="card-text text-center text-info">9876543210</p>
            <p className="card-text text-center text-info">221B Baker Street</p>
          </div>
        </div>
      </div>
      <p className="mt-5 mb-3 text-muted text-center">
        © rohan223423@gmail.com
      </p>
    </>
  );
};

export default ContactusComponent;
