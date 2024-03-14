import "./css/style.css";
import "./css/satoshi.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Invices from "./pages/Invices";
import InvoiceDetails from "./pages/InvoiceDetails";
import CreateOrder from "./pages/CreateOrder";
import Dashobard from "./pages/Dashobard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
function AppContent() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashobard />} />
      <Route path="/invoices" element={<Invices />} />
      <Route path="/invoice-details" element={<InvoiceDetails />} />
      <Route path="/create-order" element={<CreateOrder />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
