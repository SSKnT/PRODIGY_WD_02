var microsec = document.getElementById('microsec');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var interval;

var microsec_counter = 0;
var seconds_counter = 0;
var minutes_counter = 0;

var last_pressed_btn = false;

start.addEventListener('click', function(){
  if(last_pressed_btn === false){
  interval = setInterval(start_Timer, 10);
  }
  last_pressed_btn = true;
});

stop.addEventListener('click', function(){
  clearInterval(interval);
  last_pressed_btn = false;
})

reset.addEventListener('click', function(){
interval = clearInterval(interval); 
microsec_counter = 0;
seconds_counter = 0;
minutes_counter = 0;
microsec.innerHTML = '00';
seconds.innerHTML = '00';
minutes.innerHTML = '00';
last_pressed_btn = false;
});

function start_Timer(){
microsec_counter++;
if(microsec_counter < 10)
  microsec.innerHTML = '0' + microsec_counter;
else
  microsec.innerHTML = microsec_counter;

if(microsec_counter == 100)
{
  microsec_counter = 0;
  seconds_counter++;
}
if(seconds_counter < 10)
  seconds.innerHTML = '0' + seconds_counter;
else
  seconds.innerHTML = seconds_counter;

if(seconds_counter == 60){

  seconds_counter = 0;
  minutes_counter++;
}
if(minutes_counter < 10)
  minutes.innerHTML = '0' + minutes_counter;
else
  minutes.innerHTML = minutes_counter;

}