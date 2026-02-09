const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let amount = document.querySelector("#amount");
let from_select  = document.querySelector("#fromcurry");
let to_select  = document.querySelector("#tocurry");
let convert = document.querySelector("#button1");
let swap    = document.querySelector("#swap");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");

import {countryList} from "/Code.js";

function populate_select(selecet,defaultflag,image){ 
for(let key in countryList){
    let opt = document.createElement("option");
    opt.innerText = key;
    selecet.append(opt);
}
selecet.value = defaultflag ;
    let image1 =  `https://flagsapi.com/${countryList[defaultflag]}/flat/64.png`;
    image.src = image1;
}

function change_flag1(selectedflag,flagimg){
          let countrycode1 = selectedflag.value;
          let countryCode2 = countryList[countrycode1];
          let newsrc2 = `https://flagsapi.com/${countryCode2}/flat/64.png`;
          flagimg.src = newsrc2;         
}

let buttonClick = (e1)=>{
    let current_c_code = from_select.value;
    let current_c_code1 = to_select.value;
    console.log(current_c_code)
}

populate_select(from_select,"USD",img1);
populate_select(to_select,"INR",img2);
from_select.addEventListener("change",()=>{
    change_flag1(from_select,img1);
});
to_select.addEventListener("change",()=>{
    change_flag1(to_select,img2);
});
convert.addEventListener("click",buttonClick);