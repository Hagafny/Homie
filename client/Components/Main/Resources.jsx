import React from 'react'
import Resource from './Resource.jsx';
import './../../Scripts/includes_polyfill.js';
const pdf = require(`./../../images/pdf.png`);
const winzip = require(`./../../images/winzip.png`);
const moodle = require(`./../../images/moodle.png`);
const gdrive = require(`./../../images/gdrive.png`);
const piazza = require(`./../../images/piazza.png`);
const classboost = require(`./../../images/classboost.png`);
const word = require('./../../images/word.png');
const excel = require('./../../images/excel.png');

export default class Resources extends React.Component {

    constructor(props) {
        console.log(props);
        super(props);
    }

    checkDataSourceUrl(imageUrl) {
        if (!imageUrl)
            return;

        return imageUrl.includes("moodle_submit") ? moodle : gdrive;
    }

    checkHWSourceUrl(imageUrl) {
        if (!imageUrl)
            return;

        if (imageUrl.includes("zip"))
            return winzip;
        else if (imageUrl.includes("docx"))
            return word;
        else if (imageUrl.includes("xlsx"))
            return excel;
        else
            return pdf;
    }

    render() {

        return (
            <ul className="resourceList">
                <li><Resource url={this.props.data.homework} img={this.checkHWSourceUrl(this.props.data.homework)} >HW</Resource> </li>
                <li><Resource url={this.props.data.moodle_submit} img={moodle}>Submit Page</Resource></li>
                <li><Resource url={this.props.data.moodle_url} img={moodle}>Moodle</Resource></li>
                <li><Resource url={this.props.data.lecture} img={this.checkDataSourceUrl(this.props.data.lecture)}>Lecture</Resource></li>
                <li><Resource url={this.props.data.recitation} img={this.checkDataSourceUrl(this.props.data.recitation)}>Recitation</Resource></li>
                <li><Resource prefix={"https://piazza.com/class/"} url={this.props.data.piazza} img={piazza}>Piazza</Resource></li>
                <li><Resource prefix={"https://www.classboost.co.il/Pages/OfcoursePages/CourseMeetings.aspx?CourseID="} url={this.props.data.classboost} img={classboost}>ClassBoost</Resource></li>
            </ul>
        )
    };
}
