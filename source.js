/*
Author: Maija Philip
Date: 08-18-2024

Using some  values given, it calculates the minimum price for a piece of art

Command: node source.js [Board Length (in)] [Board Width (in)] [Board Price] [Seal Price] [Gesso Price] [Hours spent] [Painting Length (in)] [Painting Width (in)]

Assuming $20 hourly wage and paint per ounce is $2
- the paint per ounce is based on amsterdam acrylics being $28 for a set of 5 primary colors on amazon (120 ml tubes)

*/
const HOURLY_WAGE = 20
const PAINT_PER_OUNCE = 2

if (process.argv.length < 10) {
    console.log("You are missing some params")
    console.log("Command should be node source.js [Board Length (in)] [Board Width (in)] [Board Price] [Seal Price] [Gesso Price] [Hours spent] [Painting Length (in)] [Painting Width (in)]")
    console.log("exiting...")
    process.exit()
}

// process.argv starts at 2 because the first 2 params are the locations of the file and node.js
let boardLength = process.argv[2]
let boardWidth = process.argv[3]
let boardPrice = process.argv[4]

let sealPrice = process.argv[5]
let gessoPrice = process.argv[6]

let hoursSpent = process.argv[7]
let paintingLength = process.argv[8]
let paintingWidth = process.argv[9]

// printing out given values
console.log("Board Length: " + boardLength)
console.log("Board Width: " + boardWidth)
console.log("Board Price: " + boardPrice)
console.log("Seal Price: " + sealPrice)
console.log("Gesso Price: " + gessoPrice)
console.log("Hours Spent: " + hoursSpent)
console.log("Painting Length: " + paintingLength)
console.log("Painting Width: " + paintingWidth)

console.log("\nCalculating...\n")

let percentBoardUsed = (paintingLength * paintingWidth) / (boardLength * boardWidth)
console.log("Percent Board Used: " + (Math.round(percentBoardUsed * 10000) / 100).toFixed(2) + "%")

let labor = hoursSpent * HOURLY_WAGE
console.log("Labor Cost: $" + labor)

let costForBoard = percentBoardUsed * boardPrice
console.log("Calculated Board % Cost: $" + costForBoard)

let costForSeal = percentBoardUsed * sealPrice
console.log("Calculated Seal % Cost: $" + costForSeal)

let costForGesso = percentBoardUsed * gessoPrice
console.log("Calculated Gesso % Cost: $" + costForGesso)

let costForPaint = (1.0/12.0) * paintingLength * paintingWidth * PAINT_PER_OUNCE
console.log("Calculated Paint % Cost: $" + costForPaint)

let minimumCost = labor + costForBoard + costForSeal + costForGesso + costForPaint
minimumCost =  (Math.round(minimumCost * 100) / 100).toFixed(2);
console.log("\nMinimum Cost: $" + minimumCost);
