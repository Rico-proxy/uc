import Access from './pages/Access';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import Website from './pages/Website';
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
        <Toaster 
        position="top-right"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/" element={<Access />} />
        <Route path="/website" element={<Website />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
