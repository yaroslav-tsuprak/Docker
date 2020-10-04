const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/test", (req, res) => {
	res.send("Our api service is working correctly");
})

app.listen(port, () => {
	console.log(`Starting api service on port: ${port}`);
});