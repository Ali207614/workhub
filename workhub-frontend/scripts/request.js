async function request(path, method, body) {
    console.log(body)
	let response = await fetch(`http://localhost:4500/${path}`, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})

	return await response.json()
}