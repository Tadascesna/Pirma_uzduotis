import React from 'react';
import classes from './OnSale.module.scss';

const onSale = (props) => {
    return (
        <div className={classes.YellowText}>{props.children}</div>
    )
}

export default onSale;