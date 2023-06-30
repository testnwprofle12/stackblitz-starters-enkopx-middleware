// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);
// application level middleware
const express = require('express');
const reqFilter = require('./middleware');
const route = express.Router();
const app = express();
/*const reqFilter = (req, resp, next) => {
  //console.log('reqFilter');
  if (!req.query.age) {
    resp.send('please provide age');
  } else if (req.query.age < 18) {
    resp.send('you cannot access the page');
  } else {
    next();
  }
};*/

//app.use(reqFilter);

route.use(reqFilter);
app.get('/', (req, resp) => {
  resp.send('Welcome to home page');
});
app.get('/users', reqFilter, (req, resp) => {
  resp.send('Welcome to users page');
});
route.get('/about', (req, resp) => {
  resp.send('Welcome to about page');
});
route.get('/contact', (req, resp) => {
  resp.send('Welcome to contact page');
});

app.use('/', route);

app.listen(5000);
