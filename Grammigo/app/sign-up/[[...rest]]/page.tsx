"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12">
      <SignUp appearance={{
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