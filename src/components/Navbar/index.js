import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';

import './styles.css'

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Avatar alt="Clervens Volcy" src="/images/logo-100.png" />
                <Typography variant="title" color="inherit" className="brand">
                Clervens Volcy
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;