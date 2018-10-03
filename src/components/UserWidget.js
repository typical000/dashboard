import React, {Component} from 'react';
import injectSheet from 'react-jss';
import Button from './Button';
import STAGE from '../constants/stage';

const styles = (theme) => ({
  widget: {
    background: theme.common.widget,
    borderRadius: theme.common.radius,
    padding: 20,
    marginTop: 20,
    '&:first-child': {
      marginTop: 0,
    },
  },
  info: {
    display: 'flex',
    alignItems: 'center',
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: 10,
    flexShrink: 0,
  },
  name: {
    margin: 0,
  },
  actions: {
    composes: '$info',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  back: {
    marginRight: 'auto',
  },
  forward: {
    marginLeft: 'auto',
  },
});

class UserWidget extends Component {
  handleLeftClick = () => {
    this.props.onClick(this.props.id, this.props.stage - 1);
  };

  handleRightClick = () => {
    this.props.onClick(this.props.id, this.props.stage + 1);
  };

  render() {
    const {classes, photo, firstName, lastName, stage} = this.props;
    return (
      <div className={classes.widget}>
        <div className={classes.info}>
          <img className={classes.photo} src={photo} role="presentation" />
          <h4 className={classes.name}>{`${firstName} ${lastName}`}</h4>
        </div>
        <div className={classes.actions}>
          {stage !== STAGE.APPLIED && (
            <Button className={classes.back} onClick={this.handleLeftClick}>
              &larr;
            </Button>
          )}
          {stage !== STAGE.HIRED && (
            <Button className={classes.forward} onClick={this.handleRightClick}>
              &rarr;
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(UserWidget);
