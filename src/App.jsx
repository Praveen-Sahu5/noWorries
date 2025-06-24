import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import BookToken from "./pages/BookToken";
import MyTokens from "./pages/MyToken";
import AdminDashboard from "./pages/AdminDashboard";
import CreateClinic from "./pages/CreateClinic";
import {AuthProvider} from "./context/AuthContext";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<BookToken />} />
          <Route path="/mu-token" element={<MyTokens />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/create-clinic" element={<CreateClinic />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
