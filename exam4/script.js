let btn=document.querySelector('#btn1');
let show=document.querySelector('.show')

let Array=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
let k='#'
btn.addEventListener('click', function(){
for(let i=0; i<6;i++){
    let regem=Math.floor(Math.random()*Array.length)
 
k+=Array[regem]


}
show.style.backgroundColor=`${k}`
k='#'
})





