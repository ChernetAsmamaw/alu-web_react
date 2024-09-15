import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Renders the Login component without crashing", () => {
    it("Renders the Login component without crashing", () => {
        const component = shallow(<Login />);
        expect(component.exists()).toEqual(true);
    });
    it("Renders a body with the class App-body", () => {
        expect(wrapper.find(".App-body")).to.have.lengthOf(1);
    });
    it ("Renders two input tags and 2 label tags", () => {
        expect(wrapper.find('input')).to.have.lengthOf(2);
        expect(wrapper.find('label')).to.have.lengthOf(2);
    });
});