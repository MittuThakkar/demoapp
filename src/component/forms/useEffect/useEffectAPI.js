import React, { useState, useEffect } from "react";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    console.log(response);

    setUsers(await response.json());
    // console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h2>List of GitHUB User</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            console.log(curElem);
            return <div key={curElem.id}>{curElem.id}</div>;
          })}
          <div className="col-10 col-md-4 mt-5"></div>
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
