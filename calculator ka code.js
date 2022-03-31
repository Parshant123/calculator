//ek screen hoti or us pr value control krte
//button press pta lgana
//jo b button press hua screen show 
//ye pta lgao ki no. print hua h ya symbol
// jitne b button click hote unko calculate  (-,+,/,*,c,=)kya krna h
//uska baad calculate krna ki kya value screen pr return hogi
let buffer='0';
const screen=document.querySelector('.screen');
function show(){
    screen.innerText=buffer;
}

//button ko js m laykr aa 
//listen which butten press
//button press use call back function 
document.querySelector('.cal-button').addEventListener('click',(event)=>{

})