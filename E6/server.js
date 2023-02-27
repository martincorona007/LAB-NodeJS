// import express from 'express';
// import mysql from 'mysql2/promise';
// import mongoose from 'mongoose';

// const app = express();
// const client =  mysql.createPool({
//   host: 'localhost',
//   port: 3390,
//   user: 'root',
//   password: 'cabavis'
// })
// const response = await client.query('SELECT 1 + 1')
// console.log(response)


// const mongoConnection = await mongoose.connect('mongodb://localhost:27017/techChannel');

// console.log(mongoConnection.connection.db.databaseName)

import express from 'express';
const app = express();
app.get('/',(req,res)=>{
  res.send('hello world')
})


app.listen(3000);
console.log(`Server on port 3000`);

/*

docker run --name projectMYSQLll -p 3390:3306 -e MYSQL_ROOT_PASSWORD=cabavis mysql

*/
