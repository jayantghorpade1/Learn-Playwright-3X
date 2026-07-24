
for(let _1 = 0; _1 <=10; _1++){
    console.log(_1); // Will print 0 to 10
}
console.log("*** FOR Loop 1 ***");

for(let num = 0; num > 1; ++num){
    console.log(num); // this will never get executed b'coz the condition of 0 > 1 is FALSE
}
console.log("*** FOR Loop 2 ***");

for(let t=0; ; t++){
    console.log(t); //This will be executed infinite time as the condition doesn't exists to check
}