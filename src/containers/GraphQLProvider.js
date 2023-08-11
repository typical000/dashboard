import React from 'react';
import {ApolloClient, ApolloLink} from '@apollo/client/core';
import {InMemoryCache, defaultDataIdFromObject} from '@apollo/client/cache';
import {ApolloProvider} from '@apollo/client/react';
import {BatchHttpLink} from '@apollo/client/link/batch-http';
import {RestLink} from 'apollo-link-rest';

/**
 * Apollo Client works with "links". A link have something in common with Redux middlewares.
 * Each request "from" and "to" the client passes all links specified under the "link" property.
 *
 * Also, there is possible to add branching in your links (for e.g. you want to send some queries
 * to one endpoint, and other part - to another endpoint etc.) See:
 * https://github.com/apollographql/apollo-client/blob/f6556706e088dadf443ee71e23603ac5549f60ba/src/link/core/ApolloLink.ts#L40
 *
 * More information about links can be found here:
 * https://www.apollographql.com/docs/react/api/link/introduction/
 */
const client = new ApolloClient({
  link: ApolloLink.from([
    new RestLink({
      uri: 'https://randomuser.me/api/',
    }),
    /**
     * If you don't need queries batching you can use regular HTTPLink
     * https://www.apollographql.com/docs/react/api/link/apollo-link-http
     */
    new BatchHttpLink({
      uri: 'https://countries.trevorblades.com/graphql',
    }),
  ]),
  /**
   * Apollo provides normalized storage. So you don't need to have in terms of one project
   * both Apollo and Redux (for example)
   */
  cache: new InMemoryCache({
    /**
     * Because I used third-party API I had a need to modify Apollo's default behavior.
     * But the best practice is to provide and "id" field with each type allowing InMemoryCache
     * to store correctly normalized data and allow features like modifying data without an
     * updater function.
     * See more here: https://www.apollographql.com/docs/react/data/mutations/#the-update-function
     */
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
