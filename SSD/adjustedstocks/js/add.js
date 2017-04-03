var index = 1;
    function insertRow(){
                var table=document.getElementById("myTable");
                var row=table.insertRow(table.rows.length);
                var cell1=row.insertCell(0);
                var t1=document.createElement("input");
                    t1.id = "Item"+index;
                    cell1.appendChild(t1);
                var cell2=row.insertCell(1);
                var t2=document.createElement("input");
                    t2.id = "Quantity"+index;
                    cell2.appendChild(t2);
                var cell3=row.insertCell(2);
                var t3=document.createElement("form");
                    t3.id = "myform"+index;
                    cell3.appendChild(t3);
                var cell4=row.insertCell(3);
                
          index++;

    }