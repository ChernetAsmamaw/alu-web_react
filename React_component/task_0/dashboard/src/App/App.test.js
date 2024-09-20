// Test whether the App component renders without crashing

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Testing the App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders App without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders a div with the class App', () => {
    expect(wrapper.find('.App')).toHaveLength(1);
  });

  it('renders the Header component', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('renders the Login component', () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('renders the Footer component', () => {
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('renders the Notifications component', () => {
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('does not render the CourseList component when isLoggedIn is false', () => {
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('renders the CourseList component when isLoggedIn is true', () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('passes the correct listNotifications prop to Notifications', () => {
    const notificationsProp = wrapper.find('Notifications').prop('listNotifications');
    expect(notificationsProp).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ]);
  });

  it('passes the correct listCourses prop to CourseList when isLoggedIn is true', () => {
    wrapper.setProps({ isLoggedIn: true });
    const coursesProp = wrapper.find('CourseList').prop('listCourses');
    expect(coursesProp).toEqual([
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]);
  });
});