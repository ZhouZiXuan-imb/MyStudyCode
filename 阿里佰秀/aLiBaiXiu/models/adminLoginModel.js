const pool = require('../config/dbconfig')


module.exports.findUser = (email, callback) => {
    pool.query(`select * from users where email = '${email}'`, function (error, results) {
        if (error) throw error;

        callback(results)
    });
}