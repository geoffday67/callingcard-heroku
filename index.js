var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/reverse', function(request, response)
{
  var input = request.query.input;
  if (!input)
  {
  	response.status(404).send('No input string found');
	return;
  }

  var output = input.split('').reverse().join('');
  response.type('text/plain');
  response.send(output);
});

app.listen(app.get('port'), function()
{
  console.log('Node app is running on port', app.get('port'));
});
