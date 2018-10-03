import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {withClientState} from 'apollo-link-state';
import {ApolloLink} from 'apollo-link';
import {RestLink} from 'apollo-link-rest';

/**
 * Just for example how local stage is managed in react apollo
 * In real app those resolvers must be moved into separated module.
 */
const resolvers = {
  defaults: {
    stage: 0, // In this example we just set user as 'applied'
  },
  resolvers: {
    Mutation: {
      updateStage: (_, {id, stage}, {cache}) => {
        cache.writeData({id, data: {stage}});
        return null;
      },
    },
  },
};

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

const cache = new InMemoryCache({
  dataIdFromObject: (object) =>
    // Additional operation to normalize cache
    (object.login && object.login.uuid) || object.id || null,
});

const client = new ApolloClient({
  link: ApolloLink.from([withClientState({cache, ...resolvers}), restLink]),
  cache,

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
