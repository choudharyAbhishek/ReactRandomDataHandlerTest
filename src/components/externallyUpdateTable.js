/* updateTableView() {
    let totalRows = this.state.numberOfRows;
    let columnList = this.getColumnSpecifications();
    let rowView = [];
    let columnView = [];
    if (totalRows > 0) {
        for (var i = 0; i < totalRows; i++) {
            rowView.push(<tr id="rowContainer"><td id="columnContainer"></td></tr>);
        }
    }
    //const table = document.createElement("table")
            for(let i=0; i<totalRows; i++){
                var newRow = table.insertRow();
                for(let j=0; j<totalColumn; j++){
                    //var column = document.createElement("td");
                    newRow.insertCell();
                    console.log("here");
                }
                //table.appendChild(row);
            }
                    var rows = [];
            this.state.numberOfRows.forEach(function(numberOfRows) {
                rows.push(
                  <tr />
                    <td><SomePopulationComponent /></td>
                    <td><SomeZoneComponent /></td>
                  </tr>
                );
            }.bind(this));
    //return table;
    return rowView;
} */
