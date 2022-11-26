const {faker} = require('@faker-js/faker');

function generateUserData() {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email(firstName, '').toLowerCase();
    var createdAt = faker.date.past();

    return {
        "fname": firstName,
        "lname": lastName,
        "email" : email,
        "created_at": createdAt
    }
}

// var earliest_date = "SELECT DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date FROM users ORDER BY created_at LIMIT 1";

// var earliest_user = "SELECT email, created_at FROM users WHERE DATE_FORMAT(created_at, '%M %D %Y') = (SELECT DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date FROM users ORDER BY created_at LIMIT 1)"

// var month_usercount = "SELECT DATE_FORMAT(created_at, '%M') AS month, COUNT(*) AS count FROM users GROUP BY DATE_FORMAT(created_at, '%M') ORDER BY DATE_FORMAT(created_at, '%m')"

// var yahoo_usercount = "SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE '%yahoo.com'"

// var email_usercount = "SELECT	CASE    	WHEN        email LIKE '%gmail%' THEN 'Gmail'        WHEN        email LIKE '%yahoo%' THEN 'Yahoo'        WHEN        email LIKE '%hotmail%' THEN 'Hotmail'        ELSE 'Other'    end AS provider,    COUNT( * ) AS 'Total users'    FROM users   	GROUP BY provider"

// con.query(email_usercount, function (error, result) {
//     if (error) throw error;
//     console.log(result[0]);
// });

// console.log(data[0]);

// Inserting Data
// for(i = 0; i < 399; i++) {
//     con.query('INSERT INTO users SET?', generateUserData(), function (error, result) {
//         if (error) throw error;
//         console.log(result);
//     });
// }
