import React from 'react';
import injectSheet from 'react-jss';
import {lighten} from 'polished';

const styles = (theme) => ({
  container: {
    padding: 20,
    borderRadius: theme.common.radius,
    textAlign: 'center',
    border: [1, 'solid', theme.danger],
    background: lighten(0.4, theme.danger),
  },
  title: {
    color: theme.danger,
    fontSize: 24,
    margin: [0, 0, 20],
  },
  text: {
    color: theme.danger,
    fontSize: 14,
    margin: [0, 0, 10],
    '&:empty': {
      display: 'none',
    },
  },
});

const ErrorNotice = ({classes, error}) => (
  <div className={classes.container}>
    <h2 className={classes.title}>Something went wrong</h2>
    <p className={classes.text}>
      Please, try again later. Maybe this will help you:
    </p>
    <p className={classes.text}>{error}</p>
  </div>
);

export default injectSheet(styles)(ErrorNotice);
