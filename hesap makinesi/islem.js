let deger1DOM= document.querySelector('#deger1')
let deger2DOM= document.querySelector('#deger2')
let toplaDOM=document.querySelector('#top')
let cikarDOM=document.querySelector('#cik')
let carpDOM=document.querySelector('#carp')
let bolDOM=document.querySelector('#bol')
let islemDOM=document.querySelector('#islem')
let resetDOM=document.querySelector('#reset')

let sonuc=0;

toplaDOM.addEventListener('click',pluss)
 cikarDOM.addEventListener('click', cikarr)
 carpDOM.addEventListener('click',carpp)
bolDOM.addEventListener('click', boll)



function pluss(){
   let sonuc =  parseInt(deger1DOM.value)+ parseInt(deger2DOM.value)
   islemDOM.value=sonuc;
    console.log(sonuc)
}

function cikarr(){
    let sonuc =  parseInt(deger1DOM.value)- parseInt(deger2DOM.value)
    islemDOM.value=sonuc;
     console.log(sonuc)
 }

 function carpp(){
    let sonuc =  parseInt(deger1DOM.value) * parseInt(deger2DOM.value)
    islemDOM.value=sonuc;
     console.log(sonuc)
 }

 function boll(){
    let sonuc =  parseInt(deger1DOM.value)/ parseInt(deger2DOM.value)
    islemDOM.value=sonuc;
     console.log(sonuc)
 }

 resetDOM.addEventListener('click', silme)

 function silme(){
    deger1DOM.value=""
    deger2DOM.value=""
    islemDOM.value=""

 }