let input=document.getElementById("inp")
let btn=document.getElementById("btn")
let qrimg=document.getElementById("qrimg")

// console.log(input,btn,qrimg);

btn.onclick=()=>{
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
    input.value=""
}