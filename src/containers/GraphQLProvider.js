import React from 'react';
import {ApolloClient, ApolloLink} from '@apollo/client/core';
import {InMemoryCache, defaultDataIdFromObject} from '@apollo/client/cache';
import {ApolloProvider} from '@apollo/client/react';
import {BatchHttpLink} from '@apollo/client/link/batch-http';
import {RestLink} from 'apollo-link-rest';

const client = new ApolloClient({
  link: ApolloLink.from([
    new RestLink({
      uri: 'https://randomuser.me/api/',
    }),
    new BatchHttpLink({
      uri: 'https://countries.trevorblades.com/graphql',
    }),
  ]),
  cache: new InMemoryCache({
    dataIdFromObject: (object) => {
      const id = object.code || object.id;
      if (id) {
        // eslint-disable-next-line
        return `${object.__typename}:${id}`;
      }
      return defaultDataIdFromObject(object);
    },
  }),

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
