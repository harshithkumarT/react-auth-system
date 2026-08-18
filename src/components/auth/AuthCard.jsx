import React from "react";

const AuthCard = ({ children }) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
      {children}
    </div>
  );
};

export default AuthCard;