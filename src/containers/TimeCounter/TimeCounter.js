import React, { Component } from 'react';
import classes from './TimeCounter.module.scss'

class TimeCounter extends Component {

    state = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,        
        noTimeLeft: false,
    }

    componentWillMount() {
        setInterval(() => {

            let finalDate =  new Date('August 10, 2019 00:00:00').getTime();
            let today = new Date().getTime();

            let TimeLeft = undefined;

            const distance = finalDate - today;

            let newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
            let newHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let newMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let newSeconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance <= 0) {
                TimeLeft = true;
            }

            this.setState({days: newDays, hours: newHours, minutes: newMinutes, seconds:newSeconds, noTimeLeft: TimeLeft});
        },1000)
    };

    
    
    render() {

        let timeShower =  
        <div className={classes.TimeWrapper}>
            <div className={classes.TimeContainer} >
                <h2 className={classes.TimeContainer__Number}>
                    {this.state.days}
                </h2>
                <p className={classes.TimeContainer__Period}>
                    Days
                </p> 
            </div>
            <div className={classes.TimeContainer}>
                <h2 className={classes.TimeContainer__Number}> 
                    {this.state.hours}
                </h2>
                <p className={classes.TimeContainer__Period}>
                    hours
                </p> 
            </div>
            <div className={classes.TimeContainer}>
                <h2 className={classes.TimeContainer__Number}>
                    {this.state.minutes}
                </h2>
                <p className={classes.TimeContainer__Period}>
                    minutes
                </p> 
            </div>
            <div className={classes.TimeContainer}>
                <h2 className={classes.TimeContainer__Number}>
                    {this.state.seconds}
                </h2>
                <p className={classes.TimeContainer__Period}>
                    seconds
                </p> 
            </div>
        </div>




        if (this.state.noTimeLeft) {
            timeShower = <div className={classes.TimeLeft}> No more time</div>
        }

        return (
            <div> {timeShower}
                    

        </div>
            
        )
    }
}

export default TimeCounter;