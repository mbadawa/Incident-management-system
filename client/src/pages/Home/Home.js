import React from "react";
import AddReport from "../../components/AddReport";
import Nav from "../../components/Nav";

export default function Home() {
	return (
		<div className="flex">
			<Nav />
			<AddReport />
		</div>
	);
}
