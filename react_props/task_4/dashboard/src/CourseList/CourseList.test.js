import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';


describe('CourseList', () => {
    it('Renders the CourseList component without crashing', () => {
        const component = shallow(<CourseList />);
        expect(component.exists()).toEqual(true);
    });
    it('Renders the 5 different rows', () => {
        expect(wrapper.find('CourseListRow')).to.have.lengthOf(5);
        expect(wrapper.find('CourseListRow').at(0).props().textFirstCell).toEqual('Available courses');
        expect(wrapper.find('CourseListRow').at(0).props().isHeader).toEqual(true);
        expect(wrapper.find('CourseListRow').at(1).props().textFirstCell).toEqual('Course name');
        expect(wrapper.find('CourseListRow').at(1).props().textSecondCell).toEqual('Credit');
        expect(wrapper.find('CourseListRow').at(1).props().isHeader).toEqual(true);
        expect(wrapper.find('CourseListRow').at(2).props().textFirstCell).toEqual('ES6');
        expect(wrapper.find('CourseListRow').at(2).props().textSecondCell).toEqual('60');
        expect(wrapper.find('CourseListRow').at(2).props().isHeader).toEqual(false);
        expect(wrapper.find('CourseListRow').at(3).props().textFirstCell).toEqual('Webpack');
        expect(wrapper.find('CourseListRow').at(3).props().textSecondCell).toEqual('20');
        expect(wrapper.find('CourseListRow').at(3).props().isHeader).toEqual(false);
        expect(wrapper.find('CourseListRow').at(4).props().textFirstCell).toEqual('React');
        expect(wrapper.find('CourseListRow').at(4).props().textSecondCell).toEqual('40');
        expect(wrapper.find('CourseListRow').at(4).props().isHeader).toEqual(false);
    });
});