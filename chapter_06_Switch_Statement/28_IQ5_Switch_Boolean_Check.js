
let testMarks = 86;

switch(true){
    case (testMarks >= 95):
        console.log("Outstanding");
        break;
    case (testMarks >= 85):
        console.log("Excellent");
        break;
    case (testMarks >= 75):
        console.log("Very Good");
        break;
    case (testMarks >= 55):
        console.log("Average");
        break;
    case (testMarks > 40):
        console.log("Needs Improvement");
        break;
    case (testMarks <= 40):
        console.log("Failed");
        break;
    default:
        console.log("Unsatisfactory - needs training")
        break;
}