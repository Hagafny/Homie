import React from 'react';
import update from 'react-addons-update';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import { Editors } from 'react-data-grid-addons';
const { DropDownEditor } = Editors;

//const titles = ['24', '25', '26', '27', '28'];
const titles = [{
  id: '25',
  title: 'Defense Against the Dark Arts',
  value: "25"
}, '24', '26', '27', '28'];
export default class HomieDataGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }

    this.rowGetter = this.rowGetter.bind(this);
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
        key: 'endDate',
        name: 'End Date',
        editable: true
      },
      {
        key: 'homeworkUrl',
        name: 'HW URL',
        editable: true
      },
      {
        key: 'ex',
        name: 'Exercise #',
        editable: true
      },
      {
        key: 'moodleId',
        name: 'Moodle ID',
        editable: true
      },
      {
        key: 'courseId',
        name: 'Course',
        //editable: true
        editor: <DropDownEditor options={titles} />,
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
  rowGetter(i) {
    return this.state.rows[i];
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, { $merge: updated });

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

  rowCount() {
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
    let rowCount = this.rowCount();
    let found = false;
    for (let i = 0; i < rowCount; i++) {
      if (!found && rows[i].id == id) {
        found = true;
        cb(i);
      }

    }
  }
  render() {
    return (
      <ReactDataGrid
        enableCellSelect={true}
        columns={this.getColumns()}
        rowGetter={this.rowGetter}
        rowsCount={this.rowCount()}
        minHeight={500}
        onGridRowsUpdated={this.handleGridRowsUpdated} />);
  }
};