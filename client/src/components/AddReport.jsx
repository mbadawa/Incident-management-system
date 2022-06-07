import React from "react";
import { useState } from "react";
import axios from "axios";
import ValidationChecker from "./ValidationChecker";
function AddReport() {
	// useState
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [date, setDate] = useState("");
	let isUrgent = false;
	let isFixed = false;

	const handleSubmit = async (e) => {
		e.preventDefault();

		// validation checker
		if (document.getElementById("urgent").checked) {
			isUrgent = true;
			console.log("URGENT VALUE Checked" + isUrgent);
		} else isUrgent = false;
		if (document.getElementById("fixed").checked) {
			isFixed = true;
			console.log("FIXED VALUE Checked" + isFixed);
		} else isFixed = false;
		console.log(isFixed, isUrgent);
		await axios({
			url: "http://localhost:9090/report/create",
			method: "POST",
			data: [
				{
					title: title,
					reportDescription: description,
					reportLocation: location,
					fixed: isFixed,
					urgent: isUrgent,
					reportDate: date,
				},
			],
		})
			.then((res) => {
				alert("Report Added");
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	return (
		<form className="bg-gray-200 text-gray-600 p-10  ml-auto mr-auto gap-10 flex flex-col w-full rounded">
			<input
				placeholder="Title"
				className="p-2 rounded"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Description"
				className="p-2 rounded h-1/2"
				onChange={(e) => setDescription(e.target.value)}
			></textarea>
			<input
				placeholder="Location"
				className="p-2 rounded"
				onChange={(e) => setLocation(e.target.value)}
			/>
			<input
				className="p-3 flex items-center rounded w-1/6 text-center"
				onChange={(e) => setDate(e.target.value)}
				type="date"
			></input>
			{/* Check Box */}
			<div className="flex items-center gap-3">
				<div class="slider">
					<input
						type="checkbox"
						name="slider"
						class="slider-checkbox"
						id="urgent"
					/>

					<label class="slider-label" for="urgent">
						<span class="urgent-inner"></span>
						<span class="slider-circle"></span>
					</label>
				</div>
				{/* Fixed slider */}
				<div class="slider">
					<input
						type="checkbox"
						name="slider"
						class="slider-checkbox"
						id="fixed"
					/>
					<label class="slider-label" for="fixed">
						<span class="fixed-inner"></span>
						<span class="slider-circle"></span>
					</label>
				</div>
			</div>
			<button
				id="submit"
				onClick={handleSubmit}
				type="submit"
				class="bg-green-600 text-white p-2 w-28 rounded border"
			>
				Save
			</button>
			{/* <ValidationChecker
				title={title}
				description={description}
				location={location}
				mm={mm}
				dd={dd}
				yyyy={yyyy}
			/> */}
		</form>
	);
}

export default AddReport;
