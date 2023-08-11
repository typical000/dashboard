import React, {Fragment} from 'react';

import CountriesByContinent from './CountriesByContinent';
import EditExistingCountry from './EditExistingCountry';
import RestAPI from './RestAPI';
import QueryDeduplication from './QueryDeduplication';
import Section from '../components/Section';

const Dashboard = () => (
  <Fragment>
    <Section>
      <CountriesByContinent />
    </Section>
    <Section>
      <EditExistingCountry />
    </Section>
    <Section>
      <QueryDeduplication />
    </Section>
    <Section>
      <RestAPI />
    </Section>
  </Fragment>
);

export default Dashboard;
