
const { Connection, Request } = require("tedious");
// Create connection to database
const config = {
    authentication: {
      options: {
        userName: "zhangxy", // update me
        password: "!QAZ1234" // update me
      },
      type: "default"
    },
    server: "server1234523.database.windows.net", // サーバー名
    options: {
      database: "chatDB_0609", //DB名
      encrypt: true
    }
  };
   const connection = new Connection(config);

// // Attempt to connect and execute queries if connection goes through
// connection.on("connect", err => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     queryDatabase();
//   }
// });

// //connection.connect();