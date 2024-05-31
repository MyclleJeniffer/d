function total_belanja(){
    let harga=parseInt(document.getElementById("harga").value);
    let jumlah=parseInt(document.getElementById("jumlah").value);
    let total=(harga*jumlah);

    if(jumlah=>100){
        diskon=0.1*total;
    }
    else if(jumlah=>50){
        diskon=0.05*total;
    }
    else{
        diskon=0;
    }
    
    let total2=total-diskon;
    
    document.getElementById("total").value=total;
    document.getElementById("total2").value=total2;

}