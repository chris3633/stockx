import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, Route } from 'react-router-dom'
/* import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; */
import AboutPage from '../pages/AboutPage'
import RegisterPage from '../components/Register'
import App from './App'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();




  return (
    <div className={classes.root}>
      <AppBar className="bg-primary" position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            STOCKX
          </Typography>
          <Link style={{ textDecoration: 'none' }} to="/AboutPage"><Button style={{color: '#ffffff'}}>About us</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/ContactPage"><Button style={{color: '#ffffff'}}>Contacts</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/LoginPage"><Button style={{color: '#ffffff'}}>Login</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/RegisterPage"><Button style={{color: '#ffffff'}}>Create account</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}