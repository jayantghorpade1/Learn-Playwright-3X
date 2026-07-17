
let environment = "Staging";

let baseURL = environment === "PROD" 
    ? "https://api.prod.example.com" 
    : "https://api.staging.example.com";

console.log(baseURL); // Here, FALSE part will be executed as the environment does pass the condition