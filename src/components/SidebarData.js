import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


export const SidebarData = [
  {
    title:"Home",
    icon: <HomeIcon />,
    link: "/"
  },

  {
    title:"Buy Stocks",
    icon: <ShowChartIcon />,
    link: "/about"
  },

  {
    title:"My Portfolio",
    icon: <AccountBalanceIcon />,
    link: "/contacts"
  },



]


