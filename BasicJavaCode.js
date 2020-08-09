console.log('This is me learning how to code JavaScript')
console.log('This is how I log info or stuff that might need the code to tell me')

//this is just a example of a simple comment
/*This is another type of comment for large groups of text



the comment can get down here if you need to have this much text */

let somefunnything = 58
console.log(somefunnything)

var car = {
	color : "pink",
	speed: 500,
	make: "volvo",
	drive: function(){return "drive";},
	engine: {
		size: 2.0,
		fuel: "petrol",
		pistons: ["piston1", "piston2"]
	}
};

var shoppinglist = [
	"apple",
	"strawberry",
	"sugar"
]

var numbers = [2,3,4]
console.log(numbers)
var numbers = [2,3,4]
console.log(numbers[2])

let number1 = 34
let number2 = 54
let number3 = 47
console.log(number1, number2, number3)

//this will tell you if the statment 2+2 is equal to 4
console.log(2+2 === 4)


//this is how to get the length of a string
const words = "This is just a string"
console.log(words.length)

console.log("1234567890".length)

const somestring = "This is for testing"
console.log(somestring[0]+somestring[somestring.length-1])

console.log("make this all uppercase".toUpperCase())
console.log("MAKE THIS ALL LOWER CASE".toLowerCase())
//https://developer.mozilla.org/en-US/ for more help with stuff you might want to do

console.log("a".length+"bc".length+"Cde".length)

let fullName = "Rose Zayas"
console.log("hello, my name is " + fullName + "my name is " + fullName.length)

const largeString = "abcdefghijklmnopqrstuvwxyz"
console.log(largeString[0])
console.log(largeString[largeString.length-1])
console.log(largeString[largeString.length-5])
console.log(largeString[largeString.length-2])
console.log(largeString[0]+largeString[largeString.length-3])
