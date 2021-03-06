import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import material-ui components
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionSettings from 'material-ui/svg-icons/action/settings';

const style = {
  paper: {
    width: '5%',
    height: '700px',
    float: 'left',
    textAlign: 'center',
    backgroundColor: '#006CAA'
  },
  mediumIcon: {
    width: 30,
    height: 30,
  },
  medium: {
    width: 60,
    height: 60,
  },
}

class PlaybackSidebar extends Component {
  render() {
    return (
      <Paper 
        id='customFade1s' 
        className='animated fadeInUp' 
        zDepth={1} 
        style={style.paper} 
        rounded={false}
        >
        <Link to='/dashboard'>
          <IconButton 
            iconStyle={style.mediumIcon} 
            style={style.medium} 
            tooltip='Go Back'
            >
            <NavigationArrowBack color='lightgray'/>
          </IconButton>
        </Link>
        <Link to='/dashboard'>
          <IconButton 
            iconStyle={style.mediumIcon} 
            style={style.medium} 
            tooltip='Settings'
            >
            <ActionSettings color='lightgray'/>
          </IconButton>
        </Link>
      </Paper>
    )
  }
}

export default PlaybackSidebar;