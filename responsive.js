

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
                    </tr>`;

    tablen.innerHTML +=template;
    
    ename.value="";
    edate.value="";
    eamount.value="";
}

function removerow(rid){
    let idn=rid.parentNode.parentNode.rowIndex;
    document.getElementById("expense-table").deleteRow(idn);
}

function calculate_sum(){
    
}

