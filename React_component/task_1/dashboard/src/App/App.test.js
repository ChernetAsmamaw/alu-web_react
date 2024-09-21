import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe("<App />", () => {
	it("App renders without any errors", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toEqual(true);
	});

	it('Verify if CourseList is displayed when isLoggedIn is false', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(CourseList)).toHaveLength(0);
	});

	it('Verify if CourseList is displayed when isLoggedIn is true', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.find(CourseList)).toHaveLength(1);
		expect(wrapper.find(Login)).toHaveLength(0);
	});

	it('Verify if the user can log out using ctrl + h', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		wrapper.instance().handleKeyDown({ key: 'h', ctrlKey: true });
		expect(wrapper.state().isLoggedIn).toEqual(false);
	});
});