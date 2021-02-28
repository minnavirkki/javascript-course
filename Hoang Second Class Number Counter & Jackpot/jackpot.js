// Create a software that generate 5 random numbers of either 0 or 1
// Let the user knows which are the 5 random numbers that they have gotten with console.log or alert
// If the user get all five 1s, congrat the user because he/she has won a jackpot prize. 
// Also show them what has been the chance of winning the jackpot by performing a calculation of 
// the winning probability (basically 1/2^5)
// If the user get all five 0s, congrat them anyway because it is as hard as winning the jackpot 
// except he/she didn’t win anything

// .js Task No 1,Jackpot exercise

// Generating the number / Defining the variables

let no1 = Math.floor(Math.random() * 2)

let no2 = Math.floor(Math.random() * 2)

let no3 = Math.floor(Math.random() * 2)

let no4 = Math.floor(Math.random() * 2)

let no5 = Math.floor(Math.random() * 2)

// Letting the user know the generated numbers

console.log(no1, no2, no3, no4, no5);

// Letting the user know the result

if (no1 && no2 && no3 && no4 && no5 === 1) {
    console.log(`Congratulations, you have won the jackpot! The winning probability is ${2 ** 5}`)
} else if (no1 && no2 && no3 && no4 && no5 === 0) {
    console.log(`Not a jackpot this time, but the result is pretty spectacular.`)
} else {
    console.log(`Sorry. No  win this time.`);
}
