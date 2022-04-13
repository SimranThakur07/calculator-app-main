var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')

one.addEventListener('click', function(){
    var body = document.querySelector('.screen');
    var toggle = document.getElementById('circle')
    body.classList.remove('active1')
    body.classList.remove('active2')
    toggle.style.left='0%'
})
two.addEventListener('click', function(){
    var body = document.querySelector('.screen');
    var toggle = document.getElementById('circle')
    body.classList.add('active1')
    body.classList.remove('active2')
    toggle.style.left='36%'
})
three.addEventListener('click', function(){
    var body = document.querySelector('.screen');
    var toggle = document.getElementById('circle')
    body.classList.add('active2')
    body.classList.remove('active1')
    toggle.style.left='72%'
})

let screen = document.getElementById('screen-box')
let buttons = document.querySelectorAll('button')
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
       buttonText = e.target.innerText;
if(buttonText=='X'){
    buttonText = '*';
    screenValue += buttonText
    screen.value = screenValue;
}
else if(buttonText =='DEL'){
    screen.value = screen.value.substring(0, screen.value.length-1);
    screenValue = screen.value;
}
else if(buttonText =='='){
    screen.value = eval(screenValue);
}
else if(buttonText == 'RESET'){
    screenValue = "";
    screen.value = screenValue;
}
else{
    screenValue += buttonText;
    screen.value = screenValue; 
}
    })
}