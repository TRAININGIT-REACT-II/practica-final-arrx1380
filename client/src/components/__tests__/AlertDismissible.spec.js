import React from "react";
import { shallow } from "enzyme";
import AlertDismissible from "../AlertDismissible";
import Alert from "react-bootstrap/Alert";

describe(AlertDismissible, () => {
  describe("Render", () => {
    let wrapper;

    const variant = "danger";
    const title = "title";
    const icon = "";
    const children = "content";

    beforeEach(() => {
      wrapper = shallow(
        <AlertDismissible variant={variant} icon={icon} title={title}>
          {children}
        </AlertDismissible>
      );
    });

    it("Check elements", () => {
      expect(wrapper.find(Alert).length).toBe(1);
      expect(wrapper.find(Alert).prop("variant")).toBe(variant);
      expect(wrapper.find(Alert.Heading).length).toBe(1);
      expect(wrapper.find(Alert.Heading).text()).toBe(`${icon} ${title}`);
      expect(wrapper.find("p").length).toBe(1);
      expect(wrapper.find("p").text()).toBe(children);
    });
  });
});
