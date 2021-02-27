import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 100,
    //backgroundColor: theme.palette.background.paper,
    
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

 function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{
            backgroundColor:"#001429",
            color:"white",
          width:200  
                     
        }} >
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"  >
          <div style={{
          
            color:"white",
            width:200
            
                     
        }}>Parts of Speech</div>
        </ListSubheader>
        
      }
      style={{
        backgroundColor: 'grey',
        color:'white'
        
      }}
      className={classes.root}
    >
      <ListItem button title="Nouns">
        <ListItemIcon >
          <SendIcon />
        </ListItemIcon>
        
      </ListItem>
      <ListItem button title="Pronouns">
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        
      </ListItem>
      <ListItem button title="Adjectives" onClick={handleClick}>
        <ListItemIcon >
          <InboxIcon />
        </ListItemIcon>
        
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
        
          </ListItem>
        </List>
      </Collapse>
    </List>
    </AppBar>
    </div>
  );
}
export default NestedList