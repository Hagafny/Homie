import React from 'react';
import update from 'react-addons-update';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import HomieDataGridToolbar from './HomieDataGridToolbar.jsx';
import HomieDropDownEditor from './HomieDropDownEditor.jsx';
import HomieDropDownFormatter from './HomieDropDownFormatter.jsx';
import AddFormContainer from './AddFormContainer.jsx';

const courses = [
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
      rows: [],
      courses: courses
    }

    this.getRowAt = this.getRowAt.bind(this);
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
    this.save = this.save.bind(this);
    this.showNewItemOnGrid = this.showNewItemOnGrid.bind(this);

  }

  componentDidMount() {
    //Move to different function!
    this.fetchItems();
    // let rows = [
    //   {
    //     "id": "124", "endDate": "Monday, 28 May 2018, 11:55 PM",
    //     "homeworkUrl": "http://moodle.idc.ac.il/2017/pluginfile.php/123451/mod_assign/introattachment/0/Ex7.pdf?forcedownload=1",
    //     "ex": "1", "moodleId": "", "courseId": "25"
    //   },

    //   {
    //     "id": "122", "endDate": "Friday, 24 August 2018, 11:45 PM",
    //     "homeworkUrl": "http://moodle.idc.ac.il/2017/pluginfile.php/123451/mod_assign/introattachment/0/Ex7.pdf?forcedownload=1",
    //     "ex": "1", "moodleId": "", "courseId": "26"
    //   }]

    // this.setState({ rows: rows });
  }

  fetchItems() {
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
        width: 60
      },
      {
        key: 'courseId',
        name: 'Course',
        editor: <HomieDropDownEditor options={courses} />,
        formatter: <HomieDropDownFormatter options={courses} value={"theFuck"} />
      },
      {
        key: 'ex',
        name: 'Exercise #',
        width: 100,
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
    $('#addModal').modal('show');
  }

  save(assignment) {
    $('#addModal').modal('hide');
    $('#addForm')[0].reset();

    this.saveOnServer(assignment, this.showNewItemOnGrid);
  }

  saveOnServer(assignment, cb) {
    var url = "/api/assignments/";
    var data = JSON.stringify(assignment);

    var config = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    axios.post(url, data, config).then((response) => {
      if (response.data.status == 200) {
        assignment.id = response.data.id;
        cb(assignment);
      }
    });
  }

  showNewItemOnGrid(item) {
    let rows = this.state.rows.slice();
    rows = update(rows, { $push: [item] });
    this.setState({ rows });
  }

  render() {
    return (
      <div>
        <ReactDataGrid
          enableCellSelect={true}
          columns={this.getColumns()}
          rowGetter={this.getRowAt}
          rowsCount={this.getSize()}
          minHeight={500}
          toolbar={<HomieDataGridToolbar addRowButtonText={"Add Assignment"} onAddRow={this.handleAddRow} />}
          onGridRowsUpdated={this.handleGridRowsUpdated} />
        <AddFormContainer save={this.save} courses={this.state.courses} />
      </div>);
  }
};