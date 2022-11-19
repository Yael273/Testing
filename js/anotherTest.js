
var isColor = true

function changeColor() {
    var elhead = document.querySelector('h1')
    
    if (isColor){
        elhead.style.color = 'hotpink'
        isColor = false
    } else {
        elhead.style.color = 'rgb(247, 229, 205)'
        isColor = true
    }
}

// setInterval(changeColor, 500)

function printTime(){
    var elTime = document.querySelector('.time')
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    elTime.innerHTML = hours + ":" + mins + ":" + secs;

}
setInterval(printTime, 1000);