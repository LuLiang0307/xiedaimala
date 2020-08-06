let buttons=$(".buttons button")
for(let i=0;i<buttons.length;i++){
    $(buttons[i]).on('click',function(e){
        let index = $(e.currentTarget).index()
        let px = index * -400
        $("#images").css({transform: 'translate('+px+'px)'})
        n = index
        activeButton(buttons.eq(n))

    })
}
var n=0
var length = buttons.length
playSlide(n % length)

let timerId = setTimer()

$("#window").on('mouseenter',function(){
    window.clearInterval(timerId)
})
$("#window").on('mouseleave',function(){
    timerId = setTimer()
})
function activeButton($button){
    $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}
function playSlide(index){
    buttons.eq(index).trigger('click')
}
function setTimer(){
    return setInterval(()=>{
        n+=1
        playSlide(n % length)
    },1500)
}