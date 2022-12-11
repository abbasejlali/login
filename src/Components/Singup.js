import React, { useState } from "react";

const Singup = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confingpass: "",
    isaccepted: false,
  });

  return (
    <div>
      <h1>Singup page</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="Password" />
        </div>
        <div>
          <label>Confing Password</label>
          <input type="password" name="confingpass" />
        </div>
        <div>
          <label>Accepted all anyone!?</label>
          <input type="checkbox" name="isaccepted" />
        </div>
      </form>
    </div>
  );
};

export default Singup;
