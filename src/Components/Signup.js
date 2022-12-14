import React, { useEffect, useState } from "react";
import validation from "./Validation.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Signup.module.css";
const Signup = () => {
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
    // console.log(Object.keys(errors));
  }, [data]);

  const changesHandeler = (e) => {
    if (e.target.name === "isaccepted") {
      setdata({ ...data, [e.target.name]: e.target.checked });
    } else {
      setdata({ ...data, [e.target.name]: e.target.value });
    }
  };

  const [ShowFocus, setShowFocus] = useState({});
  const focusHandeler = (e) => {
    setShowFocus({ ...ShowFocus, [e.target.name]: true });
    console.log(ShowFocus);
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify1();
      //   console.log(data);
    } else {
      notify2();
      setShowFocus({
        name: true,
        email: true,
        password: true,
        confingpass: true,
        isaccepted: true,
      });
    }
  };

  const notify1 = () => toast.success("excellent");
  const notify2 = () => toast.error("ooooppps!!");
  return (
    <div className={styles.container}>
      <h1>Signup</h1>
      <form onSubmit={submitHandeler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changesHandeler}
            onFocus={focusHandeler}
          />
          {errors.name && ShowFocus.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changesHandeler}
            onFocus={focusHandeler}
          />
          {errors.email && ShowFocus.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changesHandeler}
            onFocus={focusHandeler}
          />
          {errors.password && ShowFocus.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div>
          <label>Confing Password</label>
          <input
            type="password"
            name="confingpass"
            value={data.confingpass}
            onChange={changesHandeler}
            onFocus={focusHandeler}
          />
          {errors.confingpass && ShowFocus.confingpass && (
            <span>{errors.confingpass}</span>
          )}
        </div>
        <div>
          <label>Accepted all anyone!?</label>
          <input
            type="checkbox"
            name="isaccepted"
            value={data.isaccepted}
            onChange={changesHandeler}
            onFocus={focusHandeler}
          />
          {errors.isaccepted && ShowFocus.isaccepted && (
            <span>{errors.isaccepted}</span>
          )}
        </div>
        <div>
          <a href="#">login</a>
          <button type="submit">Signup</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
