import {Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Chats from "./pages/Chats";
import Login from "./pages/Login";
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/chats" element={<Chats/>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
