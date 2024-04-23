#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//  WORDS COUNTER 
const Answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence for count the words",
    }
]);
const Words = Answers.sentence.trim().split(" ");
//print array for count words
console.log(Words);
//print the word count of the sentence
console.log(chalk.blue.bold(`The Sentence word count is ${Words.length}`));
