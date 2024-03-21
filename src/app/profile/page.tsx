"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("")

  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data);
    setData(res.data.data._id)
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>{data==="" ? "No DATA": (
        <Link href={`profile/${data}`}>
          {data}
        </Link>
      )}</h2>
      <hr />
      <p>This is the profile page</p>
      <hr />

      <button onClick={onLogout} className="border bg-blue-500">
        Log Out
      </button>

      <button onClick={getUserDetails} className="border bg-green-500">
        Get user details
      </button>
    </div>
  );
}
