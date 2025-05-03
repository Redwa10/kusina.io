import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
