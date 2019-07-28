import React from 'react';
import Price from './Price/Price'
import classes from './MainBody.module.css';
import Button from '../UI/Button/Button';
import TimeCounter from '../../containers/TimeCounter/TimeCounter';


const mainBody = (props) => {
    return (
        <div className={classes.mainBodyContainer}>
            <div className={classes.mainBody__left}>
                <h1 className={classes.MainText}>
                    New year offer 
                </h1>
                <h1 className={classes.MainText}>
                    <strong className={classes.MainText__Strong}>82% OFF</strong> web hosting
                </h1>

                <div className={classes.timeContainerBox}>

                    <div className={classes.Centering}>
                        <div className={classes.RedArrowRigth}></div>
                    </div>
                <TimeCounter className={classes.TimeCounter}/>
                    <div className={classes.Centering}>
                        <div className={classes.RedArrowLeft}></div>
                    </div>

                </div>

                <Button>Get started now</Button>
            </div>

            <Price className={classes.mainBody__right}
                priceDollar='1'
                priceCent='45'>

            </Price>
        </div>
    )
}

export default mainBody;