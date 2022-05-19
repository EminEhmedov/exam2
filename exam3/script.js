
   



let prompt2=prompt('Yasinizi daxil edin')
if(prompt2.length==0){
    for(let i=0;i<10;i++){
    prompt(' yasi daxil et')
    }
}
Number(prompt2)
if(prompt2<20){
alert('Yasin 20 den kicikdi')
console.log(prompt2.length);
}
else if(prompt2>20){
    alert('Yasin 20 den boyukdu')
}
else if(prompt2==20){
    alert('Yasin 20 e beraberdi')
}







