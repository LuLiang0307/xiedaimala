// let buttons=$(".buttons button")
// for(let i=0;i<buttons.length;i++){
//     $(buttons[i]).on('click',function(e){
//         let index = $(e.currentTarget).index()
//         let px = index * -400
//         $("#images").css({transform: 'translate('+px+'px)'})
//         n = index
//         activeButton(buttons.eq(n))

//     })
// }
// var n=0
// var length = buttons.length
// playSlide(n % length)

// let timerId = setTimer()

// $("#window").on('mouseenter',function(){
//     window.clearInterval(timerId)
// })
// $("#window").on('mouseleave',function(){
//     timerId = setTimer()
// })
// function activeButton($button){
//     $button
//     .addClass('red')
//     .siblings('.red').removeClass('red')
// }
// function playSlide(index){
//     buttons.eq(index).trigger('click')
// }
// function setTimer(){
//     return setInterval(()=>{
//         n+=1
//         playSlide(n % length)
//     },1500)
// }
let n,length
init()
setInterval(() => {
    makeLeave(getImage(n,length))
       .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1,length))
    n +=1;
}, 3000)









function getImage(index,length){
    $(`.images img:nth-child(${x(index,length)})`)
}
function x(n, length){
    if(n> length){
        n= n % length
        if(n % length === 0){
            n = length
        }
    }
    return n
}
function makeLeave(index){
    index.removeClass('current').addClass('leave')
    return index
}
function makeEnter(index){
    index.removeClass('leave').addClass('enter')
}
function makeCurrent(index){
    index.removeClass('enter').addClass('current')
}
function init(){
    n = 1
    index = $(".images img").length
    $(".images img:nth-child(1)").addClass('current').siblings().addClass('enter')
}