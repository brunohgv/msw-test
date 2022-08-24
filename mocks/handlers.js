const { rest } = require('msw') 
const { TODO_SUCCESS, TODO_ERROR } = require('./todoResponses') 

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos', async (req, res, ctx) => {
    return res(ctx.json(TODO_SUCCESS))
  })
]

module.exports = { handlers }