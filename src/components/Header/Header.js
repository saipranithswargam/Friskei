import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Paw from "../../assets/images/Paw.svg";
const Header = () => {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    return (
        <Fragment>
            {["lg"].map((expand) => (
                <Navbar
                    key={expand}
                    bg="light"
                    expand={expand}
                    className={`${styles.nav}`}
                >
                    <Navbar.Brand as={Link} to="/" className={styles.navBrand}>
                        Friskei
                        <img
                            src={Paw}
                            alt="icon"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                        className={styles.navToggler}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        className={styles.navToggler}
                    >
                        <Offcanvas.Header closeButton className={styles.close}>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                                className={styles.offCanvesTitle}
                            >
                                Freskie
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav
                                className={`justify-content-end flex-grow-1 pe-3 ${styles.container}`}
                            >
                                <Nav.Link
                                    as={Link}
                                    to="/"
                                    className={`${styles.navLink} + ${
                                        url === "/" ? styles.active : ""
                                    }`}
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/services"
                                    className={`${styles.navLink} + ${
                                        url === "/services" ? styles.active : ""
                                    }`}
                                >
                                    Services
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/joinus"
                                    className={`${styles.navLink} + ${
                                        url === "/joinus" ? styles.active : ""
                                    }`}
                                >
                                    Join Us
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/petblog"
                                    className={`${styles.navLink} + ${
                                        url === "/petblog" ? styles.active : ""
                                    }`}
                                >
                                    Pet Blog
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/aboutus"
                                    className={`${styles.navLink} + ${
                                        url === "/aboutus" ? styles.active : ""
                                    }`}
                                >
                                    About Us
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/contact"
                                    className={`${styles.navLink} + ${
                                        url === "/contact" ? styles.active : ""
                                    }`}
                                >
                                    Contact
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    className={`${styles.navLink} + ${
                                        url === "/login" ? styles.active : ""
                                    }`}
                                >
                                    <AccountCircleIcon sx={{ fontSize: 28 }} />{" "}
                                    Login
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            ))}
        </Fragment>
    );
};

export default Header;
