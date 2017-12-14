import React from 'react';
import axios from 'axios';
import update from 'react-addons-update';
import ReactDataGrid from 'react-data-grid';
import HomieDataGridToolbar from './HomieDataGridToolbar.jsx';
import HomieDropDownEditor from './HomieDropDownEditor.jsx';
import HomieDropDownFormatter from './HomieDropDownFormatter.jsx';
import AddFormContainer from './AddFormContainer.jsx';

export default class HomieDataGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }

    this.getRowAt = this.getRowAt.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
    this.save = this.save.bind(this);
    this.showNewItemOnGrid = this.showNewItemOnGrid.bind(this);

  }

  componentDidMount() {
    this.fetchItems();
  }


  columnMapper(column) {
    if (column.hasOwnProperty("dropdownOptions")) {
      column.editor = <HomieDropDownEditor options={column.dropdownOptions} />;
      column.formatter = <HomieDropDownFormatter options={column.dropdownOptions} />
    }

    return column;
  }
  getColumns() {
    //Map them from client props
    let dataGridColumns = this.props.columns.map(this.columnMapper);

    //Add the ID column ad the beginning
    dataGridColumns.unshift({
      key: 'id',
      name: 'ID',
      width: 60
    });

    //Add the delete column at the end
    dataGridColumns.push({
      name: 'Delete',
      key: '$delete',
      getRowMetaData: (row) => row,
      formatter: ({ dependentValues }) => (
        <span>
          <a href="javascript:;" onClick={() => this.deleteRow(dependentValues.id)}>Delete</a>
        </span>
      ),
    });

    return dataGridColumns;

  }
  getRowAt(i) {
    return this.state.rows[i];
  }

  getSize() {
    return this.state.rows.length;
  }

  //Get Items ------------------------------------

  fetchItems() {
    let fetchItemsURl = this.props.endpoints.fetchItems;
    axios.get(fetchItemsURl)
      .then(itemsRes => {
        let items = itemsRes.data;
        this.setState({ rows: items });
      })
  }

  //Add Item -------------------------------------

  handleAddRow({ newRowIndex }) {
    $(`#add${this.props.gridName}Modal`).modal('show');
  }

  save(item, cb) {
    $(`#add${this.props.gridName}Modal`).modal('hide');
    $(`#add${this.props.gridName}Form`)[0].reset();

    this.saveOnServer(item, this.showNewItemOnGrid);

    if (typeof cb === typeof Function)
      cb();
  }

  saveOnServer(item, cb) {
    var saveItemURL = this.props.endpoints.saveItem;
    if (this.props.hasOwnProperty("extraData") && this.props.extraData.hasOwnProperty("saveItem")) {
      let extraData = this.props.extraData.saveItem;
      item = update(item, { $merge: extraData });
    }

    var data = JSON.stringify(item);

    var config = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    axios.post(saveItemURL, data, config).then((response) => {
      if (response.data.status == 200) {
        item.id = response.data.id;
        cb(item);
      }
    });
  }

  showNewItemOnGrid(item) {
    let rows = this.state.rows.slice();
    rows = update(rows, { $push: [item] });
    this.setState({ rows });
  }


  //Edit Item ------------------------------------
  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, { $merge: updated });
      this.editItem(updatedRow, () => {
      });

      rows[i] = updatedRow;
    }

    this.setState({ rows });
  }

  editItem(item, cb) {
    var editItemURL = this.props.endpoints.editItem;
    var data = JSON.stringify(item);

    if (this.props.hasOwnProperty("extraData") && this.props.extraData.hasOwnProperty("editItem")) {
      let extraData = this.props.extraData.editItem;
      item = update(item, { $merge: extraData });
    }

    var config = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    axios.put(editItemURL, data, config).then((response) => {
      if (response.data.status == 200)
        cb();
    });
  }

  //Delete Item ------------------------------------

  deleteRow(id) {
    this.removeRowFromServer(id, () => {
      this.removeRowFromGrid(id);
    })
  }

  removeRowFromServer(id, cb) {
    var deleteItemURL = `${this.props.endpoints.deleteItem}${id}`;
    axios.delete(deleteItemURL)
      .then((response) => {
        if (response.data.status == 200)
          cb();
      });
  }

  removeRowFromGrid(id) {
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

  render() {
    return (
      <div>
        <ReactDataGrid
          enableCellSelect={true}
          columns={this.getColumns()}
          rowGetter={this.getRowAt}
          rowsCount={this.getSize()}
          minHeight={300}
          toolbar={<HomieDataGridToolbar addRowButtonText={`Add ${this.props.gridName}`} onAddRow={this.handleAddRow} />}
          onGridRowsUpdated={this.handleGridRowsUpdated} />

        <AddFormContainer gridName={this.props.gridName} save={this.save} fields={this.props.columns} />
      </div>);
  }
};