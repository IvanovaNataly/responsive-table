
const cl = console.log;

class ResponsiveTable {
    getData(){
        $.get("./data/all-devices.json")
            .then( (data) => this.renderRows(data) )
    }

    createTableScrolls() {
        let tableTopHeader = document.getElementById('tableHead');
        let rightColumn = document.getElementById('rightColumn');
        let tableBody = document.getElementById('tableBody');

		tableBody.addEventListener('scroll', function (e) {
			tableTopHeader.scrollLeft = e.target.scrollLeft;
        }, true);

		tableBody.addEventListener('scroll', function (e) {
			$("#rightColumn").scrollTop(e.target.scrollTop);
		}, true);
    }

    renderRows(data) {
        console.log(data);
        let tableBodyCont = $(`<div class="table-body-container"></div>`);

		let rightColumn = $(`<ul class="right-column" id="rightColumn"></ul>`);
		let rightRows = data.map( device => `
            <li class="row">
                <div class="right-column-div">${device.type} 
                </div>
            </li>` );
        rightColumn.prepend(rightRows);


        let table = $(`<ul class="table-body" id="tableBody" ></ul>`);
        let tableRows = data.map( device => `
            <li class="row">
                </div><div>${device.moreInfo.prop}
                </div><div>${device.moreInfo.reg}
                </div><div>${device.subtype}
                </div><div>${device.amount}</div>
            </li>` );
        table.prepend(tableRows);

		tableBodyCont.append(rightColumn);
		tableBodyCont.append(table);

        this.element.append(tableBodyCont);
        this.createTableScrolls();
    }

    render() {
        this.element = $(`<div class="table-container"></div>`);
        let titles = $(`<div class="table-head-container"><ul class="table-head" id="tableHead">
                <li class="head-row">
                    <div>Name
                    </div><div>Name
                    </div><div>Name
                    </div><div>Title
                    </div>
                </li>
            </ul></div>` );
        this.element.append(titles);
        this.getData();
        return this.element;
    }
}

function createTable() {
    let table = new ResponsiveTable();
    $(".table-wrapper").prepend(table.render());
}

createTable();



