import React from 'react';
import Link from '../Link/Link';
import classes from './SideDraw.module.scss'
import OnSale from '../OnSale/OnSale'
import Auxiliary from '../../../hoc/Auxiliary'

const sideDraw = (props) => {

    return (
        <Auxiliary>
        <div className={classes.Modal} onClick={props.clicked}></div>
        <div className={classes.sideDrawContainer}>
            <div className ={classes.Link__wrapper}>
                <div className={classes.Link}>
                <Link className={classes.Link} link = '/'> web hosting </Link>
                </div>
                <div className={classes.Link}>
                    <OnSale>on sale</OnSale>
                    <Link link = '/'> cloud hosting </Link>
                </div>
                <div className={classes.Link}>
                <Link className={classes.Link} link = '/'> vps hosting </Link>
                </div>
                <div className={classes.Link}>
                <Link className={classes.Link} link = '/'> domain checker </Link>
                </div>
                <div className={classes.Link}>
                <Link className={classes.Link} link = '/'> website builder </Link>
                </div>
            </div>
        </div>
        </Auxiliary>
    )
}

export default sideDraw;