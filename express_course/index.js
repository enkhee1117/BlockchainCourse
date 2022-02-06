const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res, next) => {
  res.send("Hello world!");
  next();
  console.log("Came here!");
})
app.post('/', (req, res, next) => {
  res.send("Post request");
})
// app.listen(3000, () => console.log('Example app listening on port 3000!'))

const server = app.listen(3000, () => console.log("App running on port 3000"))

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    debug('HTTP server closed')
  })
})

/**
 * sudo lsof -i :3000
this will list all PID listening on this port, once you have the PID you can terminate it with the following:

kill -9 {PID}
 */
