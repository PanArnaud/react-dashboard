import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Ethical</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <PeopleOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreMallDirectoryOutlinedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <InsertChartOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Services</p>
          <li>
            <MedicalInformationOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <PersonOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar