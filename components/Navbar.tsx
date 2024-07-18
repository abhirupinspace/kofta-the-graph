import styles from "../src/styles/Home.module.css";
import { Link } from 'react-router-dom';
import { ConnectButton } from "thirdweb/react";
import { client  } from '../src/client';
import { ChainId } from "@thirdweb-dev/react";
import { defineChain } from "thirdweb";

const Navbar = () => {
    const myChain = defineChain({
        id: 534351,
        rpc: "https://sepolia-rpc.scroll.io/",
    })
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <h1 className="text-2xl font-bold">./KOFTA</h1>
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
                chain={myChain}
            />
        </div>
    )
};

export default Navbar
