import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/ComponentStyles.css';
class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: 0,
            numberOfColumns: '',
            spaceBetweenRows: 0,
            spaceBetweenBoxes: 0,
            errorText: '',
            errorValue: false
        }
        this.updateRowsCount = this.updateRowsCount.bind(this);
        this.updateColumnCount = this.updateColumnCount.bind(this);
        this.updateRowsGap = this.updateRowsGap.bind(this);
        this.updateBoxesGap = this.updateBoxesGap.bind(this);
        this.newRef = React.createRef();
    }

    createTable() {
        var num_rows = this.state.numberOfRows;
        //var num_rows = 6;
        var num_cols = this.getColumnSpecifications();
        var theader = '<table border="1">\n';
        var tbody = '';
        for (var k = 0; k < num_cols.length; k++) {
        for (var i = 0; i < num_rows; i++) {
            tbody += '<tr id="rowContainer">';
                for (var j = 0; j < num_cols[k]; j++) {
                    tbody += '<td id="columnContainer">';
                    //tbody += 'Cell ' + i + ',' + j;
                    tbody += '</td>';
                    //k++
                }
            }
            tbody += '</tr>\n';
        }
        var tfooter = '</table>';
        //document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
        ReactDOM.findDOMNode(this.refs.tableView).innerHTML = theader + tbody + tfooter;
    }

    updateRowsCount(e) {
        if (e.target.value > 0)
            this.setState({
                numberOfRows: e.target.value
            });
        else {
            this.setState({
                errorText: 'please add a larger number for rows',
                errorValue: true
            });
        }
    }

    updateColumnCount(e) {
        this.setState({
            numberOfColumns: e.target.value
        });
    }

    updateRowsGap(e) {
        if (e.target.value >= 0)
            this.setState({
                spaceBetweenRows: e.target.value
            });
        else {
            this.setState({
                errorText: 'please add a larger number for rows gap',
                errorValue: true
            });
        }
    }

    updateBoxesGap(e) {
        if (e.target.value >= 0)
            this.setState({
                spaceBetweenBoxes: e.target.value
            });
        else {
            this.setState({
                errorText: 'please add a larger number for boxes gap',
                errorValue: true
            });
        }
    }

    getColumnSpecifications() {
        let columnText = this.state.numberOfColumns;
        let columnSplits = columnText.split(',');
        return (columnSplits)
    }

    componentDidMount() {
        this.createTable();
    }

    componentDidUpdate() {
        this.createTable();
    }

    render() {
        return (
            <div id="mainContainer">
                {this.state.errorValue && <h2>{this.state.errorText}</h2>}
                <div id="userInputsContainer">
                    <input type="number" id="userInputs" placeholder="No. of rows" onChange={this.updateRowsCount} />
                    <input type="text" id="userInputs" placeholder="column string" onChange={this.updateColumnCount} />
                    <input type="number" id="userInputs" placeholder="space between rows" onChange={this.updateRowsGap} />
                    <input type="number" id="userInputs" placeholder="space between boxes" onChange={this.updateBoxesGap} />
                </div>
                <div >
                    <div ref="tableView"></div>
                </div>
            </div>
        );
    }
}

export default UserInput;
