import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { AccountBalance, ContactSupport } from '@material-ui/icons';
import app from 'firebase'
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { BsNewspaper } from "react-icons/bs";
import { Link } from 'react-router-dom';



export const SidebarData = [
  {
    title: 'My account',
    icon: <IoIcons.IoMdPerson />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Add funds',
        path: '/add-funds',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Update profile',
        path: '/update-profile',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {

    title: 'Latest News',
    path: '/',
    icon: <BsNewspaper />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },


  {
    title: 'Trading Area',
    path: '/dashboard',
    icon: <ShowChartIcon />
  },

  {
    title: "My Portfolio",
    icon: <AccountBalance />,
    path: "/portfolio"
  },

  {
    title: 'Contact us',
    path: '/contacts',
    icon: <ContactSupport />
  },

  {
    title: <Link to='/' onClick={() => app.auth().signOut()} style={{ color: '#ffffff' }}>Log Out</Link>,
    icon: <IoIcons.IoIosLogOut />,
    link: '/login'
  },



]


