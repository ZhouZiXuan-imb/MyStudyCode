const pool = require('../config/dbconfig')


module.exports.findUsers = (callback) => {
    pool.query(`SELECT * from users;`, function (error, results) {
        if (error) throw error;

        callback(results)
    });
}

module.exports.addUsers = (email, passwrod, nickname, slug, callback) => {
    pool.query(`INSERT INTO users(email,password,nickname,slug) VALUES('${email}','${passwrod}','${nickname}','${slug}')`, function (error, results) {
        if (error) throw error;

        callback(results)
    });
}

module.exports.deleteUsers = (id, callback) => {
    console.log(id)
    pool.query(`UPDATE users SET status='trashed' WHERE id = ${id};`, function (error, results) {
        if (error) throw error;

        callback(results)
    });
}