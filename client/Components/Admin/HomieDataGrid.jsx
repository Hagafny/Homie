import React from 'react';
import update from 'react-addons-update';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import { Toolbar } from 'react-data-grid-addons';
import HomieDropDownEditor from './HomieDropDownEditor.jsx';
import HomieDropDownFormatter from './HomieDropDownFormatter.jsx';

const titles = [
  {
    value: '24',
    text: 'Defense Against the Dark Arts'
  },
  {
    value: "25",
    text: 'Potions'
  },
  {
    value: "26",
    text: 'History of Magic'
  },
  {
    value: "27",
    text: 'Astronomy'
  },
  {
    value: "28",
    text: 'Charms'
  }]
export default class HomieDataGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }

    this.getRowAt = this.getRowAt.bind(this);
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
  }

  componentDidMount() {
    let classId = this.props.classId;
    let getAssignmentsUrl = `/api/assignments/manager/${classId}`;
    axios.get(getAssignmentsUrl)
      .then(assignmentsRes => {
        let assignments = assignmentsRes.data;
        this.setState({ rows: assignments });
      })
  }
  getColumns() {
    return [
      {
        key: 'id',
        name: 'ID',
        width: 80
      },
      {
        key: 'courseId',
        name: 'Course',
        //editable: true
        editor: <HomieDropDownEditor options={titles} />,
        formatter: <HomieDropDownFormatter options={titles} value={"theFuck"}/>
      },
      {
        key: 'ex',
        name: 'Exercise #',
        editable: true
      },
      {
        key: 'endDate',
        name: 'End Date',
        // width: 200,
        editable: true
      },
      {
        key: 'homeworkUrl',
        name: 'HW URL',
        editable: true
      },
      {
        key: 'moodleId',
        name: 'Moodle ID',
        editable: true
      },
      {
        name: 'Delete',
        key: '$delete',
        getRowMetaData: (row) => row,
        formatter: ({ dependentValues }) => (
          <span>
            <a href="javascript:;" onClick={() => this.deleteRow(dependentValues.id)}>Delete</a>
          </span>
        ),
      }
    ];
  }
  getRowAt(i) {
    return this.state.rows[i];
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, { $merge: updated });
      console.log(updatedRow);
      this.editAssignments(updatedRow, () => {
      });

      rows[i] = updatedRow;
    }

    this.setState({ rows });
  }

  editAssignments(assignment, cb) {
    var url = "/api/assignments/";
    var data = JSON.stringify(assignment);

    var config = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    axios.put(url, data, config).then((response) => {
      if (response.data.status == 200)
        cb();
    });
  }

  getSize() {
    return this.state.rows.length;
  }

  deleteRow(id) {
    this.removeRowFromServer(id, () => {
      this.removeRowFromClientGrid(id);
    })
  }
  removeRowFromServer(id, cb) {
    var url = `/api/assignments/${id}`;
    axios.delete(url)
      .then((response) => {
        if (response.data.status == 200)
          cb();
      });
  }

  removeRowFromClientGrid(id) {
    this.getRowIndexById(id, (rowIndex) => {
      let rows = this.state.rows;
      rows.splice(rowIndex, 1);
      this.setState({ rows });
    })
  }


  getRowIndexById(id, cb) {
    let rows = this.state.rows;
    let rowCount = this.getSize();
    let found = false;
    for (let i = 0; i < rowCount; i++) {
      if (!found && rows[i].id == id) {
        found = true;
        cb(i);
      }

    }
  }

  handleAddRow({ newRowIndex }) {
    alert(newRowIndex);
    // const newRow = {
    //   value: newRowIndex,
    //   userStory: '',
    //   developer: '',
    //   epic: ''
    // };

    // let rows = this.state.rows.slice();
    // rows = React.addons.update(rows, {$push: [newRow]});
    // this.setState({ rows });
  }

  render() {
    return (
      <ReactDataGrid
        enableCellSelect={true}
        columns={this.getColumns()}
        rowGetter={this.getRowAt}
        rowsCount={this.getSize()}
        minHeight={500}
        toolbar={<Toolbar onAddRow={this.handleAddRow} />}
        onGridRowsUpdated={this.handleGridRowsUpdated} />);
  }
};