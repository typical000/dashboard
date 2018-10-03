import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {RestLink} from 'apollo-link-rest';

/**
 * Personally, I don't like Redux because we need to write too many code
 * (resolvers, actions, action creators, mapping state to props) for solving simple tasks
 *
 * So in this case to experiment how react-apollo works with rest links.
 * It's, anyway, a good experience.
 */
const restLink = new RestLink({
  uri: 'https://randomuser.me/api/',
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),

  /**
   * Because it is an experiment we use hardcoded value
   * In working example we'll use 'process.env'
   */
  connectToDevTools: true,
  addTypeName: true,
});

const GraphQLProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default GraphQLProvider;
