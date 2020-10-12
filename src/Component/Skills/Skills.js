import React, { Component } from 'react';
import Style from './Skills.module.css'

export default class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <div className={Style.body}>
                    <div>
                        <h1>Skill's</h1>
                    </div>
                    <div className={Style.img_arrng}>
                        <img className={Style.img_size} src="./Collection/html.png"></img>
                        <img className={Style.img_size} src="./Collection/css.webp"></img>
                        <img className={Style.img_size} src="./Collection/jsc.png"></img>
                        <img className={Style.img_size} src="./Collection/jquery.png"></img>
                        <img className={Style.img_size} src="./Collection/essix.jpeg"></img>
                        <img className={Style.img_size} src="./Collection/react.png"></img>
                        <img className={Style.img_size} src="./Collection/bootstrap.png"></img>
                        <img className={Style.img_size} src="./Collection/material_ui.png"></img>
                    </div>
                    <div className={Style.skills_two}>
                        <div className={Style.img_text}>
                            <img className={Style.img_sizee} src="./Collection/speed.png"></img>
                            <h2>Fast</h2>
                            <p>Fast load times and lag free,<br/> interaction, my highest priority.</p>
                        </div>
                        <div className={Style.img_text}>
                            <img className={Style.img_sizee} src="./Collection/responsive.png"></img>
                            <h2>Responsive</h2>
                            <p>My layouts will work on<br/> any device, big or small.</p>
                        </div>
                        <div className={Style.img_text}>  
                            <img className={Style.img_sizee} src="./Collection/intuative.jpg"></img>
                            <h2>Intuitive</h2>
                            <p>Strong preference for easy<br/> to use, intuitive UX/UI.</p>  
                        </div>
                        <div className={Style.img_text}>
                            <img className={Style.img_sizee} src="./Collection/dynamic.png"></img>
                            <h2>Dynamic</h2>
                            <p>Websites don't have to be static,<br/> I love making pages come to life.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
