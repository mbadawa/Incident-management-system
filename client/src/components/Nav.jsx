import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="top-0 left-0 sticky flex flex-col justify-evenly items-center gap-5 p-12 h-screen bg-gray-800">
			<img
				src="https://www.w3schools.com/howto/img_avatar.png"
				className="rounded-full w-28"
			></img>
			<ul className="flex gap-5 font-extrabold uppercase justify-evenly h-full flex-col text-center text-gray-200">
				<li>
					<Link to="/" className="p-2 rounded ">
						Dashboard
					</Link>
				</li>
				<li>
					<Link to="/add" className="p-2 rounded ">
						Add Report
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
