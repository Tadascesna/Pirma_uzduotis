import React from 'react';
import classes from './Footer.module.css';
import FooterElement from './FooterElement/FooterElement'

const footer = (props) => {
    return (
        <div className={classes.footerContainer}>
            <FooterElement> Guaranteed 99.99% up time</FooterElement>
            <FooterElement> Superior speed performance </FooterElement>
            <FooterElement>24/7 Support Chat</FooterElement>
            <FooterElement> 30-Day money-back guarantee</FooterElement>

        </div>
    )
}

export default footer;