import React from 'react';
import classes from './Price.module.css'

const price = (props) => {
    return (
        <div className={classes.PriceContainer}>



                <div className={classes.Flex}> 
                    <div className={classes.dollarSign}>$
                    
                    </div> 
                    <div className={classes.DollarNumber}>
                        {props.priceDollar}
                    </div>   
                </div>
            <div className={classes.FlexCenter}>
                <div>
                    <p className={classes.SmallNumber}>{props.priceCent}</p>
                </div>
                <div>
                    <p className={classes.PeriodicTime}>/mo</p>
                    
                </div>
            </div>


        </div>
    )
}

export default price;