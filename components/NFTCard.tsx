import { MediaRenderer, useActiveAccount } from "thirdweb/react";
import { NFT } from "thirdweb";

import React from "react";
import {client} from "./../src/client"

const account = useActiveAccount();

type NFTCardProps = {
    nft: NFT;
};

const NFTCard = ({ nft }: NFTCardProps) => {
    return (
        <div className="flex justify-center items-start flex-col mt-4 rounded-lg overflow-hidden border border-gray-800 transition-transform duration-200 ease-in-out hover:scale-105">
            <MediaRenderer
                src={nft.metadata.image}
                client={client}
                />
            <div style={{ padding:"0.5rem"}}>
                <h2>{nft.metadata.name}</h2>
                <p>Owned by:account</p>
            </div>
        </div>
    )
};

export default NFTCard;