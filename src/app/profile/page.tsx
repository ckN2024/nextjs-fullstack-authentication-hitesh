"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <hr />
      <p>This is the profile page</p>
      <hr />

      <button onClick={onLogout} className="border bg-blue-500">
        Log Out
      </button>
    </div>
  );
}
