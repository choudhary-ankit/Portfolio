import React, { Component } from 'react'
import Style from './Interest.module.css'

export default class Interest extends Component {
    render() {
        return (
            <div id="interest">
                <div className={Style.body}>
                    <div>
                        <h1>Interest</h1>
                    </div>
                    <div className={Style.container}>
                        <div className={Style.card}>
                            <div className={Style.imgbox}>
                                <img src="./Collection/dhoni.jpg"></img>
                            </div>
                            <div className={Style.content}>
                                <h2>CRICKET</h2>
                                <p>No cricket team in the world depends on one or two players. it's always depends on Team Work to win</p>
                            </div>
                        </div>
                        <div className={Style.card}>
                            <div className={Style.imgbox}>
                                <img src="./Collection/cinema.jpeg"></img>
                            </div>
                            <div className={Style.content}>
                                <h2>MOVIES</h2>
                                <p>The average person develops only 10 percent of his mental ability, what will happened if someone unlock 100% mental ability??</p>
                            </div>
                        </div>
                        <div className={Style.card}>
                            <div className={Style.imgbox}>
                                <img src="./Collection/coocking.jpeg"></img>
                            </div>
                            <div className={Style.content}>
                                <h2>COOCKING</h2>
                                <p>A recipe has no soul. You as the cook must bring soul to the recipe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
