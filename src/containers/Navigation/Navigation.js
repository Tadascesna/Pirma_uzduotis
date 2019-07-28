import React from 'react';
import classes from './Navigation.module.css'
import Link from '../../components/Link/Link'
import {ReactComponent as Logo} from '../../assets/logo.svg'

const navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <Logo className={classes.Logo} />
            <div className={classes.Links}>
                <ul className={classes.Link__container}>
                    <Link link = '/'> web hosting </Link>
                    <Link link = '/'> cloud hosting </Link>
                    <Link link = '/'> vps hosting </Link>
                    <Link link = '/'> domain checker </Link>
                    <Link link = '/'> website builder </Link>
                </ul>
            </div>
        </nav>
    )
};

export default navigation; 