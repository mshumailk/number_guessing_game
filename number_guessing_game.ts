#! usr/bin/env node

import inquirer from "inquirer";

// System will generate randon number

//any input from user (number)

//match randon and user numbers then show result

const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userguessednumber",
    type: "number",
    message: "Please Guess any number between 1-6: ",
  },
]);

if (answer.userguessednumber === randomnumber){
    console.log("You guessed rite number: ");
} 
else {
    console.log("Sorry try again");
}