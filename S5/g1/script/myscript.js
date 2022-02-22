/*let todayDate = new Date();// data di oggi
document.write(todayDate);

let day = todayDate.getDate();
console.log(day)

let year = todayDate.getFullYear();
console.log(year)

let month = todayDate.getMonth();
console.log(month)

let hour = todayDate.getHours();
console.log(hour)

let min = todayDate.getMinutes();
console.log(min)

let sec = todayDate.getSeconds();
console.log(sec)

let millSec = todayDate.getMilliseconds();
console.log(millSec)

todayDate.setFullYear(2018);
console.log(todayDate)

let iso = new Date("2000-11-25T10:59:59Z");
//console.log(iso)


document.write(iso.toLocaleDateString("it-IT", iso));
*/


/* questa funzione è con setTiemout
function time(){
    let data = new Date();
    let hh = data.getHours();
    let mm = data.getMinutes();
    let ss = data.getSeconds();
    let ora = hh + ":" + mm + ":" + ss;
    document.getElementById("clock").innerText = ora;
    window.setTimeout("time()", 1000);

}

*/
//questa funzione è con setInterval
function time(){
let data = new Date();
document.getElementById("clock").innerHTML = data.toLocaleTimeString();
}

setInterval(time,1000);




