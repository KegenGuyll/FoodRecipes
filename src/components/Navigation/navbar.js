import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import {
  FiHome,
  FiSearch,
  FiStar,
  FiChevronLeft,
  FiUser
} from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./navbarStyle.css";
import fire from "../../config/Fire";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.goback = this.goback.bind(this);
    this.logout = this.logout.bind(this);
  }

  goback() {
    this.props.history.goBack();
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <BrowserView>
          <Navbar variant="dark">
            <Navbar.Brand as={Link} to={"/"}>
              FoodRecipes
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/search">
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites">
                Favorites
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/account">
                Account
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={this.logout}>Logout</Nav.Link>
            </Nav>
          </Navbar>
          {this.props.children}
        </BrowserView>
        <MobileView>
          <Navbar expand="md" fixed="top" variant="dark">
            <IconContext.Provider value={{ color: "white", size: "1.7em" }}>
              <div onClick={this.goback} style={{ paddingLeft: "5px" }}>
                <FiChevronLeft />
              </div>
            </IconContext.Provider>
            <Link to="/account">
              <IconContext.Provider value={{ color: "white", size: "1.7em" }}>
                {this.props.location.pathname.includes("/account") ? (
                  <div style={{ paddingBottom: "5px", paddingTop: "5px" }}>
                    <div className="bottomBorderDashboard">
                      <FiUser />
                    </div>
                  </div>
                ) : (
                  <div style={{ paddingBottom: "5px", paddingTop: "5px" }}>
                    <FiUser />
                  </div>
                )}
              </IconContext.Provider>
            </Link>
          </Navbar>
          <div style={{ paddingTop: "58px", paddingBottom: "66px" }}>
            {this.props.children}
          </div>
          <Navbar expand="md" fixed="bottom" variant="dark">
            <Link to="/">
              <IconContext.Provider value={{ color: "white", size: "1.7em" }}>
                {this.props.location.pathname === "/" ? (
                  <div style={{ paddingLeft: "30px", paddingTop: "10px" }}>
                    <div className="bottomBorderDashboard">
                      <FiHome />
                    </div>
                  </div>
                ) : (
                  <div style={{ paddingLeft: "30px", paddingTop: "10px" }}>
                    <FiHome />
                  </div>
                )}
              </IconContext.Provider>
            </Link>
            <Link to="/search">
              <IconContext.Provider value={{ color: "white", size: "1.7em" }}>
                {this.props.location.pathname.includes("/search") ? (
                  <div style={{ paddingTop: "10px" }}>
                    <div className="bottomBorderDashboard">
                      <FiSearch />
                    </div>
                  </div>
                ) : (
                  <div style={{ paddingTop: "10px" }}>
                    <FiSearch />
                  </div>
                )}
              </IconContext.Provider>
            </Link>
            <Link to="/favorites">
              <IconContext.Provider value={{ color: "white", size: "1.7em" }}>
                {this.props.location.pathname.includes("/favorites") ? (
                  <div style={{ paddingRight: "30px", paddingTop: "10px" }}>
                    <div className="bottomBorderDashboard">
                      <FiStar />
                    </div>
                  </div>
                ) : (
                  <div style={{ paddingRight: "30px", paddingTop: "10px" }}>
                    <FiStar />
                  </div>
                )}
              </IconContext.Provider>
            </Link>
          </Navbar>
        </MobileView>
      </div>
    );
  }
}

export default withRouter(Navigation);
