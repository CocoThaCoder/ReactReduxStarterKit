import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Map } from 'immutable';
import ConnectedMain, { Main } from '../components/main';

describe('Main Module Tests Shallow Approach', () => {

  const initialState = { counter: Map({ count: 0 }) };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(
      <ConnectedMain store={store}></ConnectedMain>
    );
  });

  test('Render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('Check Prop matches with initialState', () => {
    expect(wrapper.prop('counter')).toEqual(initialState.counter);
  });
});

describe('Main Module Tests Mount Approach', () => {

  const initialState = { counter: Map({ count: 0 }) };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}><ConnectedMain /></Provider>
    );
  });

  test('Render the connected component', () => {
    expect(wrapper.find(ConnectedMain).length).toEqual(1);
  });

  test('Check Prop matches with initialState', () => {
    expect(wrapper.find('Main').prop('counter')).toEqual(initialState.counter);
  });
});