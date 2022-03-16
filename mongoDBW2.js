const { MongoClient, ServerApiVersion } = require('mongodb'); 
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@Sandbox.sgbbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //connection, username, password, cluster
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {                                   //connection
  if (err) {
    console.log(err.message)                              //Terminal will return an error message when the username or password is incorrect
    return
  }
  console.log('\nSuccessfully Connected To MongoDB!\n');  //Terminal successfully connected to mongoDB and send this message
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
//  #Highlight the selected function and press Ctrl + " / " to toggle the " // " symbol that infront of it# // 
//  #Press Ctrl + C to terminate the terminal                                                               //
//  #Use "cls" command to clear the terminal interface *for windows, *"clear" for Mac                       //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  client.db().admin().listDatabases().then(result => {    //List all the info mainly are databases and other details
    console.log(result);
  })

  // client.db().admin().listDatabases().then(result => {    //List content of "databases" 
  //     console.log(result['databases']);
  // })

  // client.db().admin().listDatabases().then(result => {    //Show the "sample_training" database's contents 
  //     console.log(result['databases'][7]);
  // })

  // client.db().admin().listDatabases().then(result => {    //Show name of the "sample_training" database
  //   console.log(result['databases'][7]['name']);
  // })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // client.db('sample_training').listCollections().toArray().then(result => {   //List the details of the collections in the sample_training database
  //     console.log(result);
  // })

  // client.db('sample_training').listCollections().toArray().then(result => {   //List the detail of 'zips' collection 
  //     console.log(result[2]);
  // })

  // client.db('sample_training').listCollections().toArray().then(result => {   //Show the type of 'zips' collection... which is collection
  //     console.log(result[2]['type']);
  // })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // client.db('sample_training').collection('companies').find({}).toArray().then(result => {         //List all the documents in the 'companies' collection
  //     console.log(result);
  // })

  // client.db('sample_training').collection('zips').find({'state':'NY'}).toArray().then(result => {  //List all the documents in the 'zips' collection that related to 'state' field with the value of 'NY'
  //     console.log(result);
  // })

  // client.db('sample_training').collection('zips').find({'state':'NY','city':'ALBANY'}).toArray().then(result => { //Show the documents under multiple conditions
  //     console.log(result);
  // })

  // client.db('sample_training').collection('trips').find({'start station name':'Howard St & Centre St','birth year':1961}).toArray().then(result => {   //Another example that Show the document under multiple conditions
  //     console.log(result);
  // })

});