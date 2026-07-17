let temp = 15;

let feel = temp >= 40 ? "Very Hot" :
                temp >=30 ? "Hot" :
                    temp >=20 ? "Pleasant" :
                        temp >=10 ? "Cool" : "Very Cold"

console.log(`Temperature is ${temp} and it feels ${feel}`);