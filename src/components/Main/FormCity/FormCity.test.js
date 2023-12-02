import React from "react";
import { shallow } from "enzyme";
import FormCity from "./FormCity";

describe("FormCity", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormCity />);
    expect(wrapper).toMatchSnapshot();
  });
});
