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
  DropdownItem,
  NavItem,
} from "reactstrap";
import styles from './Navigation.module.css';
import { useToggle } from "../../hooks/toggle";

const Navigation = props => {
  const [isOpen, toggle] = useToggle();
  const { t } = useTranslation();
  const changeLanguage = useNewLanguage();

  return (
    <Fragment>
      <Navbar className={styles.NavBar} expand="md">
        <NavbarBrand tag={Link} to={"/"}>
          <span className={styles.BrandLogo}>S T O R Y</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className={styles.NavigationItem}>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {t("lang")}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className={styles.NavigationDropDownItem} onClick={() => changeLanguage("pl")}>
                    Polski
                </DropdownItem>
                  <DropdownItem className={styles.NavigationDropDownItem} onClick={() => changeLanguage("en")}>
                    English
                </DropdownItem>
                  <DropdownItem className={styles.NavigationDropDownItem} onClick={() => changeLanguage("ru")}>
                    Pусский
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
