import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { increment } from '../actions';

import { AppContainer, Counter, Title, Image, Button } from '../styles/main';

class Main extends Component {
  render() {
    const { counter, increment } = this.props;
    return (
      <AppContainer>
        <Title>React Starter Kit</Title>
        <Image src="/public/images/minime.png" alt="" />
        <Counter>{counter.get('count')}</Counter>
        <Button onClick={increment}>Increment</Button>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps, { increment })(Main);
