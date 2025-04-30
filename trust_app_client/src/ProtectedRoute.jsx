import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const role = localStorage.getItem('role');
  const email = localStorage.getItem('email');

  if (role !== 'ADMIN' || !email) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
