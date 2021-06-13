import Form from './components/Form';
// import Users from './components/Users';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:6969/graphql' }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Users /> */}
      <Form />
    </ApolloProvider>
  );
}

export default App;
