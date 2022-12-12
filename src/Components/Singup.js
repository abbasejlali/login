import React, { useEffect, useState } from "react";
import validation from "./validation";
const Singup = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confingpass: "",
    isaccepted: false,
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    setErrors(validation(data));
    console.log(data.isaccepted);
    // console.log(errors);
  }, [data]);

  const changesHandeler = (e) => {
    if (e.target.name === "isaccepted") {
      setdata({ ...data, [e.target.name]: e.target.checked });
    } else {
      setdata({ ...data, [e.target.name]: e.target.value });
    }
  };
  return (
    <div>
      <h1>Singup page</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changesHandeler}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changesHandeler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changesHandeler}
          />
        </div>
        <div>
          <label>Confing Password</label>
          <input
            type="password"
            name="confingpass"
            value={data.confingpass}
            onChange={changesHandeler}
          />
        </div>
        <div>
          <label>Accepted all anyone!?</label>
          <input
            type="checkbox"
            name="isaccepted"
            value={data.isaccepted}
            onChange={changesHandeler}
          />
        </div>
      </form>
    </div>
  );
};

export default Singup;
