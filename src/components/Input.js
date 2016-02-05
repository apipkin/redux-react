import React from 'react';

export default class Input extends React.Component {
  static propTypes = {
    value: React.PropTypes.any
  };

  render() {
    return (
      <input defaultValue={this.props.value}/>
    );
  }
}
