import React from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

export default class Counter extends React.Component {
  static propTypes = {
    count: React.PropTypes.number,
    store: React.PropTypes.object
  };

  componentWillMount() {

  }

  handleIncrementClick = () => {
    console.log('handleIncrementClick');
    this.context.store.dispatch({ type: 'INCREMENT' });
  };

  handleDecrementClick = () => {
    console.log('handleDecrementClick');
    this.context.store.dispatch({ type: 'DECREMENT' });
  };

  render() {
    return (
      <div>
        <Input value={this.props.count}/>
        <Button onClick={this.handleIncrementClick}>+</Button>
        <Button onClick={this.handleDecrementClick}>-</Button>
      </div>
    );
  }
}
