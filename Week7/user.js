let users;

const { hash } = require("bcrypt");
const bcrypt = require("bcryptjs")
const saltRounds = 10;
var encrypt;

class User {
	static async injectDB(conn) {
		users = await conn.db("TDDweek7").collection("users")
	}

	static async register(username, password) {
		// TODO: Hash password
		bcrypt.genSalt(saltRounds, function (saltError, salt) { 
			if (saltError) {
			  throw saltError
			} else {
			  	bcrypt.hash(password, salt, function(hashError, hash) {    //encrypt password
					if (hashError) {
				  		throw hashError
					} else {
						encrypt = hash;
					}
			  	})
			}
		});
		// TODO: Check if username exists
		return users.findOne({								//find the document
			$and: [{ 
				'username': username,				
				'password': password
			}]
		}).then(async user =>{
			if (user) {
				if ( user.username == username )
				{
					return "user exist";
				}
			}
			else
			{
				// TODO: Save user to database
				await users.insertOne({						//insert new document
					'username' : username,
					'password' : password,
					'encrypt': encrypt
				})
				return "new user created";
			}
		})	
	}

	static async login(username, password) {
		// TODO: Check if username exists
		return users.findOne({								//find the document
			$or: [
				{'username': username},				
				{'password': password}
			]				
		}).then(async user =>{
		// TODO: Validate password ( or username )
			if (user) {
				if ( user.username != username && user.password == password) {
					return "invalid username";
				}
				else if ( user.username == username && user.password != password ) {
					return "invalid password";
				}
				else
				{
					// TODO: Return user object
					return user;
				}
			}
			else
			{
				return "There is not such document";
			}
		})
	}
}

module.exports = User;