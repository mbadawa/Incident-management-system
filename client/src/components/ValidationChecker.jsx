import React from "react";

export default function ValidationChecker(props) {
	if (
		props.title === "" ||
		props.description === "" ||
		props.location === "" ||
		props.mm === "" ||
		props.dd === "" ||
		props.yyyy === ""
	) {
		return (
			<div className="text-red-500">
				<p>Please fill out all fields</p>
			</div>
		);
	}
	return <div></div>;
}
