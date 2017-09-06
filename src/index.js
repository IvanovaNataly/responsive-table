//let $ = require("jquery");

//require("../css/styles.scss");

class ResponsiveTable {
    getData(){
        fetch("./data/all-devices.json")
            .then( (response) => {if (response.ok) return response.json()
                                    else throw new Error ("No data!")
                                })
            .then( (data) => this.renderRows(data) )
    }

    renderRows(data) {
        console.log(data);
        let table = $(`<ul class="table-ul"></ul>`);
        let tableRows = data.map( device => `
            <li class="row">
                <div>${device.amount}
                </div><div>${device.moreInfo.mgmt}
                </div><div>${device.moreInfo.reg}
                </div><div>${device.subtype}
                </div><div>${device.type}</div>
            </li>` )
        table.prepend(tableRows);
        this.element.append(table);
    }

    render() {
        this.element = $(`<div class="table-container"></div>`);
        let titles = $(`<ul class="table-head"><li class="head-row">
                <div>Name
                </div><div>Name
                </div><div>Name
                </div><div>Title
                </div><div>Title</div>
            </li>
            </ul>` )
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

// (function($){
//      $(window).on("load",function(){
//          $(".table-ul").mCustomScrollbar({
//              axis:"yx" // vertical and horizontal scrollbar
//          });
//      });
// })(jQuery);

