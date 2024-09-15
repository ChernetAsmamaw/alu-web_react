import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Renders the Footer component without crashing", () => {
    it("Renders the Footer component without crashing", () => {
        const component = shallow(<Footer />);
        expect(component.exists()).toEqual(true);
    });
    it ('Renders a footer with the class App-footer', () => {
        expect(wrapper.find('.App-footer')).to.have.lengthOf(1);
    });
    it ('Renders the text "Copyright"', () => {
        expect(wrapper.text()).to.contain('©');
    });
});
