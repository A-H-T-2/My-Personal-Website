alert(prompt("Hi, I'm Ahmed Hassan, Who are you? ").slice(0,5));

var name = "Ahmed";
var firstChar = name.slice(0, 1).toUpperCase(); //slice the string from the 1st value to -but NOT including- the 2nd value
var RestOfName = name.slice(1, name.length()).toLowerCase();
var FullName = firstChar + RestOfName;

//math.pow(4, 2); //example: "4^2"
//math.round(2.7); //normally rounds the number, ex: "3"
//math.floor(2.7); //rounds the number down, ex: "2"
//var x = math.random(); //random number generation

var property = {
    name: "Ahmed",
    age: 22,
    job: "Full Stack Developer",
    languages: ["Arabic", "English"],
    working: function(){
        alert("Are you currently working?")
    }
}
function Proberty (name, age, job, languages)
{
    this.name = name;
    this.age = age;
    this.job = job;
    this.languages = languages;
    this.working = function(){
        alert("Are you currently working?")
    }
}
var property1 = new Proberty("Ahmed", 22, 
    "Full Stack Developer", ["Arabic", "English"]);