import React, { Component } from 'react'
import Style from './AboutMe.module.css'
import Button from '@material-ui/core/Button';

export default class AboutMe extends Component {
    render() {
        return (
            <div id="about">
                <div className={Style.body}>
                    <div className={Style.first_one}>
                        <div>
                            <h1>Ankit<br/>Choudhary</h1>
                        </div>
                        <div>
                            <h4 style={{color:"blue"}}>Front-End-Devloper</h4>
                        </div>
                        <div className={Style.location_arrng}>
                            <img src="./Collection/stik.jpeg" className={Style.location_img}></img>
                            <p style={{marginLeft:"15px"}}>Patna, Bihar, India</p>
                        </div>
                        <div className={Style.para}>
                            <p>A passionate aspiring Front-End Developer skilled in React, JavaScript, Es6. Moulded and shaped by SelfStudy, Actively ready to join in a great lively team of a good start-up to adapt me in any situation and environment with ease and perform the best.</p>
                        </div>
                        <div className={Style.social_network}>
                            <a href="https://github.com/choudhary-ankit"><img src="./Collection/github.png" className={Style.social_img_size}></img></a>
                            <a href="https://www.linkedin.com/in/ankit-choudhary-522aa6122/"><img src="./Collection/linkdin.png" className={Style.social_img_size}></img></a>
                            <a href="https://twitter.com/ankitchoudhar39"><img src="./Collection/twiteer.png" className={Style.social_img_size}></img></a>
                            <a href="https://www.hackerrank.com/dhackdecoder"><img src="./Collection/hacker.png" className={Style.social_img_size}></img></a>
                            <a href="https://drive.google.com/file/d/1UvKzrWWTwE8a4NfZ890WwvgyUyaCDCYK/view">
                                <button className={Style.resume_btn}>Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className={Style.imgdiv}>
                        <img src="./Collection/poster.jpeg" className={Style.img}></img>
                    </div>
                </div>
            </div>
        )
    }
}
