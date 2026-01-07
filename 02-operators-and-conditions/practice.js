
//prompt
let name = prompt("Enter your name:");

console.log(name);

//Get user to input a number using prompt("Enter a number:").Check if the number is a multiple of 5.

let number = prompt("Enter a number:");
if(number % 5 === 0){
    console.log("The" ,number, "is a multiple of 5.");
}else{
    console.log("The" ,number, "is not a multiple of 5.");
}


//write a code which can give grades to students based on their scores.

let scoree = prompt("Enter your score:");
let grade;

if (scoree >= 90 && scoree <= 100) {
    grade = "A";
} else if (scoree >= 70 && scoree <= 89) {
    grade = "B";
} else if (scoree >= 60 && scoree <= 69) {
    grade = "C";
} else if (scoree >= 50 && scoree <= 59) {
    grade = "D";
} else if (scoree >= 0 && scoree <= 49) {
    grade = "F";
} else {
    console.log("Invalid score");
}

console.log("Your grade is: " + grade);
