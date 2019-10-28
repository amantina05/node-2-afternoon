// Create an array to hold the messages.
const messages = []

// Create a variable that will keep track of what id to assign to messages.
const id = 0


// Export an object with methods to create, read, update, and delete messages.
module.exports = {
// Create - Should be able to create a message using text and time off of the request body.
// Should be able to assign a unique id to the message.
  create: (req, res) => {
    const {text, time} = req.body
    messages.push({id, text, time})
    //increment id
    id++
    //return the messages array
    res.status(200).send(messages)
  },
// Read - Should be able to return the messages array.
  read: (req, res) => {
    //return the messages array
    res.status(200).send(messages)
  },
// Update - Should be able to update the text property of a message using the request body.
// Should be able to determine which message to update using an id url parameter.
  update: (req, res) => {
    // should update the text property of a message using the text value from the request body
    const {text} = req.body
    // should also determine which message to update based on the value of id from the request url parameters
    const updateID = req.params.id
    // use .findIndex to get the index where the ids match
    const messageIndex = messages.findIndex(message => message.id == updateID)
    // get the object using the index and update the object
    let message = messages[messageIndex]

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    }
    //return the messages array
    res.status(200).send(messages)
  },
// Delete - Should be able to delete a message using an id url parameter.
  delete: (req, res) => {
    // findIndex again with the id to get the index of the message object and then use .splice to remove it from the messages array
    const deleteID = req.params.id
    messageIndex = messages.findIndex( message => message.id == deleteID)
    messages.splice(messageIndex, 1)
    //return the messages array
    res.status(200).send(messages)
  }
}
