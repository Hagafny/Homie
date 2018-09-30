import React from 'react';
import PropTypes from 'prop-types';
import Resource from './Resource';

const pdf = require(`./../../images/pdf.png`);
const winzip = require(`./../../images/winzip.png`);
const moodle = require(`./../../images/moodle.png`);
const gdrive = require(`./../../images/gdrive.png`);
const piazza = require(`./../../images/piazza.png`);
const classboost = require(`./../../images/classboost.png`);
const word = require('./../../images/word.png');
const excel = require('./../../images/excel.png');
const powerpoint = require('./../../images/powerpoint.png');
const trello = require('./../../images/trello.png');

const checkHWSourceUrl = imageUrl => {
  if (!imageUrl) return '';

  let imageToReturn;

  if (imageUrl.includes('zip')) imageToReturn = winzip;

  if (imageUrl.includes('docx')) imageToReturn = word;
  else if (imageUrl.includes('xlsx')) imageToReturn = excel;
  else if (imageUrl.includes('pptx')) imageToReturn = powerpoint;
  else imageToReturn = pdf;

  return imageToReturn;
};

const Resources = ({ data }) => (
  <ul className="resourceList">
    <li>
      <Resource url={data.homework} img={checkHWSourceUrl(data.homework)}>
        HW
      </Resource>
    </li>
    <li>
      <Resource url={data.moodle_submit} img={moodle}>
        Submit Page
      </Resource>
    </li>
    <li>
      <Resource url={data.moodle_url} img={moodle}>
        Moodle
      </Resource>
    </li>
    <li>
      <Resource prefix="https://trello.com/b/" url={data.trello} img={trello}>
        Trello
      </Resource>
    </li>
    <li>
      <Resource url={data.gdrive} img={gdrive}>
        Google Drive
      </Resource>
    </li>
    <li>
      <Resource prefix="https://piazza.com/class/" url={data.piazza} img={piazza}>
        Piazza
      </Resource>
    </li>
    <li>
      <Resource
        prefix="https://www.classboost.co.il/Pages/OfcoursePages/CourseMeetings.aspx?CourseID="
        url={data.classboost}
        img={classboost}
      >
        ClassBoost
      </Resource>
    </li>
  </ul>
);

Resources.propTypes = {
  data: PropTypes.shape().isRequired
};

export default Resources;
