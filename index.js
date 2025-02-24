let totalBalance=0;
let totalDiposit=0;
let totalWithdraw=0;

document.getElementById('two2').innerHTML=0;
document.getElementById('three3').innerHTML=0;
document.getElementById('four4').innerHTML=0;
document.getElementById('inputAmount').value='';

function diposit(){
    const amountInput=document.getElementById('inputAmount');
    const amount=parseFloat(amountInput.value);
    totalDiposit+=amount;
    totalBalance+=amount;
    document.getElementById('two2').innerHTML=totalDiposit;
    document.getElementById('four4').innerHTML=totalBalance;
    document.getElementById('inputAmount').value='';

}
function withdraw(){
    const amountInput=document.getElementById('inputAmount');
    const amount=parseFloat(amountInput.value);
    if(totalBalance<amount){
        alert("Insufficient Balance!!!");
        document.getElementById('inputAmount').value='';
        return
    }
    totalWithdraw+=amount;
    totalBalance-=amount;
    document.getElementById('three3').innerHTML=totalWithdraw;
    document.getElementById('four4').innerHTML=totalBalance;
    document.getElementById('inputAmount').value='';
}

