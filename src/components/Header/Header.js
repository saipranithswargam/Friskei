import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Logo from "./logo.svg";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
const Header = () => {
    const authCtx = useContext(AuthContext);
    const location = useLocation();
    const [url, setUrl] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const logoutHandler = () => {
        authCtx.logout();
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
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
                        <img src={Logo} alt="icon" style={{scale:"1.4"}} />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                lineHeight: "1",
                                justifyContent: "center",
                            }}
                        >
                            <p style={{ margin: "0", fontSize: "2.4rem" }}>
                                PETLEVERT
                            </p>
                            <span
                                style={{ fontSize: "0.9rem", color: "black" }}
                            >
                                Connecting Pets And People
                            </span>
                        </div>
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
                                {/* <Nav.Link
                                    as={Link}
                                    to="/petblog"
                                    className={`${styles.navLink} + ${
                                        url === "/petblog" ? styles.active : ""
                                    }`}
                                >
                                    Pet Blog
                                </Nav.Link> */}
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
                                {authCtx.isLoggedIn && (
                                    <div>
                                        <Button
                                            aria-describedby={id}
                                            variant="contained"
                                            onClick={handleClick}
                                            className={styles.userIcon}
                                        >
                                            User
                                        </Button>
                                        <Popover
                                            id={id}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: "bottom",
                                                horizontal: "left",
                                            }}
                                        >
                                            <Typography
                                                className={styles.test}
                                                sx={{ padding: "1rem 6rem" }}
                                            >
                                                <Nav.Link
                                                    as={Link}
                                                    to="/userdashboard"
                                                    className={
                                                        styles.dropdownLink
                                                    }
                                                >
                                                    Profile
                                                </Nav.Link>
                                            </Typography>
                                            <Typography
                                                className={styles.test}
                                                sx={{ padding: "1rem 6rem" }}
                                            >
                                                <button
                                                    className={
                                                        styles.logoutButton
                                                    }
                                                    onClick={logoutHandler}
                                                >
                                                    Logout
                                                </button>
                                            </Typography>
                                        </Popover>
                                    </div>
                                )}
                                {!authCtx.isLoggedIn && (
                                    <div>
                                        <Button
                                            aria-describedby={id}
                                            variant="contained"
                                            onClick={handleClick}
                                            className={styles.userIcon}
                                        >
                                            <AccountCircleIcon
                                                sx={{ fontSize: 28 }}
                                            />{" "}
                                            Login
                                        </Button>
                                        <Popover
                                            id={id}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: "bottom",
                                                horizontal: "left",
                                            }}
                                        >
                                            <Typography
                                                sx={{ padding: "1rem 6rem" }}
                                                className={styles.test}
                                            >
                                                <Nav.Link as={Link} to="/login">
                                                    User Login
                                                </Nav.Link>
                                            </Typography>
                                            <Typography
                                                sx={{ padding: "1rem 6rem" }}
                                                className={styles.test}
                                            >
                                                <Nav.Link
                                                    as={Link}
                                                    to="/providerlogin"
                                                >
                                                    Provider Login
                                                </Nav.Link>
                                            </Typography>
                                        </Popover>
                                    </div>
                                )}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            ))}
        </Fragment>
    );
};

export default Header;
