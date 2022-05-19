let inp=document.querySelector('input')
let btn=document.querySelector('button')
let show=document.querySelector('.show')
let k=''
btn.addEventListener('click',function(e){
e.preventDefault();
k=`<${inp.value}>  <${inp.value}>`
k.toString()
show.textContent+=k
inp.value=''
})