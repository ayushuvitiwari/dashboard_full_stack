import React from 'react'
import { MdClose, MdMenu, MdAccountCircle, MdKeyboardArrowDown } from "react-icons/md";
import { MdDashboard, MdInventory2, MdShoppingCart, MdPeople, MdAnalytics, MdCategory, MdLocalOffer } from "react-icons/md";
import './CSS/DashboardLayout.css'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DashboardLayout = ({ children }) => {

  const navigate = useNavigate()

  const [sidebarCollapsed, setsidebarCollapsed] = useState(false);

  const logout = () => {
    const confrimLogout = window.confirm("Are you sure you want to logout?");

    if (confrimLogout) {
      navigate('/')
    }
  }

  const crossbtn = () => {
    setsidebarCollapsed(!sidebarCollapsed);
  }
  return (
    <>
      <div className="dashboardLayout-outer">

        <div className={`dashboardLayout-sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
          <div className="sidebar-top">
            <div className="sidebar-logo text-4xl font-semibold">
              <h1>Dashboard</h1>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li><NavLink to="/dashboard" className={({ isActive }) => `inavlink ${isActive ? "active" : ""}`}><MdDashboard /><span>Dashboard</span></NavLink></li>
              <li><NavLink to="/products" className={({ isActive }) => `inavlink ${isActive ? "active" : ""}`}><MdInventory2 /><span>Products</span></NavLink></li>
              <li><NavLink to="/Order" className={({ isActive }) => `inavlink ${isActive ? "active" : ""}`}><MdShoppingCart /><span>Orders</span></NavLink></li>
              <li><NavLink to="/customers" className={({ isActive }) => `inavlink ${isActive ? "active" : ""}`}><MdPeople /><span>Customers</span></NavLink></li>
              <li><NavLink to="/analytics" className={({ isActive }) => `inavlink ${isActive ? "active" : ""}`}><MdAnalytics /><span>Analytics</span></NavLink></li>
              <li><NavLink to="/categories" className={({ isActive }) => `inavlink ${isActive ? "active" : ""}`}><MdCategory /><span>Categories</span></NavLink></li>
              <li><NavLink to="/coupons" className={({ isActive }) => `inavlink ${isActive ? "active" : ""}`}><MdLocalOffer /><span>Coupons</span></NavLink></li>
            </ul>
          </div>
          <div className="sidebar-bottom">
            <button onClick={logout}><RiLogoutBoxRLine />Logout</button>
          </div>
        </div>


        <div className="dashboardLayout-main">

          <div className="dashboardLayout-Header">

            <div className="header-first">

              <div className="sidebar-close-btn flex items-center justify-center text-4xl" onClick={crossbtn}>{sidebarCollapsed ? <MdMenu /> : <MdClose />}</div>

              <h1>Welcome Back Admin</h1>

            </div>

            <div className="dashboardLayoutAdmin flex items-center justify-around text-[20px]">
              <MdAccountCircle />
              <span>Admin</span>
              <MdKeyboardArrowDown />
            </div>

          </div>


          <div className="dashboardLayout-Content">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout