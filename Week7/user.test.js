const MongoClient = require("mongodb").MongoClient;
const User = require("./user")

//sample data
const username = "user1"																
const password = "passwordfromuser1"
const encrypt = "$2a$10$VjvtPgldEMsz5C9GUlyhDenl.Xc7gY82bvDUiCaEKUXUHFcL4cH4u"

describe("User Account", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://m001-student:m001-mongodb-basics@Sandbox.vqzcw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		User.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})

//////////////////////////////////////////////////////////////////////////////

	test("New user registration", async () => {
		const res = await User.register(username, password)
		expect(res).toBe("new user created");
	})

	test("Duplicate username", async () => {
		const res = await User.register(username, password)
		expect(res).toBe("user exist");
	})

//////////////////////////////////////////////////////////////////////////////

	test("Username doesn't exist to login", async () => {
		const res = await User.login(username, password)
		expect(res).toBe("There is not such document");
	})

	test("User login invalid username", async () => {
		const res = await User.login(username, password)
		expect(res).toBe("invalid username");
	})

	test("User login invalid password", async () => {
		const res = await User.login(username, password)
		expect(res).toBe("invalid password");
	})

	test("User login successfully", async () => {
		const res = await User.login(username, password)
		expect(res.username).toBe(username);
		expect(res.password).toBe(password);
		expect(res.encrypt).toBe(encrypt);
	})

//////////////////////////////////////////////////////////////////////////////
});