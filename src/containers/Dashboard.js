import React from 'react';
import {Query} from 'react-apollo';
import Loader from '../components/Loader';
import DashboardUserGrid from '../components/DashboardUserGrid';
import ErrorNotice from '../components/ErrorNotice';
import DashboardLayout from '../components/DashboardLayout';
import USERS_QUERY from '../graphql/usersQuery.gql';

const Dashboard = () => (
  <DashboardLayout>
    <Query query={USERS_QUERY}>
      {({data, loading, error, client}) => {
        if (error) return <ErrorNotice error={error} />;

        const users = data && data.users && data.users.results;
        return (
          <Loader active={loading}>
            <DashboardUserGrid
              applied={users}
              interviewing={users}
              hired={users}
              onUserClick={(id, action) => {
                console.log('> UPDATE');
                console.log(id);
                console.log(action);
                console.log(client);
              }}
            />
          </Loader>
        );
      }}
    </Query>
  </DashboardLayout>
);

export default Dashboard;
