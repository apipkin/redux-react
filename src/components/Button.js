import React from 'react';

export default class Button extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    onClick: React.PropTypes.func
  };

  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.children}</button>
    );
  }
}
