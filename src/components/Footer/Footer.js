import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.above}>
                <div className={styles.left}>
                    <p style={{ fontWeight: "100" }}>Address</p>
                    <p>Vancouver, BC , Canada</p>
                    <p>Oslo, Norway</p>
                </div>
                <div className={styles.right}>
                    <p style={{ fontWeight: "100" }}>Contact</p>
                    <p>
                        <a
                            style={{ textDecoration: "none", color: "#fff" }}
                            href="mailto:info@friskee.com"
                        >
                            info@friskee.com
                        </a>
                    </p>
                    <p>123-456-7890</p>
                </div>
            </div>
            <hr style={{ width: "90vw", margin: "0 auto", color: "#FFF" }}></hr>
            <div className={styles.below}>
                <p>© 2023 Friskei</p>
            </div>
        </div>
    );
};

export default Footer;
