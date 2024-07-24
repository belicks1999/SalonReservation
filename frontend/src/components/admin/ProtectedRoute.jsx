import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = () => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/check-auth', { withCredentials: true });
        setAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        setAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (authenticated === null) {
    return <div>Loading...</div>;
  }

  return authenticated ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
