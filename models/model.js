const mysql = require('mysql'),
    conf = require('./db_conf'),
    dbOptions = {
        host: conf.mysql.host,
        user: conf.mysql.user,
        password: conf.mysql.password,
        port: conf.mysql.port,
        database: conf.mysql.db
    },
    conn = mysql.createConnection(dbOptions);//Atraves del modulo mysql

conn.connect((err) => {
    return (err)
        ? console.log(`Error al Conectarse a MySQL: ${err.starck}`)
        : console.log(`Conexión establecida con MySQL N°: ${conn.threadId}`);
});
module.exports = conn;

