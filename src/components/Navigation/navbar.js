import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { BrowserView, MobileView } from "react-device-detect";
import { FiHome, FiSearch, FiStar, FiChevronLeft, FiUser } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import navbarStyle from './navbarStyle.css'


class Navigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <BrowserView>
                    <Navbar variant="dark">
                        <Navbar.Brand href="#home">Navbar on Browser</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                </BrowserView>
                <MobileView>
                    <Navbar expand="md" fixed="top" variant="dark">
                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                            <div style={{ paddingLeft: "5px", paddingTop: "10px" }}><FiChevronLeft /></div>
                        </IconContext.Provider>
                        <Link to="/account">
                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <div style={{ paddingRight: "5px", paddingTop: "10px" }}><FiUser /></div>
                            </IconContext.Provider>
                        </Link>
                    </Navbar>
                    <div style={{ paddingTop: "58px", paddingBottom: "66px" }}>
                        {this.props.children}
                    </div>
                    <Navbar expand="md" fixed="bottom" variant="dark">
                        <Link to="/">
                            <IconContext.Provider value={{ color: "white", size: "2.5em" }}>
                                <div style={{ paddingLeft: "30px", paddingTop: "10px" }}><FiHome /></div>
                            </IconContext.Provider>
                        </Link>
                        <Link to="/search">
                            <IconContext.Provider value={{ color: "white", size: "2.5em" }}>
                                <div style={{ paddingTop: "10px" }}><FiSearch /></div>
                            </IconContext.Provider>
                        </Link>
                        <Link to="/favorites">
                            <IconContext.Provider value={{ color: "white", size: "2.5em" }}>
                                <div style={{ paddingRight: "30px", paddingTop: "10px" }}><FiStar /></div>
                            </IconContext.Provider>
                        </Link>
                    </Navbar>
                </MobileView>
            </div>

        )
    }
}


export default Navigation;