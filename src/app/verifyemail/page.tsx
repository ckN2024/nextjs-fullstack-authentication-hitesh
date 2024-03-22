"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = React.useState("");
  const [verified, setVerified] = React.useState(false);
  const [error, setError] = React.useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  React.useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  React.useEffect(() => {
    if (token.length > 0) verifyUserEmail();
  }, [token]);

  return (
    <div>
      <h1>Verify email</h1>
      <h2>{token ? `${token}` : "no token"}</h2>

      {verified && (
        <div className="text-blue-500">
          <h2>Email Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}

      {error && (
        <div className="text-red-500">
          <h2>An error occured</h2>
        </div>
      )}
    </div>
  );
}
