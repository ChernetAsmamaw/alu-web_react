// Test wether the App component renders without crashing

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Testing the App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it ('renders App without crashing', () => {
    expect(wrapper.exists()).equal(true);
  });

  it ('renders a div with the class App', () => {
    expect(wrapper.find('.App')).to.have.lengthOf(1);
  });

});