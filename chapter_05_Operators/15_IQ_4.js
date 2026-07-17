// Example of Template Literal
let responseTime = 500;
let sla = 850;

let slaStatus = responseTime <= sla ? "WithIn SLA" : "SLA Breached";

console.log(`Response: ${responseTime} ms -- ${slaStatus}`);
console.log(`What is the SLA time:  ${sla}`);