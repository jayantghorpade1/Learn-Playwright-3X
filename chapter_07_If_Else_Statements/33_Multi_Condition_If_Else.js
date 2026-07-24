
let marks = 86;

if(marks > 90){
    console.log("Grade A - Excellent");
} else if (marks > 80 && marks <= 89){
    console.log('Grade B - Very Good');
} else if (marks > 60 && marks <=79){
    console.log(`Grade C - Could do better`);
} else if (marks > 40 && marks <=59){
    console.log("Grade D - Needs immediate attention");
} else{
    console.log("FAILED");
}