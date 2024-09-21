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

	it('logOut function is called and alert is shown when control and h keys are pressed', () => {
		const logOut = jest.fn();
		const wrapper = shallow(<App logOut={logOut} />);
		const alert = jest.spyOn(global, 'alert').mockImplementation(() => {});

		const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
		document.dispatchEvent(event);

		expect(logOut).toHaveBeenCalled();
		expect(alert).toHaveBeenCalledWith('Logging you out');

		jest.restoreAllMocks();
	});
});
