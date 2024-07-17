import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Editorg from "../../components/Editorg";
import axios from 'axios';

const Playground = () => {
    const [contractCode, setContractCode] = useState('');
    const [templateName, setTemplateName] = useState('');

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
        try {
            const response = await axios.post('http://localhost:3001/generateContract', { templateName });
            setContractCode(response.data.contract);
        } catch (error) {
            console.error('Error generating contract:', error);
        }
    };

    return (
        <main>
            <div className='bg-cover h-screen bg-fixed bg-[url("./assets/bg4.png")] '>
            <Navbar />
                
                    <div className="flex flex-row justify-around p-4">
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
                            <button onClick={generateContract} className="bg-pink-200 hover:bg-pink-400 text-black p-2 rounded mb-4" >Generate Contract</button>
                            <h2 className="text-xl font-bold mb-2">Generated Contract:</h2>
                            <pre className="border-pink-300 p-4 mb-4 bg-black overflow-x-auto">
                                {contractCode}
                            </pre>
                        </div>
                        <Editorg />
                    </div>
            </div>
        </main>
    );
};

export default Playground;

