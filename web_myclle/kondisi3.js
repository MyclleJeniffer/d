let nilaifisika=parseInt(prompt("nilai Fisika"));
let nilaibinggris=parseInt(prompt("nilai B Inggis"));
let nilaimtk=parseInt(prompt("nilai Matematika"));
let ratarata=(nilaibinggris+nilaifisika+nilaimtk)/3;
if(ratarata>=90){
    nilai="A"
}
else if(ratarata>=80){
    nilai="B"
}
else if(ratarata>=70){
    nilai="C"
}
else{
    nilai="D"
}
document.write("ratarata "+ratarata+"</br>")
document.write(" nilai "+nilai)