// const startingMinutes = 10;
// let time = startingMinutes * 360; // total seconds

// const countdownEl = document.getElementById('countdown'); // links to time text

// setInterval(updateCountdown, 1000); // update downcountdown function runs every 1000 ms

// function updateCountdown(){
//     const minutes = Math.floor(time/60); // returns highest integer that is <= than passed int
//     // so if time = 300, 300/60 = 5. so 5 minutes is what the clock would show
//     let seconds = time % 60;

//     // seconds = seconds < 10 ? '0' + seconds : seconds; worry about this later

//     countdownEl.innerHTML = `${0}: ${minutes}: ${seconds}`; // update content of clock
//     time--; 
// }


let totalseconds = 23400; // total seconds

const countdownEl = document.getElementById('countdown'); // links to clock text

setInterval(updateCountdown, 1000); // update downcountdown function runs every 1000 ms

function updateCountdown(){ // 23399 test
    hours = Math.floor(totalseconds/3600); // = 6
    minutes = Math.floor(totalseconds/60) % 60; // convert seconds to minutes, then modulus out all the hours
    seconds = totalseconds - (hours * 3600) - (minutes * 60); // at 6 hr 29 min this equals 59 seconds
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10? '0' + minutes: minutes;

    countdownEl.innerHTML = `${hours}:${minutes}:${seconds}`; // this successfully starts at 6:30:00
    // then gets all boogery 
    totalseconds--; 
}