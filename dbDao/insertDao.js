var Connection = require('tedious').Connection;  
var config = {  
    server: 'server1234523.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'zhangxy', //update me
            password: 'QAZ1234'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'chatDB_0609'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
       if (err) {
            console.log("ConnectedErr");  
            console.error(err.message);
        } else {
            console.log("ConnectedErr");  
            executeStatement1();  
           }
});

connection.connect();

var Request = require('tedious').Request  
var TYPES = require('tedious').TYPES;  

function executeStatement1() {  
    request = new Request("INSERT INTO Qna.QuestionAndAnswer (Question ,Answer ) values(“aaa”，“ssssss” ) ", function(err) {  
     if (err) {  
        console.log(err);}  
    });  
    request.on("row", columns => {
        columns.forEach(column => {
          console.log("%s\t%s", column.metadata.colName, column.value);
        });
      });     
    connection.execSql(request);  
}  