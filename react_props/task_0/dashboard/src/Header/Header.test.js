import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    it('Renders the Header component without crashing', () => {
        const component = shallow(<Header />);
        expect(component.exists()).toEqual(true);
    });
    it ('Renders a header with the class App-header', () => {
        expect(wrapper.find('.App-header')).to.have.lengthOf(1);
    });
});