import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./page/ChatPage";
import ChatPage from "./page/ChatPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
