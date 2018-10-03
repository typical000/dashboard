import React from 'react';
import {Query} from 'react-apollo';
import groupBy from 'lodash/groupBy';
import Loader from '../components/Loader';
import DashboardUserGrid from '../components/DashboardUserGrid';
import ErrorNotice from '../components/ErrorNotice';
import DashboardLayout from '../components/DashboardLayout';
import USERS_QUERY from '../graphql/usersQuery.gql';
import UPDATE_STAGE_MUTATION from '../graphql/updateStageMutation.gql';
import STAGE from '../constants/stage';

const Dashboard = () => (
  <DashboardLayout>
    <Query query={USERS_QUERY}>
      {({data, loading, error, client}) => {
        if (error) return <ErrorNotice error={error} />;

        // Sort users by 'stage' (only client data)
        // @see GraphQLProvider.js
        const userGroups = groupBy(
          data && data.users && data.users.results,
          (user) => user.stage,
        );

        return (
          <Loader active={loading}>
            <DashboardUserGrid
              applied={userGroups[STAGE.APPLIED]}
              interviewing={userGroups[STAGE.INTERVIEWING]}
              hired={userGroups[STAGE.HIRED]}
              onUserClick={(id, stage) => {
                client.mutate({
                  mutation: UPDATE_STAGE_MUTATION,
                  variables: {
                    id,
                    stage,
                  },
                });
              }}
            />
          </Loader>
        );
      }}
    </Query>
  </DashboardLayout>
);

export default Dashboard;
