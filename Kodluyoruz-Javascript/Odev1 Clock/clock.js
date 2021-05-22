let firstName=prompt("Lütfen adınızı girin:")
let myName=document.querySelector("#myName");
myName.innerHTML=`${firstName}`

let myVar = setInterval(showTime, 1000);
function showTime()
{
    let d=new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let day = showDay(d.getDay());

    if (hour < 10) 
    {
        hour = '0' + hour;
    } 
    else if (minute < 10)
    {
        minute = '0' + minute;
    } 
    else if (second < 10)
    {
        second = '0' + second;
    }
    else if (day) {
        day = 1 + day;
    }
    function showDay(day) {
        if (day == 1) {
            day = "Pazartesi";
          } else if (day == 2) {
            day = "Salı";
          } else if (day == 3) {
            day = "Çarşamba";
          } else if (day == 4) {
            day = "Perşembe";
          } else if (day == 5) {
            day = "Cuma";
          } else if (day == 6) {
            day = "Cumartesi";
          } else if (day == 7) {
            day = "Pazar";
          }

    let getTime =document.querySelector("#myClock");
    getTime.innerHTML=`${hour}:${minute}:${second}:${day}`
}
}