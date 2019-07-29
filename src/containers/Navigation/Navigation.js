import React, { Component } from 'react';
import classes from './Navigation.module.scss'
import Link from '../../components/NavComponents/Link/Link'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import HamburgerMenu from '../../components/UI/HamburgerMenu/HamburgerMenu'
import OnSale from '../../components/NavComponents/OnSale/OnSale'
import SideDraw from '../../components/NavComponents/SideDraw/SideDraw'
import Auxiliary from '../../hoc/Auxiliary'


class Navigation extends Component {

    state = {
        showMenu: true
    }

    toggleMenuHandler = () => {
        this.setState((prevState) => {
            return {showMenu: !prevState.showMenu}
        })
        console.log('Su modules scss ir css, dar pilnai nesu ismokes prideti ir atimti klases, del to cia nera Transition')
    }

    backDropHandler = () => {
        this.setState((prevState) => {
            return {showMenu: !prevState.showMenu}
        })
    }



    render() {

        let sideDraw;

        if (this.state.showMenu) {
            sideDraw=<SideDraw clicked={this.backDropHandler}></SideDraw>
        }


        return (
            <Auxiliary>
            
            {sideDraw}
            <div className={classes.NavigationContainer}>
            
                <nav className={classes.Navigation}>


                    <HamburgerMenu clicked={this.toggleMenuHandler}/>
                    <Logo className={classes.Logo} />
                    <div className={[classes.Links, classes.hidden].join(' ')}>
                        <ul className={classes.Links__container}>

                            <div className ={classes.Link__wrapper}>
                                <Link link = '/'> web hosting </Link>
                            </div>
                            <div className ={classes.Link__wrapper}>
                                <div>
                                    <OnSale>on sale</OnSale>
                                    <Link link = '/'> cloud hosting </Link>
                                </div>
                            </div>
                            <div className ={classes.Link__wrapper}>
                                <Link link = '/'> vps hosting </Link>
                            </div>
                            <div className ={classes.Link__wrapper}>
                                <Link link = '/'> domain checker </Link>
                            </div>
                            <div className ={classes.Link__wrapper}>
                                <Link link = '/'> website builder </Link>
                            </div>

                        </ul>
                    </div>


                </nav>
            </div>
            </Auxiliary>
        )
    }


};

export default Navigation; 