import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-200 px-6 py-4 dark:border-gray-800">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Water Management</h1>
      </div>
    </header>
  );
};

export default Header;
