import React, { useState } from "react";
import styles from "./Signup.module.css";

const SignUp = () => {
  const [confirmPassword, setConfirmPassword] = useState("");

  const [UserData, setUserData] = useState({
    name: "",
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  const [theUserNameIsValid, setTheUserNameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const changeHandler = (event) => {
    if (event.target.name === "confirmPassword") {
      setConfirmPassword(event.target.value);
    } else {
      setUserData({ ...UserData, [event.target.name]: event.target.value });
    }
  };

  const validateUserName = (userName) => {
    const regex = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;
    return regex.test(userName);
  };

  const validatePassword = (password, confirmPassword) => {
    // Regular expression to check if the password meets the requirements
    if (password === confirmPassword) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      return regex.test(password);
    } else {
      return false;
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    setIsTouched(true);
    // console.log(Password);
    const userName = UserData.userName;
    const userNameIsValid = validateUserName(userName);
    setTheUserNameIsValid(userNameIsValid);

    const password = UserData.userPassword;
    const passwordValid = validatePassword(password, confirmPassword);
    setPasswordIsValid(passwordValid);

    if (userNameIsValid && passwordValid) {
      console.log("Correct data...");
      console.log(UserData);
    } else if (!userNameIsValid) {
      console.log("InVaild user Name! it must have no spaces");
      setConfirmPassword("");
      setUserData({
        name: "",
        userName: "",
        userEmail: "",
        userPassword: "",
      });
    } else if (!passwordValid) {
      console.log("InVaild Password Format Or Password Dont't Match!");
      setConfirmPassword("");
      setUserData({
        name: "",
        userName: "",
        userEmail: "",
        userPassword: "",
      });
    }
  };
  return (
    <section className="bg-black vh-100">

      <div className="container py-5">
        <div className="row">
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label text-light">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                required
                value={UserData.name}
                onChange={(e) => changeHandler(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userName" className="form-label text-light">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                name="userName"
                required
                value={UserData.userName}
                onChange={(e) => changeHandler(e)}
              />
              <div className="form-text text-danger">
                {!theUserNameIsValid && isTouched ? (
                  <p>InVaild user Name! it must have no spaces</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label text-light">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="userEmail"
                required
                value={UserData.userEmail}
                onChange={(e) => changeHandler(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label text-light">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                name="userPassword"
                required
                value={UserData.userPassword}
                onChange={(e) => changeHandler(e)}
              />
              <div className="form-text text-danger">
                {!passwordIsValid && isTouched ? (
                  <p>
                    Password must contain at least one lowercase letter, one
                    uppercase letter, one number and be at least 8 characters
                    long.
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label text-light">
                Confirm Password
              </label>
              <input
                type="text"
                className="form-control"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => changeHandler(e)}
              />
              <div id="emailHelp" className="form-text text-danger">
                {!passwordIsValid && isTouched ? (
                  <p>You Must Enter The same Password here</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <button type="submit" className={styles.signupBtn}>
              SignUp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
