import React from "react";
import { shallow } from "enzyme";
import ContextComponent from "./ContextComponent";

describe("ContextComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ContextComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
