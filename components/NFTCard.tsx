// import { MediaRenderer, NFTCollectionInitializer, ThirdwebSDKProvider, shortenIfAddress } from "@thirdweb-dev/react";
// import { NFT } from "@thirdweb-dev/react";
// import styles from "../src/styles/Home.module.css";

import { MediaRenderer } from "@thirdweb-dev/react";

// type NFTCardProps = {
//     nft: NFT;
// };

// export const NFTCard = ({ nft }: NFTCardProps) => {
//     return (

//         <div className={styles.nftCardContainer}>
//             <MediaRenderer
//                 src={nft.metadata.image}
//             />
//             <div style={{ padding:"0.5rem"}}>
//                 <h1>{nft.metadata.name}</h1>
//                 <p>Owned by: {shortenIfAddress(nft.owner)}</p>
//             </div>
//         </div>
//     )
// };


export default function NFTCard({
    nft,
}: {
    nft: {
        tokenUri: string;
        name: string;
        price?: string;
    };
}) {
    return (
        <div
            className={`relative flex cursor-pointer
       flex-col overflow-hidden rounded-lg bg-white shadow-lg
       transition-all duration-300 hover:shadow-2xl dark:bg-[#333333]`}
        >
            <MediaRenderer
                src={nft.tokenUri}
                style={{
                    objectFit: "cover",
                }}
                className={
                    "h-[244px] rounded-lg transition duration-300 ease-in-out hover:scale-105"
                }
            />
            <div className={`flex flex-col gap-y-3 p-3`}>
                <div className={`text-sm font-semibold`}>{nft.name}</div>

                {nft.price && (
                    <div>
                        <div className={`text-xs font-semibold`}>Price</div>
                        <div className={`flex items-center gap-x-1`}>
                            <p className={`text-base font-semibold`}>{nft.price}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}