const express = require('express');
const cors = require('cors');
const app = express();

const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas');

app.use(cors());
app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = 6969;
app.listen(PORT, () => {
  console.log(`Server Runing on PORT ${PORT}`);
});
