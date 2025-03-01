//Homework
//1.Difference(s) between == and ===?
// == là so sánh giá trị nhưng không so sánh dữ liệu vd: console.log(5 == "5") => true(vì "5" này được chuyển thành dữ liệu trước đó)
// === là so sánh giá trị và cả dữ liệu vd: console.log(5 === "5") => false(vì "5" là chuỗi khác số)
//Use variables and operators to:
//Calculate BMI (Body Mass Index)
const weight = 55;
const height = 1.74;
const BMI = weight / (height * height);
console.log("BMI: ", BMI);


//Calculate Simple Interest (principal * rate * time)
let principal = 3000;
let rat = 0.5
const time = 15;
const Interest = principal * rat * time;
console.log("Interest: ", Interest);


//Convert Currency (USD to local currency)
let money = 50000;
const local = 25000;
const Currency = money * local;
console.log("Currency: ", Currency);



//Calculate Time (hours:minutes:seconds)
hours = 4;
minutes = 30;
second = 60;
let total_seconds = (hours * 3600) + (minutes * 60); + second;
console.log("Total_seconds: ", total_seconds);

//Exercise 1: Calculate Average Score
// Declare scores for 3 subjects
let mathScore = 8;
let physicsScore = 7;
let chemistryScore = 9;
// Calculate average score
let averageScore = (mathScore + physicsScore + chemistryScore) / 3;
// Print result
console.log("Average score:", averageScore);

//Exercise 2: Calculate Rectangle Perimeter and Area
// Declare width and height
let width = 5;
let height1 = 3;
// Calculate perimeter
let perimeter = (width + height1) * 2;
// Calculate area
let area = width * height;
// Print results
console.log("Perimeter:", perimeter);
console.log("Area:", area);

//Exercise 3: Convert Celsius to Fahrenheit
// Temperature in Celsius
let celsius = 30;
// Convert to Fahrenheit
let fahrenheit = celsius * 1.8 + 32;
// Print result
console.log(celsius + "°C = " + fahrenheit + "°F");

//Exercise 4: Calculate Tip Amount
// Bill amount
let billAmount = 200000;
// Tip percentage
let tipPercent = 10;
// Calculate tip amount
let tipAmount = (billAmount * tipPercent) / 100;
// Calculate total amount
let totalAmount = tipAmount + billAmount;
// Print results
console.log("Bill amount:", billAmount);
console.log("Tip amount:", tipAmount);
console.log("Total amount:", totalAmount);

//Exercise 5: Check Even or Odd Number
// Number to check
let number = 7;
// Check if divisible by 2
let isEven = number % 2 == 0;
// Print result
console.log("Number " + number + " is " + (isEven ? "even" : "odd"));
