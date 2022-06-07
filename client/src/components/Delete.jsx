import axios from "axios";
import React from "react";

function Delete(props) {
	function handleDelete() {
		console.log("Delete");
		// handle delete
		axios.delete(`http://localhost:9090/report/${props.id}`).then((res) => {
			console.log(res);
			alert("Report Deleted");
		});
	}
	return (
		<button
			onClick={handleDelete}
			href="#"
			class="font-medium bg-red-500 p-2 rounded dark:text-white hover:underline"
		>
			Delete
		</button>
	);
}

export default Delete;
