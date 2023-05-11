const fs = require("fs");
const express = require("express");
const app = express();

// Importing discussions from discussions.json file
const discussions = /* ... */

// Middlewares
app.use(express.json());

// Write GET endpoint for sending all the discussions to user here

/*

Endpoint - /api/v1/discussions

Return 200 Status code
json = {
  message: 'Discussions fetched successfully',
  status: 'Success'
  data: [
    {
      id: 1,
      heading: 'Binary Search',
      body: 'How we can prove time complexity of BS is log(n) ?',
      creator_id: 'xyz1'
    },
    {
      id: 2,
      heading: 'Binary Search',
      body: 'Is BS a imp topic ?',
      creator_id: 'xyz2'
    }
  ]
}

*/
//Write your code here.


module.exports = app;
