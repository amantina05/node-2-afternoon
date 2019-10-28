const express = require('express')
const bodyParser = require('body-parser')
// The entire index.js will have access to all the methods we put on the object ( create, read, update, and delete )
  //
const controller = require('server/controllers/messages_controller.js')

const app = express()
// Configure the app to parse JSON from the body.
app.use(bodyParser.json());


// use the built-in methods express gives us to create endpoints. We'll use post for create; get for read; put for update; and delete for delete. We'll also make a messagesBaseUrl variable so that if the URL ever changes we won't have to update in four different places. The messagesBaseUrl should equal /api/messages
const messagesBaseUrl = '/api/messages'
app.post(messagesBaseUrl, controller.create)
app.get(messagesBaseUrl, controller.read)
// put and delete endpoints, we need to add on a url parameter of id. A url paramter can be defined by adding :variableName when making the URL for an endpoint
app.put(`${messagesBaseUrl}/:id`, controller.update)
app.delete(`${messagesBaseUrl}/:id`, controller.delete)

// Configure the app to listen on port 3001 and display a message when it is listening.
const port = 3001

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
