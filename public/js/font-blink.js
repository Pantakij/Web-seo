$(document).ready(function(){

    var trigger = true;
    var defaultColor = $($('[name="blink"]')[0]).css('color');

    setInterval(function(){ 
        if(trigger){
            $('[name="blink"]').css('color', 'white')
        }
        else{
            $('[name="blink"]').css('color', defaultColor)
        }
        trigger = !trigger
    }, 1000)
})