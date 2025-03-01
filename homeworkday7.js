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


