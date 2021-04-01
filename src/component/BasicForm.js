import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntery, setAllEntery] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntery = { id: new Date().getTime().toString(), email, password };
    setAllEntery([...allEntery, newEntery]);
    // console.log(newEntry);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit">Login</button>
      </form>

      <div>
        {allEntery.map((currentElem) => {
          const { id, email, password } = currentElem;
          return (
            <div key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BasicForm;
