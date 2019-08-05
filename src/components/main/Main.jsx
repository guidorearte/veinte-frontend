import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Sidebar from '../common/sidebar/Sidebar';
//import AccordionPrices from './AccordionPrices';
import {
  Accordion,
  Button,
  } from 'react-bootstrap';
  import TablePrices from './TablePrices';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  childContainer: {
    width: '100%',
    marginTop: '65px'
  }
}));

export default function Main(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // const checkToken = (token) => {
  //   // @TODO verificacion de token
  //   return true;
  // }

  // if (!(localStorage.getItem('token') && checkToken(localStorage.getItem('token')))) {
  //   return <Redirect to='/app/'  />
  // }

  const handleOnClick = () => {
    localStorage.removeItem('token');
    props.history.push('/app/');
  }
  const handleDrawerClose = (open) => {
    setOpen(open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Accordion>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>

            
              <Accordion.Toggle as={Button} eventKey="0" style={{alignSelf: 'flex-end'}}>
                <Typography component="h6" color="white" noWrap className={classes.title}>
                  USD
                  <svg style={{"width":"24px","height":"24px","viewBox":"0 0 24 24"}}>
                    < path fill="#ffffff" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg> 262
                </Typography>
              </Accordion.Toggle>



            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>

            </IconButton>

          </Toolbar>
          <Accordion.Collapse eventKey="0" style={{maxHeight: "200px", overflowY: "scroll"}}>
              <TablePrices/>
            </Accordion.Collapse>
        </AppBar>
        
      </Accordion>
      <Sidebar open={open} setOpen={handleDrawerClose} onClick={handleOnClick}></Sidebar>
      <div className={classes.childContainer}>
        {props.children}
      </div> 
    </div>
  );
}