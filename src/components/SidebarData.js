import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {useAuth} from '../contexts/AuthContext';
import { AccountBalance, ContactSupport } from '@material-ui/icons';
import app from 'firebase'
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { BsNewspaper } from "react-icons/bs";
import { Link } from 'react-router-dom';



export const SidebarData = [
  {
/*     title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />, */

    title: 'Latest News',
    path: '/',
    icon: <BsNewspaper/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

/*     subNav: [
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ] */
  },
  

  {
    title: 'Trading Area',
    path: '/',
    icon: <ShowChartIcon/>
  },

  {
    title:"My Portfolio",
    icon: <AccountBalance  />,
    link: "/contacts"
  },

  {
    title: 'Contact us',
    path: '/contacts',
    icon: <ContactSupport />
  },

  {
    title: <Link to='/'  onClick={() => app.auth().signOut()} style={{color: '#ffffff'}}>Log Out</Link>,
    icon: <IoIcons.IoIosLogOut  />,
    link: '/login'
  },



]


