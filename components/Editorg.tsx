import Editor from '@monaco-editor/react';
import { useState } from 'react';

const Editorg = () => {
    const [code, setCode] = useState<string>(
        `pragma solidity ^0.8.0;
        
        contract HelloWorld {
            string public greet = "Hello, World!";
        }`
    );

    const downloadCode = () => {
        const blob = new Blob([code], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'contract.sol';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='px-20'>
            <h1 className="text-2xl font-bold my-4 p-3">Solidity Editor and Compiler</h1>
            <div className='p-5'>
                <Editor
                    height="630px"
                    width="650px"
                    defaultLanguage="sol"
                    theme='vs-dark'
                    defaultValue={code}
                    onChange={(value) => setCode(value || '')}
                />
                
                <div className="flex py-2 gap-5">
                    <button className="bg-pink-200 hover:bg-pink-400 text-black p-2 rounded mb-4 shadow">
                        Compile
                    </button>
                    <button className="bg-pink-200 hover:bg-pink-400 text-black p-2 rounded mb-4 shadow">
                        Deploy
                    </button>
                    <button
                        className="bg-pink-200 hover:bg-pink-400 text-black p-2 rounded mb-4 shadow"
                        onClick={downloadCode}
                    >
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Editorg;
