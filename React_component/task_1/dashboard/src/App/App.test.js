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
});