let $buttons = $("#buttons > button")
let $slides = $("#slides")
let $images = $("#slides > img")

let current = 0
$slides.css({transform:'translateX(-400px)'})
makeFakeSlides()
bindEvents()
$("#left-button").on('click',function(){
    goToSlides(current+1)
})
$("#right-button").on('click',function(){
    goToSlides(current-1)
})

function makeFakeSlides(){//采用了闭包，懒得传参数了
    let $firstClone = $images.eq(0).clone(true)//true表示深拷贝，子节点一起拷贝
    let $lastClone = $images.eq($images.length - 1).clone(true)
    $slides.append($firstClone)
    $slides.prepend($lastClone)
}
function bindEvents(){
    $(".buttons").on('click','button',function(e){
        let $button = $(e.currentTarget)
        let index = $($button).index()
        goToSlides(index)
    }) 
}
function goToSlides (index){
    if(index > $($buttons).length - 1){
        index = 0
    }else if(index< 0){
        index = $($buttons).length - 1
    }
    if(current === $($buttons).length-1 && index === 0){
        $($slides).css({transform:`translateX(${-($($buttons).length+1) * 400}px)`})
        .one('transitionend',function(e){
            $($slides).hide().offset()
            $($slides).css({transform:`translateX(${-(index+1) * 400}px)`}).show()
        })
    }else if(current === 0 && index === $($buttons).length-1){
        $($slides).css({transform:`translateX(0px)`})
        .one('transitionend',function(e){
            $($slides).hide().offset()
            $($slides).css({transform:`translateX(${-(index+1) * 400}px)`}).show()
        })
    }else{
        $($slides).css({transform:`translateX(${-(index+1) * 400}px)`})
    }
    current = index
}