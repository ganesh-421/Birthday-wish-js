var birthDate, myBd;
var close = document.querySelector('.close');
var cnf = document.querySelector('#my-canvas');
var remDays = 0, remHours = 0, remMinutes = 0, remSeconds = 0;

// confetti data
var confettiElement = document.getElementById('my-canvas');
var confettiSettings = { 
    target: confettiElement,
    max: 1000,
};
// front end data:
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
var confetti = new ConfettiGenerator(confettiSettings);
swal({
  title: "Enter your birthdate",
  text: "If you don't enter your birthdate, it will take today's date as your birthdate",
  content: "input"
})
.then((value) => {
  if(value)
  {
    myBd = new Date(value);
    myBd.setHours(0, 0, 0, 0);
  }
  else {
    myBd = new Date();
    myBd = new Date(myBd.setSeconds(myBd.getSeconds() + 10));
  }
});
close.onclick = function() {
  cnf.classList.remove('active');
}
confetti.render();
var timer  = setInterval(() => {
  console.log(myBd)
    now = new Date().getTime();
    diff = myBd - now;
    if(diff) {
      remDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      remHours = Math.floor((diff % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
      remMinutes = Math.floor((diff % (1000 * 60 * 60))/(1000 * 60));
      remSeconds = Math.floor((diff % (1000 * 60))/1000);
    } 
    days.textContent = Math.abs(remDays);
    hours.textContent = Math.abs(remHours);
    minutes.textContent = Math.abs(remMinutes);
    seconds.textContent = Math.abs(remSeconds);
    if(diff < 0) {
      cnf.classList.add('active');
      document.querySelector('.wish-here').textContent = "Happy Birthday";
      clearInterval(timer);
      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
    }
    
}, 1000)
