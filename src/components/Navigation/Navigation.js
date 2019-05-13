import React from "react";
import { useTranslation } from "react-i18next";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import classes from "./Navigation.module.css";
import { useToggle } from "../../hooks/toggle";

const Navigation = props => {
  const [isOpen, toggle] = useToggle();
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={classes.Navigation}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">STORY</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
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
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
