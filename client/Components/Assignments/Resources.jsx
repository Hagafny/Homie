import React from 'react'
import Resource from './Resource.jsx';

const pdf = require(`./../../images/pdf.png`);
const winzip = require(`./../../images/winzip.png`);
const moodle = require(`./../../images/moodle.png`);
const gdrive = require(`./../../images/gdrive.png`);
const piazza = require(`./../../images/piazza.png`);

export default class Resources extends React.Component {

    constructor(props) {
        super(props)
    }

    checkDataSourceUrl(imageUrl) {
        return imageUrl.includes("moodle") ? moodle : gdrive;
    }

    checkHWSourceUrl(imageUrl) {
        return imageUrl.includes("zip") ? winzip : pdf;
    }

    render() {

        return (
            <ul className="resourceList">
                <li><Resource url={this.props.data.homework} img={this.checkHWSourceUrl(this.props.data.homework)} >HW</Resource> </li>
                <li><Resource url={this.props.data.moodle} img={moodle}>Submit</Resource></li>
                <li><Resource url={this.props.data.lecture} img={this.checkDataSourceUrl(this.props.data.lecture)}>Lecture</Resource></li>
                <li><Resource url={this.props.data.recitation} img={this.checkDataSourceUrl(this.props.data.recitation)}>Recitation</Resource></li>
                <li><Resource prefix={"https://piazza.com/class/"} url={this.props.data.piazza} img={piazza}>Piazza</Resource></li>
            </ul>
        )
    };
}
