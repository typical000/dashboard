import React from 'react';
import cn from 'classnames';
import {rotateZ} from 'css-functions';
import {createUseStyles} from 'react-jss';

/**
 * Just a loader UI component.
 * In real app it must be placed in some separated
 * package (or yarn workspace) with all other UI components.
 */
const useStyles = createUseStyles((theme) => ({
  loader: {
    borderRadius: 'inherit',
  },
  active: {
    '&::before, &::after': {
      position: 'absolute',
      content: '""',
    },
    '&::before': {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 100,
      opacity: 0.8,
      background: theme.common.card,
    },
    '&::after': {
      zIndex: 101,
      width: 60,
      height: 60,
      top: '50%',
      left: '50%',
      marginTop: -30,
      marginLeft: -30,
      border: [4, 'solid', theme.loader.background],
      borderTopColor: theme.loader.foreground,
      borderRadius: '50%',
      willChange: 'transform',
      animation: {
        name: 'spin',
        duration: 1000,
        iterationCount: 'infinite',
        timingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },

  '@keyframes spin': {
    from: {
      transform: rotateZ(0),
    },
    to: {
      transform: rotateZ(360),
    },
  },
}));

const Loader = ({children, className, active}) => {
  const css = useStyles();
  return (
    <div className={cn(css.loader, active && css.active, className)}>
      {children}
    </div>
  );
};

export default Loader;
