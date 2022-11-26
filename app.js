// NPM Packages
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
const port = process.env.PORT || 5000

// Define Express
var app = express();

require('dotenv').config();

// Express setting engine and parser
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use('/favicon.ico', express.static('images/favicon/favicon.ico'));


// var con = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DBNAME
// });


// Establish MySQL Connection (using pool)
var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
})

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("MySQL Connected!");
// });

// Define Routing
app.get("/", function (req, res) {
    pool.getConnection(function (err, con) {
        if (err) {

        } else {
            let totalUsers = "";
            let randId = "";
            let lastRandomEmail = "";
            let randomName = "";
            let lastJoined = "";

            // Count total users
            con.query("SELECT COUNT(*) AS total FROM users", function (error, result) {
                if (error) throw error;
                else {
                    // Get random user first name with id
                    totalUsers = result[0].total - 1;
                    randId = getRandId(totalUsers);

                    con.query("SELECT fname FROM users WHERE id=" + randId, function (error, result) {
                        if (error) throw error;
                        else {
                            randomName = result[0].fname;
                            con.query("SELECT CONCAT(SUBSTR(email, 1, 3),'***@***.com') AS email, CONCAT(DATE(created_at),' ',TIME(created_at)) AS created_at FROM users ORDER BY created_at DESC LIMIT 1", function (error, result) {
                                if (error) throw error;
                                else {
                                    lastRandomEmail = result[0].email;
                                    lastJoined = result[0].created_at;
                                    res.render('home', { count: totalUsers, name: randomName, lastemail: lastRandomEmail, lastjoined: lastJoined });
                                    con.release();
                                }
                            })
                        }
                    })
                }
            })
        }
    })



});

app.post("/register", function (req, res) {
    pool.getConnection(function(err,con){
        if (err) throw err;
        else {
            let isValid = true;

        var userData = {
            email: req.body.email,
            fname: req.body.name
        }

        var error = {
            emailerror: "Email cannot be empty",
            nameerror: "Name cannot be empty"
        }

        if (userData.email == "") {
            isValid = false;
        }

        if (userData.fname == "") {
            isValid = false
        }


        console.log(isValid)
        if (isValid == true) {
            con.query("INSERT INTO users SET?", userData, function
                (err, result) {
                if (err) throw err;
                console.log(result);
                res.redirect("/");
                con.release();
            });
        } else {
            res.redirect("/");
            con.release();
        }
    }
})
    


});

app.listen(port, function () {
    console.log("App listening on port" + port);
});


function getRandId(max) {
    min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
}


