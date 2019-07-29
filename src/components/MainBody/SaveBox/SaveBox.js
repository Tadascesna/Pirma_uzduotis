import React from 'react';
import classes from './SaveBox.module.scss';

const saveBox = (props) => {
    return (
        <div className={classes.BoxContainer}>
            <div className={classes.Box}>save 82%</div>
            <div className={classes.ArrowDown}></div>
        </div>
    )
}

export default saveBox;