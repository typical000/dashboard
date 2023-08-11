import React, {Fragment} from 'react';
import {useApolloClient} from '@apollo/client/react/hooks';
import COUNTRY_FRAGMENT from '../graphql/fragments/country.gql';

/**
 * Illustation how to work with fragments and modify parts of existing data
 * using 'readFragment' and 'writeFragment'.
 */
const EditExistingCountry = () => {
  const client = useApolloClient();

  return (
    <Fragment>
      <h4>Modifying cache with Fragments</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fragment = {
            id: `Country:${e.target.elements.code.value}`,
            fragment: COUNTRY_FRAGMENT,
          };

          const data = client.readFragment(fragment);

          if (!data) {
            console.error('No country found! :(');
          }

          client.writeFragment({
            ...fragment,
            data: {
              ...data,
              capital: e.target.elements.capital.value,
            },
          });
        }}
      >
        <input type="text" placeholder="Enter Country Code" name="code" />{' '}
        <input type="text" placeholder="Set a new capital" name="capital" />{' '}
        <button type="submit">Overwrite</button>
      </form>
    </Fragment>
  );
};

export default EditExistingCountry;
