const MongoClient = require("mongodb").MongoClient;
const User = require("./user");

MongoClient.connect(
	// TODO: Connection 
	"mongodb+srv://m001-student:m001-mongodb-basics@Sandbox.vqzcw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ useNewUrlParser: true },
).catch(err => {
	console.error(err.stack)
	process.exit(1)
}).then(async client => {
	console.log('Connected to MongoDB');
	User.injectDB(client);
})

//web application framework for node.js HTTP applications
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('Welcome to OUR page !')
})

app.get('/test', (req, res) => {
	res.send('subpage testing... you are good for now')
})

//do http://localhost:3000/login to login the user 

app.post('/login', async (req, res) => {
	console.log('\nLogin user:',req.body); //check in console

	const user = await User.login(req.body.username, req.body.password);

	res.status(200).json({
		username: req.body.username,
		password: req.body.password
	})
})

app.get('/login', async (req, res) => {
	res.end('Login operation is done')		//end = json = send
})

//do http://localhost:3000/register to register the user 

app.post('/register', async (req, res) => {
	console.log('Register user:',req.body);
	const user = await User.register(req.body.username, req.body.password);

	res.status(200).json({
			username: req.body.username,
			password: req.body.password
	})
})

app.get('/register', async (req, res) => {
	res.end('Register operation is done')
})

app.listen(port, () => {
	console.log(`Listening to the server on ${port}`)
})
