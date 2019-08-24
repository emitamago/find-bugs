const express = require('express');
let axios = require('axios');
let Promise = require('promise');
const ExpressError = require("./expressError");

const  app = express();

app.use(express.json());

// create variable for base url for readability
const BASEURL = 'https://api.github.com/users';


// route to return request with json
app.post('/', async function(req, res, next) {
  try {
      let results =  
      await Promise.all(req.body.developers
                                  .map( d => { return axios.get(`${BASEURL}/${d}`)})
                                  );
      let formattedResults = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
      return res.json(formattedResults);

    } catch(err) {
      return next(err);
    }
});


app.use(function (req, res, next) {
  // handling 404 erors
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError);
});

app.use(function(err, req, res, next) {
   // setting the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;
  
  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});




module.exports = app;
