import React, { Component } from 'react'
import Style from './Proficiance.module.css'

export default class Proficiance extends Component {
    constructor(props){
        super(props)
        this.state={
            data:"",
        }
    }
    render() {
        return (
            <div id="proficiencies">
                <div className={Style.body}>
                    <div>
                        <h1>Proficiencies</h1>
                    </div>
                    <div className={Style.prof_section}>
                        <div className={Style.prof_img_section}>
                            <img src="./Collection/frontend.png" className={Style.prof_img_size} alt='htmlpic'></img>
                            <h4>Front End</h4>
                            <p>Now just that, I can<br/> even host the show</p>
                        </div>
                        <div className={Style.prof_img_section}>
                            <img src="./Collection/react.svg" className={Style.prof_img_size} alt='reactpic'></img>
                            <h4>React</h4>
                            <p>When it comes to react app,<br/>I have the strength of Atlas</p>
                        </div>
                        <div className={Style.prof_img_section}>
                            <img src="./Collection/uxui.png" className={Style.prof_img_size} alt='uiux'></img>
                            <h4>UI/Ux</h4>
                            <p>Strong preference for <br/>easy to use, intuitive UX/UI.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
