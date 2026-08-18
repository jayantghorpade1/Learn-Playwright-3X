
function makeCounter(start = 0){

    let count = start;

    return{
        increment(){ count++ ;},
        decreement(){ count-- ;},
        get() { return count;}
    }

    console.log(start);
    console.log(count);
}

let counter = makeCounter(0);
counter.increment();
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.decreement();
console.log(counter.get());
