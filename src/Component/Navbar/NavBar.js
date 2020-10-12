import React, { Component } from 'react'
import Style from './NavBar.module.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
import { smoothScrollAnchor } from "smooth-scroll-anchor";



export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state={
            open_drawer_top:false,
            
        }
    }
    TopDrawerOpen=()=>{
        this.setState({open_drawer_top:true})
    }
    TopDrawerClose=()=>{
        this.setState({open_drawer_top:false})
    }
    render() {
        return (
            <div>
                 <div>
                    <AppBar position="static" style={{backgroundColor:"black"}}>
                        <Toolbar className={Style.nav_arrange}>
                            <div className={Style.logo_container}>
                                <a href="#about">
                                    <img src="./Collection/ankitlogo.jpg" className={Style.logo}></img>
                                </a>
                            </div>
                            <div className={Style.ppp_arrange}>
                                <a href="#proficiencies" className={Style.btn}>Proficiencies</a>
                                <a href="#skills" className={Style.btn}>Skills</a>
                                <a href="#project" className={Style.btn}>Project</a>
                                <a href="#performance" className={Style.btn}>performance</a>
                                <a href="#interest" className={Style.btn}>Interest</a>
                            </div>
                            <div className={Style.menu_btn}>
                                <IconButton color="inherit" onClick={this.TopDrawerOpen} >   
                                    <MenuIcon/>
                                </IconButton>
                                <SwipeableDrawer
                                    variant="persistent"
                                    anchor="top"
                                    open={this.state.open_drawer_top}
                                    className={Style.drawerPaper_top}>
                                    <div className={Style.drawer}>
                                        <div className={Style.drawer_arrng}>
                                            <div className={Style.drawer_cross_btn}>
                                                <IconButton onClick={this.TopDrawerClose}>
                                                    <CloseIcon style={{color:"white"}}/>
                                                </IconButton>
                                            </div>
                                            <div classname={Style.drawer_ppp}>
                                                <div>
                                                    <a href="#proficiencies" className={Style.btn} onClick={this.TopDrawerClose}>Proficiencies</a>
                                                </div>
                                                <div style={{marginTop:"40px"}}>
                                                    <a href="#skills" className={Style.btn} onClick={this.TopDrawerClose}>Skills</a>
                                                </div>
                                                <div style={{marginTop:"40px"}}>
                                                    <a href="#project" className={Style.btn} onClick={this.TopDrawerClose}>Project</a>
                                                </div>
                                                <div style={{marginTop:"40px"}}>
                                                    <a href="#performance" className={Style.btn} onClick={this.TopDrawerClose}>performance</a>
                                                </div>
                                                <div style={{marginTop:"40px"}}>
                                                    <a href="#interest" className={Style.btn} onClick={this.TopDrawerClose}>Interest</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwipeableDrawer>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
}
