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

  it ('renders the Header component', () => {
    expect(wrapper.find('Header')).to.have.lengthOf(1);
  });

  it ('renders the Login component', () => {
    expect(wrapper.find('Login')).to.have.lengthOf(1);
  });

  it ('renders the Footer component', () => {
    expect(wrapper.find('Footer')).to.have.lengthOf(1);
  });

  it ('renders the Notification component', () => {
    expect(wrapper.find('Notification')).to.have.lengthOf(1);
  });

});