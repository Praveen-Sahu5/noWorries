import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookToken from "./pages/BookToken";
import MyToken from "./pages/MyToken";
import AdminDashboard from "./pages/AdminDashboard";
import CreateClinic from "./pages/CreateClinic";
import Navbar from "./components/Navbar";
// import { AuthProvider } from "./context/AuthContext";

function AppContent() {
  const location = useLocation();

  // Hide Navbar on login and register pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<BookToken />} />
        <Route path="/my-token" element={<MyToken />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/create-clinic" element={<CreateClinic />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    // <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    // </AuthProvider>
  );
}

export default App;
