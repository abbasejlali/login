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
      </form>
    </div>
  );
};

export default Singup;
