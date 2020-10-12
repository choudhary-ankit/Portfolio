import React, { Component } from 'react'
import Style from './Project.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card_details from '../../StaticData/CardDetails.js'

export default class Project extends Component {
    render() {
        return (
            <div id="project">
                <div className={Style.body}>
                    <div>
                        <h1>Project</h1>
                    </div>
                    <div className={Style.card_arrng}>
                        {
                            Card_details.map((e)=>{
                                return(
                                    <Card className={Style.card}>
                                        <div className={Style.box}>
                                            <img src={e.img} className={Style.img}></img>
                                            <div className={Style.contentbox}>
                                                <div className={Style.contentdiv}>
                                                    <h5>{e.Tital}</h5>
                                                    <div className={Style.discripton}>
                                                        <p >{e.Discription}</p>
                                                    </div>
                                                    <div className={Style.skill_div}>
                                                        {
                                                            e.skils.map((f)=>{
                                                                return(
                                                                    <img src={f} className={Style.skill_img}></img>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className={Style.btn_div}>
                                                        <a href={e.sites} style={{textDecoration:"none"}}>
                                                            <Button variant="outlined" color="secondary" size="large" style={{fontFamily: 'cursive'}}>Demo</Button>
                                                        </a>
                                                        <a href={e.github} style={{textDecoration:"none"}}>
                                                            <Button variant="contained" color="secondary" size="large" style={{fontFamily: 'cursive'}}>Github</Button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
