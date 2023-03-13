import mysql from 'mysql';
export const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'prash@123',
        database: 'social',
        insecureAuth : true
    }
)

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });