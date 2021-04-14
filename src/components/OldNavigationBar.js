import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: 30,
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
            <Link style={{ textDecoration: 'none' }} to="/"><Button className={classes.menuButton} style={{ color: '#ffffff' }} disabled='true' >STOCKX</Button></Link>
          </Typography>
          <Link style={{ textDecoration: 'none' }} to="/about"><Button style={{ color: '#ffffff' }}>About us</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/contacts"><Button style={{ color: '#ffffff' }}>Contacts</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/login"><Button style={{ color: '#ffffff' }}>Login</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/register"><Button style={{ color: '#ffffff' }}>Create account</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}