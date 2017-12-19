const React = require("react");
const ReactDOM = require("react-dom");
//require('../../plugin/bootstrap/bootstrap.min.css');
require('../../sass/navi.scss');
//const PropTypes = require('prop-types');
const Navbar = require('react-bootstrap').Navbar;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const NavDropdown = require('react-bootstrap').NavDropdown;
const MenuItem = require('react-bootstrap').MenuItem;
class Navi extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect className="navi">
                <Navbar.Header>

                    <a href="#"><img src="../images/navi-logo.jpg" className="logo"/></a>

                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}

/*
Navi.defaultProps = {
    name: 'zhangyatao'
};

Navi.propTypes = {
    name: PropTypes.string
};
*/

module.exports = Navi;
