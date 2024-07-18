import { useContract, useNFTs } from "@thirdweb-dev/react";
import { useRef, useState } from 'react';
import { MediaRenderer } from 'thirdweb/react';

import Navbar from '../../components/Navbar';
import { client } from '../client';
import styles from "../styles/Home.module.css";
import NFTCard from "../../components/NFTCard";


const Minter = () => {
    const { contract } = useContract("0xC03aEC0bfF6F778eD1bfe79e66e33B462C779466");
    const { data: nfts } = useNFTs(contract);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [nftName, setNftName] = useState<string>("");
    const [nftDescription, setNftDescription] = useState<string>("");
    const [mintingNFT, setMintingNFT] = useState<boolean>(false);
    const [contractCode, setContractCode] = useState('');
    const [contractAddress, setContractAddress] = useState('');
    const [ContractFile, setContractFile] = useState('');

    const processFile = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            processFile(files[0]);
        }
    };

    const handleFileSelect = () => {
        fileInputRef.current?.click();
    };

    const reset = () => {
        setImageUrl(null);
    };

    const handleMint = async () => {
        if (!fileInputRef.current || !fileInputRef.current.files || fileInputRef.current.files.length === 0) {
            console.error("No file selected");
            return;
        }

        setMintingNFT(true);
        try {
            const formData = new FormData();
            formData.append('name', nftName);
            formData.append('description', nftDescription);
            formData.append('image', fileInputRef.current.files[0]);
            const response = await fetch("/api/mintNFT", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }
            // Handle successful response
            console.log("NFT minted:", data);
        } catch (error) {
            console.error("Minting error:", error);
        } finally {
            alert("NFT minted!");
            setMintingNFT(false);
            setImageUrl(null);
            setNftName("");
            setNftDescription("");
        }
    };

    return (
        <main>
            <Navbar />
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg7.png")]'>
                <div className="flex gap-5">
                    <div className={styles.minterContainer}>
                        <div className={styles.mintContainerSection}>
                            <h1 className='text-center text-3xl font-semibold'>Upload Image for Contract NFT</h1>
                            <div
                                className={styles.fileContainer}
                                onClick={handleFileSelect}>
                                <input
                                    type="file"
                                    accept='image/*'
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleChange}
                                />
                                {!imageUrl ? (
                                    <div
                                        style={{
                                            border: '2px dashed grey',
                                            padding: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            height: '100%',
                                            width: '100%',
                                        }}
                                    >
                                        <p>Click to add file</p>
                                    </div>
                                ) : (
                                    <div style={{ height: "100%" }}>
                                        <MediaRenderer
                                            src={imageUrl}
                                            height='100%'
                                            width='100%'
                                            client={client}
                                        />
                                        <button
                                            onClick={reset}
                                            className={styles.resetButton}
                                        >Reset</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.mintContainerSection}>
                            <h1 className="text-3xl font-semibold"> Enter NFT Metadata</h1>
                            <p>NFT Name:</p>
                            <input
                                type="text"
                                placeholder="NFT Name"
                                onChange={(e) => setNftName(e.target.value)}
                                value={nftName}
                                className={styles.metadataInput}
                            />
                            <p>NFT Description:</p>
                            <input
                                type="text"
                                placeholder="This NFT is about..."
                                onChange={(e) => setNftDescription(e.target.value)}
                                value={nftDescription}
                                className={styles.metadataInput}
                            />
                            <p>Enter Contract Address:</p>
                            <input
                                type="text"
                                placeholder="Smart Contract Code"
                                value={contractCode}
                                onChange={(e) => setContractCode(e.target.value)}
                                className={styles.metadataInput}
                            />
                            <p>Enter Contract in Solidity:</p>
                            <input
                                type="text"
                                placeholder="Smart Contract Address"
                                value={contractAddress}
                                onChange={(e) => setContractAddress(e.target.value)}
                                className={styles.metadataInput}
                            />
                            <p>Upload a contract in (.sol) format:</p>
                            <input
                                type="file"
                                placeholder="Type or paste here"
                                value={ContractFile}
                                onChange={(e) => setContractFile(e.target.value)}
                                className={styles.metadataInput}
                            />
                            <button
                                className={styles.mintButton}
                                onClick={handleMint}
                                disabled={mintingNFT}
                            >{mintingNFT ? "Minting NFT..." : "Mint NFT"}</button>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <h1 className="text-4xl font-semibold">Your Collection</h1>
                        <div className={styles.grid} style={{ marginBottom: "1rem" }}>
                            {nfts && nfts.length > 0 ? (
                                nfts.map((nft) => (
                                    <NFTCard
                                        key={nft.metadata.id} nft={{
                                            tokenUri: "",
                                            name: "",
                                            price: undefined
                                        }}
                                    />
                                ))
                            ) : (
                                <p>No NFTs found</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Minter;
