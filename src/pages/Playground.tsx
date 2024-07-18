import axios from 'axios';
import { useState } from 'react';
import Editorg from "../../components/Editorg";
import Navbar from "../../components/Navbar";
import XPDetailsPopup from "../../components/XPDetailsPopup";

const Playground = () => {
    const [contractCode, setContractCode] = useState('');
    const [templateName, setTemplateName] = useState('');
    const [xp, setXp] = useState(0);
    const [showXpPopup, setShowXpPopup] = useState(false);

    const templates = [
        { value: 'ERC20', label: 'ERC20 Token' },
        { value: 'ERC721', label: 'ERC721 NFT' },
        { value: 'DAO', label: 'DAO Contract' },
        { value: 'Staking', label: 'Staking Contract' },
        { value: 'Crowdfunding', label: 'Crowdfunding Contract' },
        { value: 'Voting', label: 'Voting Contract' },
        { value: 'Lending', label: 'Lending Contract' },
        { value: 'YieldFarming', label: 'Yield Farming Contract' },
        { value: 'Lottery', label: 'Lottery Contract' },
        { value: 'Subscription', label: 'Subscription Contract' },
        { value: 'Marketplace', label: 'Marketplace Contract' },
        { value: 'Oracle', label: 'Oracle Contract' }
    ];

    const generateContract = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/generateContract', { templateName });
            setContractCode(response.data.contract);
            setXp(xp + 100);
            setLoading(false);
        } catch (error) {
            console.error('Error generating contract:', error);
        }
    };

    const [loading, setLoading] = useState(false);

    return (
        <main>
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg7.png")] '>
                <Navbar />

                <div className="flex flex-row justify-around p-2">
                    <div>
                        <div className="xp-container">
                            <button className="xp-button" onClick={() => setShowXpPopup(true)}>XP: {xp}</button>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Smart Contract Playground</h1>
                            <select
                                value={templateName}
                                onChange={(e) => setTemplateName(e.target.value)}
                                className="text-black border p-2 mb-4 w-full"
                            >
                                <option value="" disabled>Select a contract template</option>
                                {templates.map((template) => (
                                    <option key={template.value} value={template.value}>{template.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-row gap-4">
                            <button onClick={generateContract} className="bg-pink-200 hover:bg-pink-400 text-black p-2 rounded mb-4" >Generate Contract</button>
                            <a href="https://soliditylang.org/" target="_blank"><button className="bg-pink-200 hover:bg-pink-400 text-black p-2 rounded mb-4" >Explain a Topic</button></a>
                            <a href="https://soliditylang.org/" target="_blank"><button className="bg-pink-200 hover:bg-pink-400 text-black p-2 rounded mb-4" >DOCS</button></a>
                        </div>
                        <h2 className="text-xl font-bold mb-2">AI Generated Contract:</h2>
                        {loading ? (
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <pre className="bg-black h-[510px] w-[900px] p-4 rounded-md overflow-y-auto">
                                {contractCode}
                            </pre>
                        )}
                    </div>
                        <Editorg />
                </div>
                {showXpPopup && (
                    <div className="wallet-popup-overlay">
                        <div className="wallet-popup-container">
                            <XPDetailsPopup
                                xp={xp}
                                onClose={() => setShowXpPopup(false)} />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Playground;

