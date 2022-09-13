// CLASSES SELECTED
let sec = document.querySelector(".secs");
let min = document.querySelector(".mins");
let hours = document.querySelector(".hours");
//CREATED FUNCTION TO GET TIMING SETS AND EJJECT IT INTO CSS
function tictoc(){
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();
    
    sec.style.transform = `rotate(${180 + (second * 6)}deg)`;
    min.style.transform = `rotate(${180+ (minute * 6)}deg)`;
    hours.style.transform = `rotate(${180+ (hour * 30)}deg)`;
    
    console.log(`Saat: ${hour} - Dakika: ${minute} - Saniye: ${second}`)
}
//THIS FUNCTION IS GONNA CALLBACK TIME FUNCTION TO REFRESH EVERY 1 SECOND(1000 MS = 1 SECOND)
setInterval(tictoc, 1000);