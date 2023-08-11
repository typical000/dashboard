import React, {Fragment} from 'react';
import {gql} from '@apollo/client/core';
import {useApolloClient} from '@apollo/client/react/hooks';

const QueryDeduplication = () => {
  const client = useApolloClient();

  const handleDeduplicationClick = async () => {
    /**
     * Illustation another way how we can consume GQL queries without
     * creating *.gql files. But, personally, I don't like this approach since:
     * - Instead of compiling queries in runtime they are executed
     * - Mixing everything in JS is not for me
     * The only case to use this in JS is when you need to create a truly dynamic query
     * with different fields.
     */
    const firstData = await client.query({
      query: gql`
        query DeduplicatedQuery {
          language(code: "en") {
            name
            code
          }
        }
      `,
    });

    console.log(firstData.data.language);

    // This query is a subset of the DeduplicatedQuery
    const secondData = await client.query({
      query: gql`
        query SubsetDeduplicatedQuery {
          language(code: "en") {
            code
          }
        }
      `,
    });

    console.log(secondData.data.language);
  };

  const handleNoDeduplicationClick = async () => {
    /**
     * When two different queries have a common part but differ at least
     * in one field - both requests will be sent to the server.
     * So be careful, especially with large queries - you can force the
     * back-end to make additional calculations without reason.
     */
    await client.query({
      query: gql`
        query DeduplicatedQuery {
          language(code: "en") {
            code
            native
          }
        }
      `,
    });

    await client.query({
      query: gql`
        query DeduplicatedQuery {
          language(code: "en") {
            code
            rtl
          }
        }
      `,
    });
  };

  return (
    <Fragment>
      <h4>Query Deduplication</h4>
      <button onClick={handleDeduplicationClick}>
        Test query deduplication
      </button>{' '}
      <button onClick={handleNoDeduplicationClick}>
        Test non deduping queries
      </button>
    </Fragment>
  );
};

export default QueryDeduplication;
