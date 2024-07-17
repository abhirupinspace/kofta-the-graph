import React from "react";

import Navbar from "../components/Navbar";
import { ConnectEmbed } from "thirdweb/react";
import { client } from "./client";
import { Link } from "react-router-dom";
const App = () => {
	return (
		<main >
			<Navbar />
			<div className='bg-cover h-screen bg-[url("./assets/bg3.png")] '>
				<div className="flex flex-col items-center min-h-screen p-20 spac">
					<div className="flex flex-col min-h-screen p-20">
						<h1 className="font-bold text-9xl text-left ">LEVEL UP YOUR SMART CONTRACTS</h1>
						<h1 className="text-2xl">Visit Playground to start writing contracts.</h1>
						<div className="flex py-5 gap-5">
							<Link to={"/playground"}>
							<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
								VISIT PLAYGROUND
							</button></Link>
							<a href="https://kofta.framer.ai/"><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
								LEARN MORE
							</button></a>
						</div>
					</div>

				</div>
			</div>
		</main>
	);
};

export default App;