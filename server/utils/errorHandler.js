module.exports = (req, res, error) => {
	console.log(error);
	return res.status(500).send({
		name: "Internal Server Error",
		code: 500,
		message: error.message
	});
}