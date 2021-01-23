<<<<<<< HEAD
import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
=======
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {useAuth} from '../contexts/AuthContext';
import firebase from 'react-dom';
>>>>>>> 11218ccea4fe8de788e9aca286f639c5481d3009


export const SidebarData = [
  {
<<<<<<< HEAD
    title:"Home",
    icon: <HomeIcon />,
    link: "/"
=======
/*     title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />, */

    title: 'Logout',
    path: '/',
    
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
>>>>>>> 11218ccea4fe8de788e9aca286f639c5481d3009
  },

  {
<<<<<<< HEAD
    title:"Buy Stocks",
    icon: <ShowChartIcon />,
    link: "/about"
=======
    title: 'Products',
    path: '/',
    icon: <FaIcons.FaCartPlus />
>>>>>>> 11218ccea4fe8de788e9aca286f639c5481d3009
  },

  {
    title:"My Portfolio",
    icon: <AccountBalanceIcon />,
    link: "/contacts"
  },



]


