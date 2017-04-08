$(document).ready(function(){

    var trigger = true;
    var defaultColor = $($('[name="blink"]')[0]).css('color');

    setInterval(function(){ 
        if(trigger){
            $('[name="blink"]').css('color', 'white')
            $('[name="blink"]').css('transform', 'rotate(-15deg)')
        }
        else{
            $('[name="blink"]').css('color', defaultColor)
            $('[name="blink"]').css('transform', 'rotate(15deg)')
        }
        trigger = !trigger
    }, 1000)
})