import React from 'react'

export default class RemoveClassModalButton extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let {id, title} = this.props;
        id = id.substr(1); //remove the precedding 'a'
        $(".removeClassNameFiller").text(title);
        $("#removeClassModal").attr('data-assignmentId', id).modal('show');
    }

    render() {
        return (
            <button type="button" style={{ color: "red" }}
                className="close" aria-label="Close" onClick={this.onClick}>
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
}
