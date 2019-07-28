import React, { Component } from 'react';
import classes from './TimeCounter.module.css'

class TimeCounter extends Component {

    state = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,        
        distance: null,
        noTimeLeft: false
    }

    componentWillMount() {
        setInterval(() => {

            let finalDate =  new Date('August 10, 2019 00:00:00').getTime();
            let today = new Date().getTime();

            let noTimeLeft = undefined;

            const distance = finalDate - today;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance <= 0) {
                noTimeLeft = true;
            }

            this.setState({distance, days, hours, minutes, seconds, noTimeLeft});
        },1000)
    };

    
    
    render() {

        let timeShower =  
        <div className={classes.timeWrapper}>
            <div className={classes.FlexAndCenter} >
                <h2 className={classes.timeNumber}>
                    {this.state.days}
                </h2>
                <p className={classes.timePeriod}>
                    Days
                </p> 
            </div>
            <div className={classes.FlexAndCenter}>
                <h2 className={classes.timeNumber}> 
                    {this.state.hours}
                </h2>
                <p className={classes.timePeriod}>
                    hours
                </p> 
            </div>
            <div className={classes.FlexAndCenter}>
                <h2 className={classes.timeNumber}>
                    {this.state.minutes}
                </h2>
                <p className={classes.timePeriod}>
                    minutes
                </p> 
            </div>
            <div className={classes.FlexAndCenter}>
                <h2 className={classes.timeNumber}>
                    {this.state.seconds}
                </h2>
                <p className={classes.timePeriod}>
                    seconds
                </p> 
            </div>
        </div>




        if (this.state.noTimeLeft) {
            timeShower = <div> No more time</div>
        }

        return (
            <div> {timeShower}
                    

        </div>
            
        )
    }
}

export default TimeCounter;