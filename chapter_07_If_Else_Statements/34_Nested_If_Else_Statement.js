let units = 50;
let isStudent = true;

if (units > 0) {
  // Nested condition starts here
  if (isStudent) {
    console.log("You get a student discount.");
  } else {
    console.log("Standard billing applies.");
  }
} else {
  console.log("No units used.");
}
