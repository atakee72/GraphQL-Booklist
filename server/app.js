import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const mongoKey = process.env.MONGODB_KEY;

mongoose.connect(
  `mongodb+srv://atakee:${mongoKey}@cluster0.bg6julm.mongodb.net/test`
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
