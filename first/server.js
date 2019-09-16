var express = require('express');
var app = express();

var port = 3001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server started at' + port);

app.post('/api/login', function(req, res)
	
{
	var results = [
 {
	title: "Java",
	instructor: "Saurab sir",
	level: "Beginners",
	total_videos: 10
},
 {
	title: "c++",
	instructor: "Saurab sir",
	level: "Beginners",
	total_videos: 15
},
{
	title: "Web",
	instructor: "Shail M",
	level: "Beginners",
	total_videos: 20
	}];

	res.json(results);
})