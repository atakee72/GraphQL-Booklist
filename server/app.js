const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://atakee:fGjERYZ3xPPwm4G@cluster0.bg6julm.mongodb.net/test"
);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5500, () => {
  console.log("Now listening for requests on port 5500");
});
