var btn = document.getElementById("check")
var bg = document.getElementById("body")
var image =document.querySelector(".img2")
var navbarh1 =document.getElementById("navh1")
var themeh1 =document.getElementById("themeh1")
var navbar =document.querySelector(".narbar")
var acnigth=document.querySelector(".acnigth")
var lightnight = document.querySelector(".lightnight")
btn.addEventListener("change",function(event){
    if(this.checked){
        image.style.display="block"
        themeh1.textContent="Night"
        acnigth.style.display="block"
        acnigth.style.opacity="0.4"
        lightnight.style.display="block"
        lightday.style.display="none"
    }
    else{
        image.style.display="none"
        themeh1.textContent="Day"
        acnigth.style.display="none"
        lightnight.style.display="none"
        lightday.style.display="block"
    }

})
var acbtn =document.getElementById("Ac-check")
var aconimg=document.querySelector(".ac-on")
var acoff=document.querySelector(".Ac")
var acname=document.querySelector(".acname")
var acoffsvg=document.querySelector(".ac-off2")
var temp=document.getElementById("hometemp")
var divtemp=document.querySelector(".temp")
acbtn.addEventListener("change",function(event){
    if(this.checked)
    {
        aconimg.style.display="block"
        acoff.style.display="none"
        divtemp.style.background="linear-gradient(180deg,white,rgba(131, 196, 212, 0.87))"
        temp.textContent="Home temperature 22'C"
    }
    else
    {
        aconimg.style.display="none"
        acoff.style.display="block"
        divtemp.style.background="linear-gradient(180deg,white,rgba(255, 129, 129, 0.87))"
        temp.textContent="Home temperature    33'C"
    }
})
var date = new Date();
const todaydate = document.getElementById("Date")
const todaytime = document.getElementById("time")
const todayday = document.getElementById("Day")
const noofday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function printDate()
{
    var date = new Date();
    var day = date.getDate();
    var month= date.getMonth()+1;
    var year = date.getFullYear();
    todaydate.innerHTML= day + "/" + month + "/" + year;
}
printDate();
function printDay(){
    var date = new Date();
    var today = date.getDay();
    var day = noofday[today];
    todayday.innerHTML=day;
}
printDay();
function printtime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var period = "AM";
    if(hour == 0){
        hour=12;
    }
    if (hour>12)
    {
        hour=hour-12;
        period="PM";
    }
    if(hour < 10)
    {
        hour = "0"+ hour;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    var time = hour + ":" + min + ":" + sec + " " + period;
    document.getElementById("time").innerHTML=time;
    setTimeout(printtime,1000);
}
printtime();
var lightday = document.querySelector(".lightday")
var lightglow = document.querySelector(".lightglow")
var lighton = document.getElementById("lighton")
lighton.addEventListener("change",function(event)
{
    if(this.checked)
    {
        lightglow.style.display="inline-block"
        lightday.style.display="none"
    }
    else
    {
        lightglow.style.display="none"
        lightday.style.display="inline-block"
    }
})
