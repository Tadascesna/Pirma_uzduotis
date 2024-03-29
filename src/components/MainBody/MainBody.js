import React from 'react';
import Price from './Price/Price'
import classes from './MainBody.module.scss';
import Button from '../UI/Button/Button';
import TimeCounter from '../../containers/TimeCounter/TimeCounter';
import SaveBox from '../MainBody/SaveBox/SaveBox'


const mainBody = (props) => {
    return (
        <div className={classes.MainBodyContainer}>
            
            <div className={classes.MainBody__Left}>
            <div className={classes.LeftContainer}>
                    <h1 className={classes.MainText}>
                        New year offer 
                    </h1>
                    <h1 className={classes.MainText}>
                        <strong className={classes.MainText__Strong}>82% OFF</strong> web hosting
                    </h1>

                    <div className={classes.TimeContainerBox}>

                        <div className={classes.Arrows}>
                            <div className={classes.Arrows__Right}></div>
                        </div>

                    <TimeCounter className={classes.TimeCounter}/>

                        <div className={classes.Arrows}>
                            <div className={classes.Arrows__Left}></div>
                        </div>

                    </div>
                    </div>

                    <div className={classes.ButtonContainer}>
                        <Button>Get started now</Button>
                    
                    </div>
            </div>


                <div >

                <SaveBox></SaveBox>

                    <Price  className={classes.MainBody__Right}
                        priceDollar='1'
                        priceCent='45'>

                    </Price>
                </div>
        </div>
    )
}

export default mainBody;