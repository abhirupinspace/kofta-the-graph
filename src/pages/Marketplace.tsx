import React from 'react'
import Navbar from '../../components/Navbar'

const Marketplace = () => {
    return (
        <div>
            <Navbar />
            <iframe
                src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0x55520E1DEC97B4ea0DC884e2316B5FE640698Bbd&chain=%7B%22name%22%3A%22Scroll+Sepolia+Testnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F534351.rpc.thirdweb.com%2Fed68c8285fd58b18509efac47cfde727%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22scr-sepolia%22%2C%22chainId%22%3A534351%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22scroll-sepolia-testnet%22%7D&clientId=0abc6cdc59d5d865cd2ace9efaf07c9e&englishAuctionId=0&theme=system&primaryColor=pink&secondaryColor=purple"
                width="600px"
                height="600px"
                frameborder="0"
            ></iframe>
        </div>
    )
}

export default Marketplace
