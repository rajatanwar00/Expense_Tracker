

function response(){
    
let tablen=document.querySelector('#expense-table');

let ename=document.querySelector('#name');
let edate=document.querySelector('#date');
let eamount=document.querySelector('#amount');


    let adname=ename.value;
    let addate=edate.value;
    let adamount=eamount.value;

    let template= `
                    <tr>
                        <td>${adname}</td>
                        <td>${addate}</td>
                        <td>${adamount}</td>
                        <td><input type="button" value="remove" onclick="removerow(this)" ></td>
                    </tr>`;

    tablen.innerHTML +=template;
    
    ename.value="";
    edate.value="";
    eamount.value="";

    calculate_sum();
}

function removerow(rid){
    let idn=rid.parentNode.parentNode.rowIndex;
    document.getElementById("expense-table").deleteRow(idn);
    calculate_sum();
}

function calculate_sum(){
    
    var t = document.getElementById("expense-table");
    
    var sum=0;
    
    for(var i=1,row;row=t.rows[i];i++){
        
        sum+=parseInt(row.cells[2].innerHTML);
    }

    
    var field=document.getElementById("texpense");
    field.value=sum;
}

