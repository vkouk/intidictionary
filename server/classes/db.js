const mysql = require('mysql');

class DB {
    constructor(host, user, password, database, port) {
        this.host      = host;
        this.user      = user;
        this.password  = password;
        this.database  = database;
        this.port      = port;

        this.connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database,
            port: this.port
        });

        this.connection.connect((err) => {
            if (err) {
                console.log('Error found: ', err);
            }
            console.log("Connected!");
        });
    }

    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }

    closeConnection() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
            console.log("Disconnected!");
        } );
    }
}

module.exports = DB;
