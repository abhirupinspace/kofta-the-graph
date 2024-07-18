import styles from "../src/styles/Home.module.css";
import { Link } from 'react-router-dom';
import { ConnectButton } from "thirdweb/react";
import { client } from '../src/client';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <h1 className="text-2xl">./KOFTA</h1>
            </div>
            <div className={styles.navbarLinks}>
                <Link to={"/"}>
                    <p>Home</p>
                </Link>
                <Link to={"/playground"}>
                    <p>Playground</p>
                </Link>
                <Link to={"/minter"}>
                    <p>Minter</p>
                </Link>
                <Link to={"/marketplace"}>
                    <p>Marketplace</p>
                </Link>
                <Link to={"/profile"}>
                    <p>Profile</p>
                </Link>
            </div>
            <ConnectButton
                client={client}
            />
        </div>
    )
};

export default Navbar
