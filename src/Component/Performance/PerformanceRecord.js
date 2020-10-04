import React, { Component } from 'react'
import Style from './PerformanceRecord.module.css';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

export default class PerformanceRecord extends Component {
    render() {
        return (
            <div id="performance">
                <div className={Style.body}>
                    <div>
                        <h1>Performance</h1>
                    </div>
                    <div className={Style.circal_arrng}>
                        <div className={Style.text}>
                            <div className={Style.circal_one}>
                                <h1 style={{marginTop:"80px"}}>1000+</h1>
                            </div>
                            <div>
                                <h1>Hours of Coding</h1>
                            </div>
                        </div>
                        <div className={Style.text}>
                            <div className={Style.circal_two}>
                                <h1 style={{marginTop:"80px"}}>200+</h1>
                            </div>
                            <div>
                                <h1>Hackerrank Problem</h1>
                            </div>
                        </div>
                        <div className={Style.text}>
                            <div className={Style.circal_three}>
                                <h1 style={{marginTop:"80px"}}>220+</h1>
                            </div>
                            <div>
                                <h1>Git Commits</h1>
                            </div>
                        </div>
                    </div>
                    <div className={Style.github_calender}>
                        <div>
                            <GitHubCalendar username="choudhary-ankit">
                                <ReactTooltip delayShow={50} html />
                            </GitHubCalendar>
                            <p>Summary of pull requests, issues opened, and commits made by <a href="https://github.com/choudhary-ankit">@choudhary-ankit</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
