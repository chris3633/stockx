import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {useAuth} from '../contexts/AuthContext';
import { AccountBalance } from '@material-ui/icons';



export const SidebarData = [
  {
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
  },

  {
    title: 'Products',
    path: '/',
    icon: <FaIcons.FaCartPlus />
  },

  /*{
    title:"My Portfolio",
    icon: <AccountBalance  />,
    link: "/contacts"
  },*/



]


