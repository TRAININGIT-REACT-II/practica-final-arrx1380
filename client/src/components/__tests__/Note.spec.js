import React from "react";
import { shallow } from "enzyme";
import Note from "../Note";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

describe(Note, () => {
  describe("Render", () => {
    let wrapper;

    const note = {
      title: "title",
      createdAt: "2023-01-01 01:01:01",
      updatedAt: "2023-01-02 02:02:02",
    };
    const onDelete = () => {};
    const viewButtonText = "Ver";
    const updateButtonText = "Editar";
    const deleteButtonText = "Borrar";

    beforeEach(() => {
      wrapper = shallow(<Note note={note} onDelete={onDelete} />);
    });

    it("Check Card main elements", () => {
      expect(wrapper.find(Card).length).toBe(1);
      expect(wrapper.find(Card).find(Card.Body).length).toBe(1);
      expect(wrapper.find(Card).find(Card.Body).find(Card.Title).length).toBe(
        1
      );
      expect(wrapper.find(Card).find(Card.Body).find(Card.Text).length).toBe(1);
      expect(wrapper.find(Card).find(Card.Footer).length).toBe(1);
      expect(wrapper.find(Card).find(Card.Footer).find(Button).length).toBe(3);
    });

    it("Check Card title", () => {
      expect(wrapper.find(Card).find(Card.Body).find(Card.Title).text()).toBe(
        note.title
      );
    });

    it("Check Card createdAt", () => {
      expect(
        wrapper
          .find(Card)
          .find(Card.Body)
          .find(Card.Text)
          .find("small")
          .find("span")
          .at(0)
          .text()
      ).toBe(note.createdAt);
    });

    it("Check Card updatedAt", () => {
      expect(
        wrapper
          .find(Card)
          .find(Card.Body)
          .find(Card.Text)
          .find("small")
          .find("span")
          .at(1)
          .text()
      ).toBe(note.updatedAt);
    });

    it("Check Card view button", () => {
      expect(
        wrapper
          .find(Card)
          .find(Card.Footer)
          .find("div")
          .find(Button)
          .at(0)
          .text()
      ).toBe(viewButtonText);
    });

    it("Check Card update button", () => {
      expect(
        wrapper
          .find(Card)
          .find(Card.Footer)
          .find("div")
          .find(Button)
          .at(1)
          .text()
      ).toBe(updateButtonText);
    });

    it("Check Card delete button", () => {
      expect(
        wrapper
          .find(Card)
          .find(Card.Footer)
          .find("div")
          .find(Button)
          .at(2)
          .text()
      ).toBe(deleteButtonText);
    });
  });
});
