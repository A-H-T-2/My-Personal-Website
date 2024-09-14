import pg from "pg";
import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "training",
    password: "Ahmed2002@",
    port: 5432,
});
db.connect();
db.query("SELECT * FROM users", (err, res) => {
    if (err) {
        console.error("error executing query", err.stack);
    } else {
        quiz = res.rows;
    }
    db.end();
});

/*$(document).ready(function() {
$("h1").css("color", "red"); //"$" is the same as "jQeurey"

})*/

$("h1").css("color", "red"); //"$" is the same as "jQeurey"
$("h1").addClass("title margin-50");
$("h1").removeClass("margin-50"); 

$("h1").hasClass("margin-50"); //checks if it has that class active

$("img").attr("src");

$("button").on("click", function(){
    //$("h3").fadeToggle();
    //$("h3").slideToggle();
    $("h3").fadeOut().fadeIn().animate({opacity: "50%"});
});

$("h3").on("mouseover", function(){
    $("h3").css("color", "yellow");
});
$(document).keypress(function(event) {
    $("h3").text(event.key);
});