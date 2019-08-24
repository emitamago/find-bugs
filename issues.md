# Broken App Issues

- Main issues
* no modules were installed. And no package.json
* original code was lack of middleware `app.use(express.json());`
it would never get body of request
* axios call were returning pending promise when it was passed to \
another operation


- other issue
* created server.js. For testability, server should be started from separate file
* implemented error handling. Add error class and included into app.js for better 
eror handling practice
* simplied returning json response. There was unnecessary step in original because of 
lack of middleware for json. 
* added comments for documentation.
