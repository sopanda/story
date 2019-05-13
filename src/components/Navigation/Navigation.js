import React, { useState } from "react";
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
  DropdownItem,
} from 'reactstrap';
import classes from './Navigation.module.css';
import { useToggle } from '../../hooks/toggle';

const Navigation = props => {

  const [isOpen, toggle] = useToggle();

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
                  Język
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Polski
                  </DropdownItem>
                  <DropdownItem>
                    English
                  </DropdownItem>
                  <DropdownItem>
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
