let inp=document.querySelector('input')
let btn=document.querySelector('button')
let show=document.querySelector('.show')
let show1=document.querySelector('.show1')

function keydow(){

    if(inp.value.length<8){
        show1.style.display='block'
        show1.style.backgroundColor='red'
        show1.innerHTML='Sifreni guclendirin'
        show1.style.color='white'
        }
        else if(inp.value.length>8){
            show1.style.display='block'
            show1.innerHTML='Sifreni gucludur'
            show1.style.backgroundColor='green'
        show1.style.color='white'
        }
        else if(inp.value.length==0){
            show1.style.display='block'
            show1.innerHTML='Sifreni daxil edin'
        }
}

function focuse(){
    show1.style.display='block'
}
function blure(){
    show1.style.display='none'
}
   



btn.addEventListener('click',function(e){
e.preventDefault();


show.innerHTML=`Parolun uzunlugu ${inp.value.length} dur`
inp.value=''
})


