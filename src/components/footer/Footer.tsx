import React from 'react';
import styles from "./Footer.module.css";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.infoText}>
                    <h1>E-Mail</h1>
                    <p>info@site.com</p>
                </div>
                <div className={styles.infoText}>
                    <h1>Address</h1>
                    <p>123/A Main Street, Delhi, India</p>
                </div>
                <div className={styles.infoText}>
                    <h1>Phone</h1>
                    <p>123-456-7890</p>
                </div>
            </div>
            <div className={styles.icons}>
                <TwitterIcon />
                <FacebookIcon />
                <InstagramIcon />
            </div>
            <p>Copyright © 2021 by Rajat</p>
        </div>
    )
}

export default Footer;
