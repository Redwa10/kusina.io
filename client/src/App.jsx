import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Home from "./pages/Home";
import { RecipesContext } from "./contexts/RecipesContext";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div>
      <RecipesContext>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<Recipe />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Recipe />} />
          </Routes>
        </BrowserRouter>
      </RecipesContext>
    </div>
  );
}

export default App;
