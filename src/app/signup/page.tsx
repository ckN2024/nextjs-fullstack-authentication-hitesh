"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast"

export default function signupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user)
      console.log("Signup success", response.data);
      router.push("/login")
    } catch (error: any) {
      console.log("Sign up failed ", error.message);
      toast.error(error.message)
    } finally {
      // no matter what happens but the loading needs to go away
      setLoading(false)
    }
  };

  React.useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div>
      <h1>{loading ? "Processing...":"Sign Up"}</h1>
      <hr />

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="text-black"
      />

      <br />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="text-black"
      />

      <br />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="text-black"
      />

      <br />

      <button onClick={onSignup} className="border bg-blue-500">
        {buttonDisabled ? "Button disabled":"Sign up"}
      </button>

      <br />

      <Link href="/login">Visit login page</Link>
    </div>
  );
}
