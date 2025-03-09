import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes> 
    </div>
  );
}



export default App;
