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
                                    <Card className={Style.root}>
                                        <CardActionArea >
                                            <CardMedia
                                                className={Style.media}
                                                image={e.img}
                                            />
                                            <CardContent className={Style.card_content}>
                                                <Typography gutterBottom variant="h5" component="h2">{e.Tital}</Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">{e.Discription}</Typography>
                                                <div className={Style.card_content_skilldiv}>
                                                    {
                                                        e.skils.map((j)=>{
                                                            return(
                                                                <div className={Style.card_content_skill}>
                                                                    <p style={{color:"black"}}>{j}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions className={Style.cardaction}>
                                            <a href={e.sites} className={Style.btn}>Go to Sites</a>
                                            <a href={e.github}className={Style.btn}>Go to Github</a>
                                        </CardActions>
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
