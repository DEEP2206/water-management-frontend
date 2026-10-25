import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-4 text-center text-sm text-gray-500 dark:border-gray-800">
      <p>&copy; {new Date().getFullYear()} Water Management. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
