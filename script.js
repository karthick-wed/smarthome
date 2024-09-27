var btn = document.getElementById("check")
var bg = document.getElementById("body")
var image =document.querySelector(".img2")
var navbarh1 =document.getElementById("navh1")
var themeh1 =document.getElementById("themeh1")
var navbar =document.querySelector(".narbar")
var acnigth=document.querySelector(".acnigth")
btn.addEventListener("change",function(event){
    if(this.checked){
        image.style.display="block"
        navbar.style.background="#242424"
        bg.style.backgroundColor="#000000"
        navbarh1.style.color="white"
        themeh1.style.color="white"
        themeh1.textContent="Night"
        acname.style.color="white"
        acoffsvg.style.display="block"
        acnigth.style.display="block"
        acnigth.style.opacity="0.4"
    }
    else{
        image.style.display="none"
        navbar.style.background="linear-gradient(180deg,white,rgba(255, 173, 129, 0.87))"
        bg.style.backgroundColor="white"
        navbarh1.style.color="black"
        themeh1.style.color="black"
        themeh1.textContent="Day"
        acname.style.color="black"
        acoffsvg.style.display="none"
        acnigth.style.display="none"
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
function startTime(){
    let today = new Date();
    let day =today.getDate();
    let month = today.getMonth() + 1;
    let year =today.getFullYear();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    m= checkTime(m);
    s = checkTime(s);
    let options = {
        hours:'numeric',
        minute:'numeric',
        hours12:true
    };
    let TimeString = today.toLocaleDateString('en-US',options);
    document.getElementById("date").innerHTML=day+"/"+month+"/"+year;
    document.getElementById("time").innerHTML=TimeString;
    let t=setTimeout(function(){ startTime()},500);
}
    function checkTime(i) {
        if (i<10){ i = "0" + i };
        return i;
    }
