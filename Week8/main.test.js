const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('Express Route Test', function () {
	it('should return Welcome to OUR page !', async () => {
		return request.get('/test')
			.expect(200)
			.expect('Content-Type', /text/)
			.then(res => {
				expect(res.text).toBe('subpage testing... you are good for now');
			});
	})

	it('login successfully', async () => {
		return request
			.post('/login')
			.send({username: "user1", password: "passwordfromuser1"}) //req.body
			.expect('Content-Type', /json/)
			.expect(200).then(response => {
				expect(response.body).toEqual(
					expect.objectContaining({
						username: expect.any(String),
						password: expect.any(String),
					})
				);
			});
	});

	// Disconnected
	// it('login failed', async () => {
	// 	return request
	// 		.post('/login')
	// 		.send({username: "user1", password: "passwordfromuser1"}) //req.body
	// 		.expect('Content-Type', /json/)
	// 		.expect(404).then(response => {
	// 			expect(response.body).toEqual(
	// 				expect.objectContaining({
	// 					username: expect.any(String),
	// 					password: expect.any(String),
	// 				})
	// 			);
	// 		});
	// })

	it('register successfully', async () => {
		return request
			.post('/register')
			.send({username: "newuser", password: "passwordfromnewuser"}) //req.body for register
			.expect('Content-Type', /json/)
			.expect(200).then(response => {
				expect(response.body).toEqual(
					expect.objectContaining({
						username: expect.any(String),
						password: expect.any(String),
					})
				);
			});
	});

	// Disconnected
	// it('register failed', async () => {
	// 	return request
	// 		.post('/register')
	// 		.send({username: "newuser", password: "passwordfromnewuser"}) //req.body for register
	// 		.expect(404)
	// });
});
