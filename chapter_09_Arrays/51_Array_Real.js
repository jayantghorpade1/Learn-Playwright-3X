
let browsers = ["Chrome", 'Opera', "Safari", "Edge", 'Firefox', "Brave"];

console.log(browsers.length);

browsers.pop();
console.log(browsers);

let removed = browsers.shift();
console.log(browsers);
console.log('Browser removed using Shift function:', removed);

for(let i=0; i<browsers.length; i++){
    if(browsers[i] === 'Opera'){
        console.log('Opera browser does not support Automation');
    }
}