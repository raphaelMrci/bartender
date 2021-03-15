
const path = require("path"); 
const express = require("express");
const expressSession = require("express-session")
const morgan = require("morgan");
const index = require("./routes");
const socket = require("./socket");

const app = express();
const http = require('http').createServer(app);
const session = expressSession({
  secret: "my-secret",
  resave: true,
  saveUninitialized: true
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(morgan("short"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session);
app.use(index);

socket.init(http, session)

http.listen(3000, () => {
  console.log("server ready at http://localhost:3000");
});

