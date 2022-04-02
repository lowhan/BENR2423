const { MongoClient, ServerApiVersion, ObjectId, Db } = require('mongodb'); 
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.sgbbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //connection, username, password, cluster
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {                             //dont forget to add async if await is used                          
  if (err) {
    console.log(err.message)                              //Terminal will return an error message when the username or password is incorrect
    return
  }
console.log('\nSuccessfully Connected To MongoDB!\n');  //Terminal successfully connected to mongoDB and send this message

  // client.db('sample_training').collection('companies').find({     //Print the document that doesn't has a name of 'Google' in it
  //   name: {$ne: 'Google'}
  // }).toArray().then(result => {  
  //   console.log(result);
  // }); 

  // let res = await client.db('sample_training').collection('trips').count({     //$lt = less than, $lte = equal or less than, $gt = greater than, $gte = equal or greater than
  //   tripduration: {$lt: 500}    
  // })
  // console.log(res);
  
  // client.db('sample_training').collection('trips').find({     //_id = searching base on object id
  //   _id : ObjectId('572bb8222b288919b68abf5a')    
  // }).toArray().then(result => {  
  //   console.log(result);
  // }); 

  // {'start time':{$gt: ISODate('2016-01-01')}     //BSON coding that only usable in mongoDB filter
                                                    //searching base on date

  // client.db('sample_training').collection('trips').find({     //multiple conditions
  //   tripduration: {$lt: 500},
  //   'start station id': {$eq: 530}       
  // }).toArray().then(result => {  
  //   console.log(result);
  // });        
  
  // client.db('sample_training').collection('trips').find({        //$in = find the document base on the range of the <value>
  //   tripduration: {$in: [50,100]}     
  // }).toArray().then(result => {  
  //   console.log(result);
  // });

  // client.db('sample_training').collection('posts').find({        //$elemMatch = find the document base on the object of the array
  //   'tags': {$elemMatch : { $eq: 'salt'}}    
  // }).toArray().then(result => {  
  //   console.log(result);
  // });

  // client.db('sample_training').collection('posts').find({        //$and = all conditions must be accepted in order to find/print the document        
  //   $and: [ { tags : { $elemMatch : {$eq: "salt"} } } , { author : 'machine' }, { title : 'Bill of Rights'} ]   
  // }).toArray().then(result => {  
  //   console.log(result);                                         //Other logical operations = $or, $and ,$not : { $eq },$nor
  // });

  // let result = await client.db('myFirstDB').collection('profile').insertOne({       //insert some sample        
  //   name: 'Joe',
  //   like: 100
  // }).then(result => {  
  //   console.log(result);                                         
  // });

  // client.db('myFirstDB').collection('profile').updateOne(        //$set = create/assign the field/value to the document        
  //   {_id : ObjectId('6246deeebb2aa4d95ec99e85')},
  //   { $set: {like: 0}}                                           //$unset = remove the field
  // ).then(result => {  
  //   console.log(result);                                         
  // });

  // client.db('myFirstDB').collection('profile').updateOne(        //$inc = add some value        
  //   {_id : ObjectId('6246deeebb2aa4d95ec99e85')},
  //   { $inc: {like: 1}}                                           //the value only can add to 'integer' type
  // ).then(result => {  
  //   console.log(result);                                         
  // });

  // client.db('myFirstDB').collection('profile').updateOne(         //$min,$max  
  //   {_id : ObjectId('6246deeebb2aa4d95ec99e85')},
  //   { $min: {like: 1}}                                           //if the object has the minimum value of 1 (maybe greater than 1), the value will be assigned to 1
  // ).then(result => {  
  //   console.log(result);                                         
  // });

  // client.db('myFirstDB').collection('profile').updateOne(         //set array to document
  //   {_id : ObjectId('6246deeebb2aa4d95ec99e85')},
  //   { $set: { comments: [
  //     'good',
  //     'kind',
  //     'helpful'
  //   ]}                                           
  // }).then(result => {  
  //   console.log(result);                                         
  // });

  // client.db('myFirstDB').collection('profile').updateOne(         //$addToSet = add an element to an array if it doesn't exist
  //   {_id : ObjectId('6246deeebb2aa4d95ec99e85')},
  //   { $addToSet: { comments: 'nice' }                                           
  // }).then(result => {  
  //   console.log(result);                                         
  // });

  // client.db('myFirstDB').collection('profile').updateOne(         //$push = add an element to an array (can have duplicate value)
  //   {_id : ObjectId('6246deeebb2aa4d95ec99e85')},
  //   { $push: { comments: 'nice' }                                           
  // }).then(result => {  
  //   console.log(result);                                         
  // });

  // client.db('myFirstDB').collection('profile').updateOne(         //$pull = remove all selected value that in the array
  //   {_id : ObjectId('6246deeebb2aa4d95ec99e85')},
  //   { $pull: { comments: 'nice' }                                           
  // }).then(result => {  
  //   console.log(result);                                         
  // });

  // client.db('myFirstDB').collection('profile').updateOne(         //$pop = remove first/last element from the array
  //   {_id : ObjectId('6246deeebb2aa4d95ec99e85')},
  //   { $pop: { comments: 1 }                                       //if value is -1, then remove first element,else if value is 1 , then remove last element
  // }).then(result => {  
  //   console.log(result);                                         
  // });

});
