import React, {Component} from 'react';
import injectSheet from 'react-jss';
import Button from './Button';
import ACTION from '../constants/action';

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
  },
  name: {
    margin: 0,
  },
  actions: {
    composes: '$info',
    marginTop: 10,
    justifyContent: 'space-between',
  },
});

class UserWidget extends Component {
  handleLeftClick = () => {
    this.props.onClick(this.props.id, ACTION.BACK);
  };

  handleRightClick = () => {
    this.props.onClick(this.props.id, ACTION.FORWARD);
  };

  render() {
    const {classes, photo, firstName, lastName} = this.props;
    return (
      <div className={classes.widget}>
        <div className={classes.info}>
          <img className={classes.photo} src={photo} role="presentation" />
          <h4 className={classes.name}>{`${firstName} ${lastName}`}</h4>
        </div>
        <div className={classes.actions}>
          <Button onClick={this.handleLeftClick}>&larr;</Button>
          <Button onClick={this.handleRightClick}>&rarr;</Button>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(UserWidget);
