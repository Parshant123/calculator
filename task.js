let buffer = '0';
// const screen means = screen pr show krna
const screen =
    document.querySelector('screen');
     
    //rerender means =  value or kuch new values;
function rerende() {
    screen.innerText = buffer;
}
function handleNumber(value){
    if(buffer==='0'){
        buffer=value;
    }else{
        buffer=buffer+value;
    }
}

document.querySelector('cal-button').addEventListener('click', (event) => {
    
})