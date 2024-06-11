'use client'; 
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from './config/firebase';
import { useRouter } from "next/navigation";
import Login from "./components/Login";

export default function Home() {
  const router = useRouter();
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await signOut(auth);
      setLoading(false);
    };

    checkAuth();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-4xl font-bold mb-10">Firebase OTP Sign-in</h1>
      <Login />
    </main>
  );
}
