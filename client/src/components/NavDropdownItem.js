import { Check } from "react-bootstrap-icons";

const NavDropdownItem = ({ item, checked }) => {
  return (
    <>
      {checked ? <Check /> : <span className="p-2"></span>} {item}
    </>
  );
};

export default NavDropdownItem;
