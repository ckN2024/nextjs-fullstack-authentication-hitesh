"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function loginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div>
      <h1>LogIn</h1>
      <hr />

      <br />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <br />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <br />

      <button onClick={onLogin} className="border bg-blue-500">
        Log In
      </button>

      <br />

      <Link href="/signup">Visit sign up page</Link>
    </div>
  );
}
