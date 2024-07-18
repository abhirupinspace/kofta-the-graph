import React from 'react'
import Navbar from '../../components/Navbar'

const Marketplace = () => {
    return (
        <main >
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg7.png")]'>
                <Navbar />
                <div className='flex flex-row justify-evenly'>
                    <div className='flex flex-col p-10 bg-black bg-opacity-50 border border-black rounded-lg'>
                    <h1 className="text-4xl text-center font-bold mb-4">Buy NFTs</h1>
                        <div className='flex flex-row gap-5'>
                            <iframe
                                src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0x55520E1DEC97B4ea0DC884e2316B5FE640698Bbd&chain=%7B%22name%22%3A%22Scroll+Sepolia+Testnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F534351.rpc.thirdweb.com%2Fed68c8285fd58b18509efac47cfde727%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22scr-sepolia%22%2C%22chainId%22%3A534351%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22scroll-sepolia-testnet%22%7D&clientId=0abc6cdc59d5d865cd2ace9efaf07c9e&directListingId=0&theme=dark&primaryColor=pink&secondaryColor=purple"
                                width="500px"
                                height="600px"
                            >
                            </iframe><iframe
                                src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0x55520E1DEC97B4ea0DC884e2316B5FE640698Bbd&chain=%7B%22name%22%3A%22Scroll+Sepolia+Testnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F534351.rpc.thirdweb.com%2Fed68c8285fd58b18509efac47cfde727%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22scr-sepolia%22%2C%22chainId%22%3A534351%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22scroll-sepolia-testnet%22%7D&clientId=0abc6cdc59d5d865cd2ace9efaf07c9e&directListingId=1&theme=dark&primaryColor=pink&secondaryColor=purple"
                                width="500px"
                                height="600px"
                            ></iframe>
                        </div>
                    </div>
                    <div className='flex flex-col p-8 bg-black bg-opacity-50 border border-black rounded-lg'>
                    <h1 className="text-4xl font-bold mb-4 text-center">Auctionable NFTs</h1>
                    <iframe
                        src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0x55520E1DEC97B4ea0DC884e2316B5FE640698Bbd&chain=%7B%22name%22%3A%22Scroll+Sepolia+Testnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F534351.rpc.thirdweb.com%2Fed68c8285fd58b18509efac47cfde727%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22scr-sepolia%22%2C%22chainId%22%3A534351%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22scroll-sepolia-testnet%22%7D&clientId=0abc6cdc59d5d865cd2ace9efaf07c9e&englishAuctionId=0&theme=dark&primaryColor=pink&secondaryColor=purple"
                        width="500px"
                        height="600px"
                    ></iframe></div>
                </div>


            </div>
        </main>
    )
}

export default Marketplace
