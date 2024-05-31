let a=parseInt(prompt("Jumlah Pembelian"))
let b=parseInt(prompt("Uang yang Dibayar"))
if(a=>100000){
    diskon=0.25*a;
}
else if(b=>50000){
    diskon=0.1*a;
}
else{
    diskon=0;
}
let susuk=b(a-diskon)
document.write("Diskon "+diskon+"</br>");
document.write("Susuk "+susuk);