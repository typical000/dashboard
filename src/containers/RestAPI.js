import React, {Fragment, useCallback} from 'react';
import {useQuery} from '@apollo/client/react/hooks';
import USERS_QUERY from '../graphql/usersQuery.gql';
import Loader from '../components/Loader';

/**
 * Example how to use REST API inside Apollo Client (if needed).
 * Also, an example how to modify data in cache but using another approach
 * with "readQuery" and "writeQuery".
 */
const RestAPI = () => {
  const {data, loading, client} = useQuery(USERS_QUERY);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newResults = [...data.users.results];

      // Create a new entry
      newResults.push({
        ...newResults[0],
        name: {
          ...newResults[0].name,
          title: 'N/A',
          first: 'N/A',
          last: 'N/A',
        },
        login: {
          ...newResults[0].login,
          uuid: e.target.elements.uuid.value,
        },
      });

      client.writeQuery({
        query: USERS_QUERY,
        data: {
          ...data,
          users: {
            ...data.users,
            results: newResults,
          },
        },
      });
    },
    [data],
  );

  return (
    <Fragment>
      <Loader active={loading}>
        <h4>
          Consuming REST API (apollo-link-rest) & Modifying cache with query
          overwriting
        </h4>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter UUID" name="uuid" />{' '}
          <button type="submit">Add new user</button>
        </form>
        {data &&
          data.users.results.map(({login, name}) => (
            <div key={login.uuid}>
              {`${name.title} ${name.first} ${name.last} (${login.uuid})`}
            </div>
          ))}
      </Loader>
    </Fragment>
  );
};

export default RestAPI;
