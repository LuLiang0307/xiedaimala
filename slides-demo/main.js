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
$(".images img:nth-child(1)").addClass('current').siblings().addClass('enter')
let n = 1
let index = $(".images img").length
setInterval(() => {
    $(`.images img:nth-child(${x(n,index)})`).removeClass('current').addClass('leave')
       .one('transitionend',(e)=>{
        console.log(111)
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.images img:nth-child(${x(n+1,index)})`).removeClass('enter').addClass('current')
    n +=1;
}, 3000)

function x(n, index){
    if(n> index){
        n= n % index
        if(n % index === 0){
            n = index
        }
    }
    return n
}
