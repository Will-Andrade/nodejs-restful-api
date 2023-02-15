# Node.js tshirt printing store RESTful API
A VERY simple introduction to building RESTful APIs with Node.js and JavaScript. Follow along from Fireship's "RESTful API's in 100 seconds" video -> https://youtu.be/-MTSQjw5DrM

## Endpoints - Responses
GET: /tshirt -> { tshirt: 'name', size: 'size }
POST: /tshirt/:id (also needs a "logo" string on the req body) -> { tshirt: 'tshirtName with your logo and ID of id' }
