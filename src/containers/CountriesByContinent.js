import React, {Fragment, useState} from 'react';
import {useQuery} from '@apollo/client/react/hooks';
import COUNTRY_BY_CONTINENT_QUERY from '../graphql/countryByContinent.gql';
import ErrorNotice from '../components/ErrorNotice';
import Loader from '../components/Loader';

/**
 * Illustration how queries work.
 * - Each query is saved in Apollo Cache (unless you specify 'no-cache' fetch policy).
 * - You can force to fetch new data from the back-end via fetch policy property.
 */
const CountriesByContinent = () => {
  const [continent, setContinent] = useState('EU');
  const [force, setForce] = useState(false);

  const {data, loading, error} = useQuery(COUNTRY_BY_CONTINENT_QUERY, {
    variables: {
      code: continent,
    },
    fetchPolicy: force ? 'network-only' : 'cache-first',
  });

  if (error) return <ErrorNotice error={error} />;

  return (
    <Loader active={loading}>
      <h4>Loading data (w/o forcing network requests) & Caching</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setContinent(e.target.elements.continent.value);
          setForce(e.target.elements.force.checked);
        }}
      >
        <input
          type="text"
          placeholder="Continent (EU, AS, NA, etc.)"
          name="continent"
          defaultValue="EU"
        />{' '}
        <button type="submit">Load countries</button>
        <br />
        <input type="checkbox" name="force" id="force" />{' '}
        <label htmlFor="force">Force network request</label>
      </form>
      {data &&
        data.continent && (
          <Fragment>
            <h2>{`${data.continent.name} (${data.continent.code})`}</h2>
            {data.continent.countries.map(({emoji, code, capital}) => (
              <div key={code}>{`${emoji} (${code}) - ${capital}`}</div>
            ))}
          </Fragment>
        )}
    </Loader>
  );
};

export default CountriesByContinent;
