import React from 'react'
import Resource from './Resource.jsx';

const pdf = require(`./../images/pdf.png`);
const moodle = require(`./../images/moodle.png`);
const gdrive = require(`./../images/gdrive.png`);
const piazza = require(`./../images/piazza.png`);

export default class Resources extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <ul className="resourceList">
                <li> <Resource url={this.props.data.homework} img={pdf} >HW</Resource> </li>
                <li>  <Resource url={this.props.data.moodle} img={moodle}>Submit</Resource></li>
                <li> <Resource url={this.props.data.lecture} img={gdrive}>Lecture</Resource></li>
                <li>  <Resource url={this.props.data.recitation} img={gdrive} >Recitation</Resource></li>
                <li> <Resource prefix={"https://piazza.com/class/"} url={this.props.data.piazza} img={piazza}>Piazza</Resource></li>
            </ul>
        )
    };
}
