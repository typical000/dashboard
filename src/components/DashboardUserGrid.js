import React from 'react';
import injectSheet from 'react-jss';
import UserWidget from './UserWidget';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  column: {
    flex: {
      grow: 1,
      shrink: 0,
    },
    width: '33.3%',
    padding: 10,
    boxSizing: 'border-box',
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
};

const CATEGORIES = ['applied', 'interviewing', 'hired'];

const DashboardUserGrid = ({classes, onUserClick, ...props}) => (
  <div className={classes.container}>
    {CATEGORIES.map((category) => (
      <div className={classes.column} key={category}>
        {props[category] &&
          props[category].map((user) => (
            <UserWidget
              key={user.login.uuid}
              id={user.login.uuid}
              photo={user.picture.thumbnail}
              firstName={user.name.first}
              lastName={user.name.last}
              onClick={onUserClick}
            />
          ))}
      </div>
    ))}
  </div>
);

export default injectSheet(styles)(DashboardUserGrid);
