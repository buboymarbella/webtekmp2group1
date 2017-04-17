var i = JSON.parse(localStorage.getItem('inventory'));
generateTable(i);

function generateTable(i) {
    var table = "<table><caption>Inventory</caption><tr><th>Quantity</th><th>Item Description</th><th>Stocks Available</th></tr>";
    for (var ii = 0; ii < i.length; ii++) {
        table += "<tr><td>" + i[ii].quantity + "</td><td>" + i[ii].description + "</td><td>" + i[ii].quantity + "</td></tr>";
    }
    
    table += "</table>";
    
    var d = document.getElementById("container");
    d.innerHTML = table;
}

