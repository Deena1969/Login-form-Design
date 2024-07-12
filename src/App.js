import { Fragment, useEffect, useState } from 'react';
import './App.css';
import './style.css';
import connectDB from './db';

function App() {


  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [Contact, setContact] = useState("")
  const [gender, setGender] = useState("")
  const [birthday, setBirthday] = useState("")
  const [address, setAddress] = useState("")
  const [qualification, setQualification] = useState("")
  const onChangeFirstName = (event) => {
    setFirstName(event?.target?.value)
  }
  const onChangeLastName = (event) => {
    setLastName(event?.target?.value)
  }
  const onChangeEmail = (event) => {
    setEmail(event?.target?.value)
  }
  const onChangePassword = (event) => {
    setPassword(event?.target?.value)
  }
  const onChangeContact = (event) => {
    setContact(event?.target?.value)
  }
  const onChangeGender = (event) => {
    setGender(event?.target?.value)
  }
  const onChangeBirthday = (event) => {
    setBirthday(event?.target?.value)
  }
  const onChangeAddress = (event) => {
    setAddress(event?.target?.value)
  }
  const onChangeQualification = (event) => {
    setQualification(event?.target?.value)
  }


  const onSubmit = (e) => {
    console.log("Prevent default", e)
     e.preventDefault()
    alert("your responded  "+firstName)
  }
  const onClear = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setContact("")
    setBirthday("")
    setAddress("")
    setQualification("")
    document.querySelector("form").reset();
  }


  return (
    <div className="App main">
      <h2>Registration Form</h2>
      <form action="" onSubmit={onSubmit}>
        <label for="first"
        >First Name:</label
        >
        <input
          value={firstName}
          type="text"
          id="first"
          name="first"
          required
          onChange={onChangeFirstName}
        />

        <label for="last"
        >Last Name:</label>
        <input
          type="text"
          id="last"
          name="last"
          required
          onChange={onChangeLastName}
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={onChangeEmail}
        />

        <label for="password"
        >Password:</label
        >
        <input
          type="password"
          id="password"
          name="password"
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
          title="Password must contain at least one number, 
                           one alphabet, one symbol, and be at 
                           least 8 characters long"
          required
          onChange={onChangePassword}
        />

        <label for="mobile"
        >Contact:</label
        >
        <input
          type="text"
          id="mobile"
          name="mobile"
          maxlength="10"
          required
          onChange={onChangeContact}
        />

        <label for="gender"
        >Gender:</label
        >
        <select
          id="gender"
          name="gender"
          required
          onChange={onChangeGender}
        >
          <option selected="true" style={{ display: "none" }}></option>
          <option value="male">
            Male
          </option>
          <option value="female">
            Female
          </option>
          <option value="other">
            Other
          </option>
        </select>

        <label for="birthday">DOB:</label>
        <input type="date" id="birthday" name="birthday"
          required
          onChange={onChangeBirthday}
        />

        <br />
        <br />
        <label for="Address">Address:</label>
        <input type="text"
          required
          onChange={onChangeAddress}
        />

        <label for="qualification"> Qualification: </label>
        <select
          id="qualification"
          name="qualification"
          required
          onChange={onChangeQualification}
        >
          <option selected="true" style={{ display: "none" }}></option>
          <option value="ug">
            UG
          </option>
          <option value="pg">
            PG
          </option>
          <option value="other">
            Other
          </option>
        </select>


        <button type="submit" onSubmit={onSubmit}>
          Submit
        </button>
        <br />
        <br />
        <button type="reset" onClear={onClear}>
          Clear
        </button>
      </form>
    </div>

  );
};

export default App;
