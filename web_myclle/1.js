let jabatan=prompt("masukan jabatan");
switch (jabatan) {
    case "direktur":
        gaji=20000000;
        break;
    case "manager":
        gaji=10000000;
    default:
        gaji=7500000;
        break;
}
document.write("jabatan: "+jabatan+"</br");
document.write("gaji "+gaji);