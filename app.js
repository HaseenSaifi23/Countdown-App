let last_date = "DEC/10/2024 05:00 PM";
let D_date = document.querySelector(".date");
D_date.innerHTML = last_date;
let inputs = document.querySelectorAll("input");

let work = setInterval(() => {
  let Ex_date = new Date(last_date);
  let curr = new Date();
  let Difference = (Ex_date - curr) / 1000;

  if (Difference < 0) {
    clearInterval(work);
    alert("Time is complete");
    return;
  }
  inputs[0].value = Math.floor(Difference / 3600 / 24); // day
  inputs[1].value = Math.floor(Difference / 3600) % 24; //Hours
  inputs[2].value = Math.floor(Difference / 60) % 60; //Min
  inputs[3].value = Math.floor(Difference) % 60; // second
  console.log(Math.floor(Difference));
}, 1000);
