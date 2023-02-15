const app = require('express')();
const PORT = 8080;

// Starts the api listening to the port and giving a log when it is ready 
app.listen(PORT, () => console.log(`It's live on: http://localhost:${PORT}`));
// On the browser it will return an Cannot GET / error since I don't have endpoints yet

// To add an endpoint, give it to app with the endpoint and callback handler
app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'Navy Blue',
    size: 'medium'
  })
});

// To add dynamic data to endpoints, just add query params
app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params; // getting the query param
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'We need a logo!' });
  }

  res.send({ tshirt: `Navy blue with your ${logo} and ID of ${id}` });
});
