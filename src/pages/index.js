import { Inter } from "@next/font/google";
import useSWR from "swr";
import React, { useState } from "react";

let name, value;

export default function Home() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const sendData = async () => {
    fetch("api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
      });
  };
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await fetch(`api/profile?id=${id}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.log("error : ", e.message);
    }
  };
  const fetcher = async () => {
    const resp = await fetch("api/profile");
    const data = await resp.json();
    return data;
  };
  const { data, error } = useSWR("dash", fetcher);
  if (error) return "Error aa gaya bhailog";
  if (!data) return <h1>Loading...</h1>;
  return (
    <>
      <div>
        <h2>id → username | password</h2>
        {data.map((ele) => {
          return (
            <h2 key={ele.id}>
              {ele.id} → {ele.username} | {ele.password}{" "}
              <button
                onClick={() => {
                  handleDelete(ele.id);
                }}
              >
                Delete
              </button>
            </h2>
          );
        })}
      </div>
      <div>
        <b>username : </b>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleInput}
        />
        <br />
        <br />
        <b>password : </b>
        <input
          id="password"
          name="password"
          type="text"
          onChange={handleInput}
        />
        <br />
        <br />
        <button onClick={sendData}> submit</button>
      </div>
    </>
  );
}
