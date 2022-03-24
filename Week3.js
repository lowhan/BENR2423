const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); 
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@Sandbox.sgbbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //connection, username, password, cluster
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {  //dont forget to add async if await is used                          
  if (err) {
    console.log(err.message)                              //Terminal will return an error message when the username or password is incorrect
    return
  }
  console.log('\nSuccessfully Connected To MongoDB!\n');  //Terminal successfully connected to mongoDB and send this message

// client.db('myFirstDB').collection('profile').insertOne({ //insert one document
//   name: 'Joe',
//   age: 30
//   }).then(result => {    //Find one of the random result
//     console.log(result);
// });

// let result1 = await client.db('myFirstDB').collection('profile').insertOne({ //await = hold and wait the execution done before moving to next line
//   name: 'John',
//   age: 27
// })
// console.log('Inserted = ', result1);

// await client.db('myFirstDB').collection('profile').insertOne({   //insert document
//     name: 'Ali',
//     age: 25
//   }).then(async result2 => {                                     //Print the result of insertion 'Ali'
//   console.log(result2);
//   await client.db('myFirstDB').collection('profile').insertOne({ //insert another document that links first objectid to the next document
//       name: "Ali's friend",
//       friend: result2.insertedId,
//       age: 20
//     }).then(result3 => {                                         //Print the result of insertion 'Ali's friend'
//       console.log(result3);
//   });
// });

// console.time('Insert time');      //(starting) show insertion time
// let result4 = await client.db('myFirstDB').collection('profile').insertOne({ 
//   name: 'Jason',
//   age: 35
// })
// console.timeEnd('Insert time');   //(ending) show insertion time

// console.time('Insert time');
// let result5 = await client.db('myFirstDB').collection('profile').insertMany([  //insert multiple documents at once
//     {
//       name: 'Person1',
//       age: 1,
//     },
//     {
//       name: 'Person2',
//       age: 2,
//     }
//   ]).then(result => {        
//   console.log(result);
// });
// console.timeEnd('Insert time');

// client.db('myFirstDB').collection('profile').findOne({}).then(result => {       //find and print one of the document      
//     console.log(result);
// });

client.db('myFirstDB').collection('profile').find({}).toArray().then(result => {//print all of the document (in table)     
    console.table(result);
});

// client.db('myFirstDB').collection('profile').findOne({      //find and print one of the specific data
//   _id: ObjectId("623c8a5d581aefb7370adcee"),
//   'name':'John'
//   }).then(result => {        
//     console.log(result);
// });

// client.db('myFirstDB').collection('profile').updateOne({    //update one of the document base on id
//   _id: ObjectId("623c8a52caefb10b1e9e63ae")
// }, {
//     $set: {                                                 //$set = add/replace the values
//             name: "Joe's mama",
//             age: 60
//     }
// })

// client.db('myFirstDB').collection('profile').updateOne({    //update one of the document base on condition
//   name: 'John'
//   }, {
//     $set: {                                                 //$set = add/replace the values
//             name: "Joe's papa",                             
//             age: 60                                        
//     }
//   }).then(res => {
//   console.log(res);
// });

// client.db('myFirstDB').collection('profile').updateOne({    //updateMany() to update multiple documents, if want to use...
//   name: 'Jason'
//   }, {                                                      //From mongoDB university: 
//     $set: {                                                 //$set = add/replace the values
//             name: "Jason's papa",                           //$inc = increment in number
//             age: 60                                         //$push = add new (although exist)
//     }
//   },{ upsert: true}).then(res => {                          //upsert:true = insert new id if the contain is not exist
//   console.log(res);
// });

// client.db('myFirstDB').collection('profile').deleteMany({    //deleteMany() to delete all documents that in the conditions
//   name: "Joe's papa",                                        //conditions
//   age: 60
//   }).then(res => {
//   console.log(res.deletedCount);
// });

// client.db('myFirstDB').collection('profile').deleteMany({    //deleteOne() to delete single document, if want to use...
//   name: "Joe"   
//   }).then(res => {
//   console.log("Deleted Items:", res.deletedCount);
// });

// client.db('myFirstDB').collection('profile').deleteMany({    //delete everything
//   }).then(res => {
//   console.log("Deleted Items:", res.deletedCount);
// });

});
