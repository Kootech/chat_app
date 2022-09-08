import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username);
  console.log(password);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(`handle submit called`);
    e.preventDefault();
    localStorage.setItem("Chat-userName", JSON.stringify(username));
    navigate("/chat");
  };
  return (
    <div className="m-3 p-2 grid justify-center">
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            username
          </label>
          <input
            type="text"
            id="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            required=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
