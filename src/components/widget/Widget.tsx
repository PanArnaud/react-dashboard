import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import './widget.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }: { type: string }) => {
  let data = {
    title: '',
    isMoney: false,
    link: '',
    icon: (<></>)
  };

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: 'users',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlinedIcon className='icon' style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)"
          }} />
        )
      }
      break;
    case "orders":
      data = {
        title: 'orders',
        isMoney: false,
        link: 'See all orders',
        icon: (
          <ShoppingCartOutlinedIcon className='icon' style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)"
          }} />
        )
      }
      break;
    case "earnings":
      data = {
        title: 'earnings',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlinedIcon className='icon' style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)"
          }} />
        )
      }
      break;
    case "balance":
      data = {
        title: 'balance',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon className='icon' style={{
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)"
          }} />
        )
      }
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">{data?.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget