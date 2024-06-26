const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', async (req, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${req.query.user}`)
  const data = await response.json()
  console.log(data)
  res.json({
    "data": "test",
    "data": data,
  })
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})
export default app;