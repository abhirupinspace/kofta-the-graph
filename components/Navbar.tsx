// import { ConnectButton } from 'thirdweb/react';
// import { client } from '../src/client';
// import { Link } from 'react-router-dom';

// const Navbar: React.FC = () => {
//     return (
//         <div className="navbar p-4 flex justify-between items-center bg-gray-800">
//             <div className="text-2xl font-bold text-white">Kofta</div>
//             <div className='flex flex-row justify-evenly gap-4'>
//                 <Link to="/" className="block text-white hover:underline p-2">Home</Link>
//                 <Link to="/playground" className="block text-white hover:underline p-2">Playground</Link>
//                 <Link to="/minter" className="block text-white hover:underline p-2">Mint Contract</Link>
//                 <Link to="/marketplace" className="block text-white hover:underline p-2">Marketplace</Link>
//             </div>
//             <ConnectButton
//                 client={client}
//                 theme={"dark"}
//             />
//         </div>
//     );
// };

// export default Navbar;


import styles from "../src/styles/Home.module.css";
import { Link } from 'react-router-dom';
import { ConnectButton } from "thirdweb/react";
import { client } from '../src/client';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <h1 className="text-4xl">./KOFTA</h1>
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
            </div>
            <ConnectButton
                client={client}
            />
        </div>
    )
};

export default Navbar
