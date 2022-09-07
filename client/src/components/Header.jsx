import React from "react";

const Header = () => {
  return (
    <div>
      <h1 class="flex items-center text-5xl font-extrabold dark:text-white">
        Chat
        <span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
          Anonymously
        </span>
      </h1>
    </div>
  );
};

export default Header;
