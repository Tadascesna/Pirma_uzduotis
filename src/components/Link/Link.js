import React from 'react';
import { Link } from 'react-router-dom';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Link.module.css'


const link = (props) => {
    return (
        <Auxiliary>
            <div></div>
            <li> 
                <Link className={classes.Link} to={props.link}> 
                    {props.children}
                </Link>
            </li>
        </Auxiliary>
    );
};

export default link;