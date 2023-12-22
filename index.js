const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const app = express();

const schema = buildSchema(`
  type Query {
    randomTry: Int!
    niceTry: String!
    dontTry: Float!
  }
`);

const root = {
  randomTry: () => Math.floor(Math.random() * 6 + 1),
  niceTry: () => (Math.random() < 0.6 ? 'Nice Try !! Dont Try?' : 'Ith Ayalde Kalamalle'),
  dontTry: () => Math.random() * 0.54,
};

// Use CORS middleware
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4500, () => console.log('App listening at http://localhost:4500/graphql'));
