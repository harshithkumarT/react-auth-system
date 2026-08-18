import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "./components/auth/AuthLayout";
import Login from './components/pages/Login'
import Register from "./components/pages/Register";

const App = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthLayout>
  );
};

export default App;