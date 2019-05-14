import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { useToggle } from "../../hooks/toggle";

const Navigation = props => {
  const [isOpen, toggle] = useToggle();
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">STORY</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {t("lang")}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => changeLanguage("pl")}>
                  Polski
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage("en")}>
                  English
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage("ru")}>
                  Pусский
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
