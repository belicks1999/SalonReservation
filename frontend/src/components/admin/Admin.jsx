// src/components/AdminPanel.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8 bg-neutral-300">
        <Outlet /> {/* This will render the component based on the route */}
      </div>
    </div>
  );
};

export default Admin;
