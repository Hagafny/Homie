import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import update from 'react-addons-update';
import ReactDataGrid from 'react-data-grid';
import HomieDataGridToolbar from './HomieDataGridToolbar';
import HomieDropDownEditor from './HomieDropDownEditor';
import HomieDropDownFormatter from './HomieDropDownFormatter';
import AddFormContainer from './AddFormContainer';

const columnMapper = clm => {
  const column = clm;
  if (Object.prototype.hasOwnProperty.call(column, 'dropdownOptions')) {
    column.editor = <HomieDropDownEditor options={column.dropdownOptions} />;
    column.formatter = <HomieDropDownFormatter options={column.dropdownOptions} />;
  }

  return column;
};

export default class HomieDataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };

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

  getRowIndexById(id, cb) {
    const { rows } = this.state;
    const rowCount = this.getSize();
    let found = false;
    for (let i = 0; i < rowCount; i += 1) {
      if (!found && rows[i].id === id) {
        found = true;
        cb(i);
      }
    }
  }

  getColumns() {
    // Map them from client props
    const { columns } = this.props;
    const dataGridColumns = columns.map(columnMapper);

    // Add the ID column ad the beginning
    dataGridColumns.unshift({
      key: 'id',
      name: 'ID',
      width: 60
    });

    // Add the delete column at the end
    dataGridColumns.push({
      name: 'Delete',
      key: '$delete',
      getRowMetaData: row => row,
      formatter: ({ dependentValues }) => (
        <span>
          <input type="button" onClick={() => this.deleteRow(dependentValues.id)} value="Delete" />
        </span>
      )
    });

    return dataGridColumns;
  }

  getRowAt(i) {
    const { rows } = this.state;
    return rows[i];
  }

  getSize() {
    const { rows } = this.state;
    return rows.length;
  }

  // Get Items ------------------------------------

  fetchItems() {
    const { endpoints } = this.props;
    const fetchItemsURl = endpoints.fetchItems;
    axios.get(fetchItemsURl).then(itemsRes => {
      const items = itemsRes.data;
      this.setState({ rows: items });
    });
  }

  // Add Item -------------------------------------

  handleAddRow() {
    const { gridName } = this.props;
    $(`#add${gridName}Modal`).modal('show');
  }

  save(item, cb) {
    const { gridName } = this.props;
    $(`#add${gridName}Modal`).modal('hide');
    $(`#add${gridName}Form`)[0].reset();

    this.saveOnServer(item, this.showNewItemOnGrid);

    if (typeof cb === typeof Function) cb();
  }

  saveOnServer(itm, cb) {
    let item = itm;
    const { endpoints, extraData } = this.props;
    const saveItemURL = endpoints.saveItem;

    if (extraData != null && Object.prototype.hasOwnProperty.call(extraData, 'saveItem')) {
      const { saveItem } = extraData;
      item = update(itm, { $merge: saveItem });
    }

    const data = JSON.stringify(item);

    const config = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    axios.post(saveItemURL, data, config).then(response => {
      if (parseInt(response.data.status, 10) === 200) {
        item.id = response.data.id;
        cb(item);
      }
    });
  }

  showNewItemOnGrid(item) {
    let { rows } = this.state;
    rows = rows.slice();
    rows = update(rows, { $push: [item] });
    this.setState({ rows });
  }

  // Edit Item ------------------------------------
  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let { rows } = this.state;
    rows = rows.slice();

    for (let i = fromRow; i <= toRow; i += 1) {
      const rowToUpdate = rows[i];
      const updatedRow = update(rowToUpdate, { $merge: updated });
      this.editItem(updatedRow, () => {});

      rows[i] = updatedRow;
    }

    this.setState({ rows });
  }

  editItem(itm, cb) {
    let item = itm;
    const { endpoints, extraData } = this.props;

    const editItemURL = endpoints.editItem;

    if (extraData != null && Object.prototype.hasOwnProperty.call(extraData, 'editItem')) {
      const { editItem } = extraData;
      item = update(itm, { $merge: editItem });
    }
    const data = JSON.stringify(item);

    const config = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    axios.put(editItemURL, data, config).then(response => {
      if (parseInt(response.data.status, 10) === 200) cb();
    });
  }

  // Delete Item ------------------------------------

  deleteRow(id) {
    this.removeRowFromServer(id, () => {
      this.removeRowFromGrid(id);
    });
  }

  removeRowFromServer(id, cb) {
    const { endpoints } = this.props;
    const deleteItemURL = `${endpoints.deleteItem}${id}`;
    axios.delete(deleteItemURL).then(response => {
      if (parseInt(response.data.status, 10) === 200) cb();
    });
  }

  removeRowFromGrid(id) {
    this.getRowIndexById(id, rowIndex => {
      const { rows } = this.state;
      rows.splice(rowIndex, 1);
      this.setState({ rows });
    });
  }

  render() {
    const { gridName, columns } = this.props;
    const toolbar = (
      <HomieDataGridToolbar addRowButtonText={`Add ${gridName}`} onAddRow={this.handleAddRow} />
    );

    return (
      <div>
        <ReactDataGrid
          enableCellSelect
          columns={this.getColumns()}
          rowGetter={this.getRowAt}
          rowsCount={this.getSize()}
          minHeight={300}
          toolbar={toolbar}
          onGridRowsUpdated={this.handleGridRowsUpdated}
        />

        <AddFormContainer gridName={gridName} save={this.save} fields={columns} />
      </div>
    );
  }
}

HomieDataGrid.propTypes = {
  gridName: PropTypes.string.isRequired,
  endpoints: PropTypes.shape({
    deleteItem: PropTypes.string.isRequired,
    editItem: PropTypes.string.isRequired,
    fetchItems: PropTypes.string.isRequired,
    saveItem: PropTypes.string.isRequired
  }).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  extraData: PropTypes.string.isRequired
};
