import React from 'react';
import UserDash from "../components/user/UserDash";
import AdminDash from "../components/admin/AdminDash";

export default function DashboardContainer(props) {
  if (localStorage.getItem('role') !== 'admin') {
    return <UserDash {...props}/>;
  }
  return <AdminDash {...props}/>;
}