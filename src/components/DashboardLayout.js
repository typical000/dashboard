import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  container: {
    maxWidth: 800,
    width: '100%',
    margin: [20, 'auto'],
    padding: 20,
    borderRadius: theme.common.radius,
    background: theme.common.card,
  },
  content: {
    position: 'relative',
    minHeight: 200,
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 20,
    borderBottom: [2, 'solid', theme.common.border],
  },
  title: {
    padding: [0, 10],
    flexGrow: 1,
    width: '33.3%',
    textAlign: 'center',
    /**
     * Some interesting tip: 'jss-expand' was created by me.
     * It allows to write code as you can see below.
     * @see https://github.com/cssinjs/jss-expand
     */
    font: {
      weight: 'bold',
      size: 16,
    },
  },
});

/**
 * Wrapper component for dashboard.
 * We can decompose code, for e.g. move heading into separated components
 * but we don't need to do this
 */
const DashboardLayout = ({classes, children}) => (
  <div className={classes.container}>
    <div className={classes.heading}>
      <div className={classes.title}>Applied</div>
      <div className={classes.title}>Interviewing</div>
      <div className={classes.title}>Hired</div>
    </div>
    <div className={classes.content}>{children}</div>
  </div>
);

export default injectSheet(styles)(DashboardLayout);
