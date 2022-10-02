import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import VehiclePage from "./pages/VehiclePage/VehiclePage";
import LocationPage from "./pages/LocationPage/LocationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/customers" element={<CustomerPage />}></Route>
        <Route path="/vehicles" element={<VehiclePage />}></Route>
        <Route path="/locations" element={<LocationPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
