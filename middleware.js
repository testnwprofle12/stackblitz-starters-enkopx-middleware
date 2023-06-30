module.exports = reqFilter = (req, resp, next) => {
  //console.log('reqFilter');
  if (!req.query.age) {
    resp.send('please provide age');
  } else if (req.query.age < 18) {
    resp.send('you cannot access the page');
  } else {
    next();
  }
};
