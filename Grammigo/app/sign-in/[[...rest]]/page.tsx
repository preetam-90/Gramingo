"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12">
      <SignIn appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-lg",
          footer: "hidden",
          footerAction: "hidden",
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
        },
        variables: {
          colorPrimary: "#2563eb",
        }
      }} />
    </div>
  );
} 