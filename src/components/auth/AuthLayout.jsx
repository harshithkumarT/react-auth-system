import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <section className="w-full max-w-md">
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;