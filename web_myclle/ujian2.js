function tiket(){
    let jarak=parseInt(document.getElementById("jarak"))
    let kelas=parseInt(document.getElementById("kelas"))
    let jumlah=parseInt(document.getElementById("jumlah"))
    let asuransi=10000*jarak;
    let tiket=10000*jarak;
    if(jumlah=>2){
        diskon=0.05*tiket;
    }
    else{
        diskon=0;
    }
    
    if(kelas="ekonomi"){
        tambahan=tiket*0.1;
    }
    else if(jumlah=>50){
        diskon=0.05*total;
    }
    else{
        diskon=0;
    }
    let total=(tiket+asuransi+tambahan)-diskon;
}