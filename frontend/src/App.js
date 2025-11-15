import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-start items-center h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:sessionId" element={<ChatWindow />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
