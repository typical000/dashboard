import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  section: {
    boxShadow: theme.shadow.level1,
    background: theme.common.card,
    borderRadius: theme.common.radius,
    margin: 20,
    padding: 20,
    position: 'relative',
  },
}));

const Section = ({children}) => {
  const classes = useStyles();
  return <div className={classes.section}>{children}</div>;
};

export default Section;
