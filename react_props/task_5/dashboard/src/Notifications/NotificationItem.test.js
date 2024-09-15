import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';


describe('NotificationItem', () => {
    it('Renders the NotificationItem component without crashing', () => {
        const component = shallow(<NotificationItem />);
        expect(component.exists()).toEqual(true);
    });
    it('Renders the NotificationItem component with a value', () => {
        const component = shallow(<NotificationItem value="test" />);
        expect(component.text()).toEqual('test');
    });
    it('Renders the NotificationItem component with an html property', () => {
        const component = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(component.html()).toContain('<u>test</u>');
    });
    it('Renders the NotificationItem component with a type and value', () => {
        const component = shallow(<NotificationItem type="default" value="test" />);
        expect(component.text()).toEqual('test');
        expect(component.prop('data-notification-type')).toEqual('default');
    });
    it('Renders the NotificationItem component with a type and html property', () => {
        const component = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
        expect(component.html()).toContain('<u>test</u>');
        expect(component.prop('data-notification-type')).toEqual('default');
    });
});