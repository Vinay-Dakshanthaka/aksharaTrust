// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const role = localStorage.getItem('role');
  
  if (role !== 'ADMIN') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
