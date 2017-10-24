import React from 'react'

const RemoveClassModalButton = (props) =>
    <button type="button" style={{ color: "red" }}
        className="close" aria-label="Close"
        data-toggle="modal" data-target="#removeClassModal">
        <span aria-hidden="true">&times;</span>
    </button>


export default RemoveClassModalButton;