import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = (theme) => ({
  button: {
    display: 'flex',
    position: 'relative',
    padding: [0, 5],
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: 'bold',
    lineHeight: '20px',
    cursor: 'pointer',
    userSelect: 'none',
    appearance: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: theme.button.color,
    border: 'none',
    borderRadius: theme.common.radius,
    outline: 'none',
    background: theme.button.background,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: theme.shadow.level1,
    '&:hover, &:active, &:focus': {
      background: theme.button.hoverBackground,
    },
  },
});

/**
 * Very, very simplified version of button UI component.
 * It only respond on clicks and can render anything inside it.
 */
const Button = ({classes, className, children, onClick}) => (
  <button className={cn(classes.button, className)} onClick={onClick}>
    {children}
  </button>
);

export default injectSheet(styles)(Button);
