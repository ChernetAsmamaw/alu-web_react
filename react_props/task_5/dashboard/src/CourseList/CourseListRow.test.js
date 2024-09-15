import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';


describe("CourseListRow", () => {
    it ("Renders the CourseListRow component without crashing", () => {
        const component = shallow(<CourseListRow />);
        expect(component.exists()).toEqual(true);
    });
    it ("Renders one cell with colspan = 2 when textSecondCell does not exist", () => {
        const component = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" />);
        expect(component.find('th')).toHaveLength(1);
        expect(component.find('th').prop('colSpan')).toEqual(2);
    });
    it ("Renders two cells when textSecondCell is present", () => {
        const component = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" textSecondCell="Second cell" />);
        expect(component.find('th')).toHaveLength(2);
        expect(component.find('th').at(0).text()).toEqual("First cell");
        expect(component.find('th').at(1).text()).toEqual("Second cell");
    });
});