import React from 'react';
import classes from './Price.module.scss'

const price = (props) => {
    return (
        <div className={classes.PriceContainer}>


            <div className={classes.Dollar}> 
                <div className={classes.Dollar__Sign}>$</div> 
                <div className={classes.Dollar__Number}>
                    {props.priceDollar}
                </div>   
            </div>

            <div className={classes.CentsAndTime}>
                <div>
                    <p className={classes.CentsAndTime__Cents}>{props.priceCent}</p>
                </div>
                <div>
                    <p className={classes.CentsAndTime__Time}>/mo</p>
                </div>
            </div>


        </div>
    )
}

export default price;