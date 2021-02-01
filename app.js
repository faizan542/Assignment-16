var start = document.getElementById('start')
var reset = document.getElementById('reset')

var h = document.getElementById('hour')
var m = document.getElementById('minute')
var s = document.getElementById('sec')

var startTimer;
function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}


start.addEventListener('click', function(){
    function startInterval(){
        document.getElementById('start').disabled = true
        startTimer = setInterval(function(){
            timer()
        },1000)
    }
    startInterval()
})

reset.addEventListener('click', function(){
    clearInterval(startTimer)
    document.getElementById('start').disabled = false
   h.value = 0
   m.value = 0
   s.value = 0
})