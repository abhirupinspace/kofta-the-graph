
import Editor from '@monaco-editor/react';
import { useState } from 'react';


const Editorg = () => {
	const [code, setCode] = useState<string>(
	`pragma solidity ^0.8.0;
	
	contract HelloWorld {
		string public greet = "Hello, World!";
	}`
	);
	return (
	<div className='px-20'>
		<h1 className="text-2xl font-bold my-4 p-3">Solidity Editor and Compiler</h1>
		<div className='p-5'>
			<Editor
				height="600px"
				width="600px"
				defaultLanguage="sol"
				theme='vs-dark'
				defaultValue={code}
				/>
			<button>run</button>
		</div>
	</div>
	)
}

export default Editorg;
