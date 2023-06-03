
let input = document.querySelector('#inputt')

setInterval(function(){
    if(input.value.length == 0){
        input.style.border = '3px solid black';
    }
    else if(input.value.length == 16){
        input.style.border = '3px solid blue';
    }
    else{
        input.style.border = '3px solid red';
    }


} , 1);