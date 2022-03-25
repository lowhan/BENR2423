const { MongoClient, ServerApiVersion, ObjectId, Db } = require('mongodb'); 
const { faker } = require('@faker-js/faker');        //faker for fake data
const bcrypt = require("bcryptjs");                  //for encryption of password

const uri = "mongodb+srv://m001-student:m001-mongodb-basics@Sandbox.sgbbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const randomName = faker.name.findName();            //generate fake name
const randomEmail = faker.internet.email();          //generate fake email
const randomPhoneNumber = faker.phone.phoneNumber(); //generate fake phone number
const randomAddress = faker.address.city();          //generate fake address
const randomAvatar = faker.image.avatar();           //generate fake avatar picture
const randomBackground = faker.image.nature();       //generate background picture
const password = "fakepassword";                     //password
const saltRounds = 10;

client.connect(async err => {                       
  if (err) {
    console.log(err.message)                             
    return
  }
  console.log('\nGenerating fake account into mongoDB\n'); 
  
  bcrypt.genSalt(saltRounds, function (saltError, salt) { 
    if (saltError) {
      throw saltError
    } else {
      bcrypt.hash(password, salt, function(hashError, hash) {     //encrypt password
        if (hashError) {
          throw hashError
        } 
      console.log("Fake Name: ", randomName, "\nFake Email: ", randomEmail,"\nFake Phone Number: ", randomPhoneNumber,"\nFake Address: ",randomAddress,"\nAvatar URL: ",randomAvatar,"\nBackground URL: ",randomBackground,"\nPassword: ",hash,"\n"); //show data

      client.db('fakeaccount').collection('sample').insertOne({   //insert the data into mongoDB
        name: randomName,
        email: randomEmail,
        phone: randomPhoneNumber,
        address: randomAddress,
        avatar: randomAvatar,
        background: randomBackground,
        password: hash   
      }).then(result => {
          console.log(result);
        });
      })
    }
  });
});