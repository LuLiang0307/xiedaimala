
$("#button1").on('click',function(){
    $("#wrapper").css({
        transform: 'translateX(0)'
    })
})
$("#button2").on('click',function(){
    $("#wrapper").css({
        transform: 'translateX(-400px)'
    })
})
$("#button3").on('click',function(){
    $("#wrapper").css({
        transform: 'translateX(-800px)'
    })
})
$("#button4").on('click',function(){
    $("#wrapper").css({
        transform: 'translateX(-1200px)'
    })
})
$("#button5").on('click',function(){
    $("#wrapper").css({
        transform: 'translateX(-1600px)'
    })
})
function ClickButton(){
    var n=1;
    $('"#button'+n+'"').on('click',function(){
        
    })
}