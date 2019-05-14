import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useNewLanguage } from "../../hooks/changeLang";
import { Link } from "react-router-dom";
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
  const { t } = useTranslation();
  const changeLanguage = useNewLanguage();

  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to={"/"}>
          Story
        </NavbarBrand>
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
