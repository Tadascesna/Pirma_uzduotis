import React from 'react';
import checkmark from '../../../assets/Checkmark.png';
import classes from './FooterElement.module.scss';


const footerElement = (props) => {
    return (
        <div className={classes.FooterElement}>
            <img className={classes.Image} src={checkmark} alt='Checkmark '/>
            <p className={classes.FooterElement__text}>{props.children}</p>
        </div>
    )
}

export default footerElement;