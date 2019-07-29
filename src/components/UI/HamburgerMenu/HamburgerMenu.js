import React from 'react';
import classes from './HamburgerMenu.module.scss';

const hamburgerMenu = (props) => {
    return (
        <div className={classes.hamburgerContainer} onClick={props.clicked}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
        </div>
    )
}

export default hamburgerMenu;