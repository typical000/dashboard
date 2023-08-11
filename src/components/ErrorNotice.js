import React from 'react';
import {createUseStyles} from 'react-jss';
import {lighten} from 'polished';

const useStyles = createUseStyles((theme) => ({
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
}));

const ErrorNotice = ({error}) => {
  const css = useStyles();
  return (
    <div className={css.container}>
      <h2 className={css.title}>Something went wrong</h2>
      <p className={css.text}>
        Please, try again later. Maybe this will help you:
      </p>
      <p className={css.text}>{JSON.stringify(error)}</p>
    </div>
  );
};

export default ErrorNotice;
