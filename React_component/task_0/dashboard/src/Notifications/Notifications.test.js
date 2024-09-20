// Test weather the Notifications component renders without crashing

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

describe('Testing the Notifications Component', () => {
  
    let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it ('renders Notifications without crashing', () => {
    expect(wrapper.exists()).equal(true);
  });

  it ('renders Notifications with 3 list items', () => {
    expect(wrapper.find('li')).to.have.lengthOf(3);
  });

  it ('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).equal(true);
  });

  it ('Render menueItem when displayDrawer is false', () => {
    expect(wrapper.find('MenuItem')).to.have.lengthOf(0);
  });
  it ('div.Notifications is not being displayed when displayDrawer is false', () => {
    expect(wrapper.find('.Notifications')).to.have.lengthOf(1);
  });
  it ('div.Notifications is being displayed when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.Notifications')).to.have.lengthOf(1);
  });
  it ('Render menueItem when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('MenuItem')).to.have.lengthOf(1);
  });

  it ('Render correctly when pass an empty array or undefined', () => {
    wrapper.setProps({ displayDrawer: true, listNotifications: [] });
    expect(wrapper.find('MenuItem')).to.have.lengthOf(1);
  });
  it ('Render correctly when pass list of notifications', () => {
    wrapper.setProps({ displayDrawer: true, listNotifications: [{ id: 1, value: 'New course available' }, { id: 2, value: 'New resume available' }, { id: 3, value: 'New data available' }] });
    expect(wrapper.find('MenuItem')).to.have.lengthOf(1);
  });
  it ('Render correctly when listNotifications is empty', () => {
    wrapper.setProps({ displayDrawer: true, listNotifications: [] });
    expect(wrapper.find('MenuItem')).to.have.lengthOf(1);
  });

});