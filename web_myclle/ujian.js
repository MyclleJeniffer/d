function nilai_siswa() {
    let praktik1=parseInt(document.getElementById("praktik1").value);
    let praktik2=parseInt(document.getElementById("praktik2").value);
    let sumatif1=parseInt(document.getElementById("sumatif1").value);
    let sumatif2=parseInt(document.getElementById("sumatif2").value);

    let praktik=(praktik1+praktik2)/2;

    let teori=(sumatif1+sumatif2)/2;

    let akhir=(praktik*0.7)+(teori*0.3);

    if(akhir=>90){
        huruf="A";
    }
    else if(akhir=>80){
        huruf="B";
    }
    else if(akhir=>70){
        huruf="C";
    }
    else if(akhir=>60){
        huruf="D";
    }
    else{
        huruf="E";
    }
    document.getElementById("praktik").value=praktik;
    document.getElementById("teori").value=teori;
    document.getElementById("akhir").value=akhir;
    document.getElementById("huruf").value=huruf;

}
