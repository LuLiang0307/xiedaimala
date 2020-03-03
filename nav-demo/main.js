var keys = {
    0: ['q','w','e','r','t','y','u','i','o','p'],
    1: ['a','s','d','f','g','h','j','k','l'],
    2: ['z','x','c','v','b','n','m'],
    length: 3
}
var hash = {q: 'qq.com',w: 'weibo.com',e: 'ele.me',r: 'renren.com',t: 'tianya.com',y: 'youtube.com',u: 'uc.com',i: 'iqiyi.com',
o: 'opera.com',p: undefined,a: 'acfun.tv',s: 'sohu.com',z: 'zhihu.com',m: '111.mcdonalds.com.cn'}

index = 0
while(index < keys.length){
    div1 = document.createElement('div')
    main.appendChild(div1)
    rows=keys[index]
    index2= 0
    while(index2< rows.length){
        kbd = document.createElement('kbd')
        kbd.textContent = rows[index2]
        div1.appendChild(kbd)        
        index2 = index2 + 1 
    }
    
    index = index + 1
}