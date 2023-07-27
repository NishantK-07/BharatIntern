const convert=()=>{
const getpara=document.getElementById('temp').value;

const optionselected=document.getElementById('selectopt');

const resulttemp= selectopt.options[optionselected.selectedIndex].value;

const converttofaher=(cel)=>{
let fahrenheit = Math.round((cel*9/5)+32);
return fahrenheit;
}


const converttocelsius=(feh)=>{
    let celsius = Math.round((feh-32)*5/9);
    return celsius;
    }


let result;

if(resulttemp=='cel'){
    result= converttocelsius(getpara);
    document.getElementById('result').innerHTML=`${result}'Celsius`;
}else{
    result= converttofaher(getpara);
    document.getElementById('result').innerHTML=`${result}'Fahrenheit`;
}
}