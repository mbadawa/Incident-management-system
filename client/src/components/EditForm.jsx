import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";
function EditForm(props) {
	const [isUrgentChecked, setIsUrgentChecked] = useState();
	const [isFixedChecked, setIsFixedChecked] = useState();
	function hideEditForm() {
		// adds class to show edit form
		document.querySelector(".editForm").classList.remove("flex");
		document.querySelector(".editForm").classList.add("hidden");
	}
	useEffect(() => {
		if (props.urgent === true) {
			setIsUrgentChecked(true);
		} else setIsUrgentChecked(false);
	}, [props.urgent]);

	useEffect(() => {
		if (props.fixed === true) {
			setIsFixedChecked(true);
		} else setIsFixedChecked(false);
	}, [props.fixed]);

	useEffect(() => {
		document.getElementById("urgent").addEventListener("change", (e) => {
			setIsUrgentChecked(e.target.checked);
			console.log(e.target.checked);
		});
	}, [isUrgentChecked]);

	useEffect(() => {
		document.getElementById("fixed").addEventListener("change", (e) => {
			setIsFixedChecked(e.target.checked);
			console.log(e.target.checked);
		});
	}, [isFixedChecked]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(
			props.title,
			props.description,
			props.reportLocation,
			isUrgentChecked,
			isFixedChecked
		);
		axios
			.put(`http://localhost:9090/report/${props.id}`, {
				title: props.title,
				reportDescription: props.description,
				reportLocation: props.reportLocation,
				urgent: isUrgentChecked,
				reportDate: props.reportDate,
				fixed: isFixedChecked,
			})
			.then((res) => {
				console.log(res);
			});
		hideEditForm();
	};

	return (
		<div className="">
			{" "}
			<form className="hidden  bg-gray-300 shadow-xl text-gray-600 p-10 absolute editForm gap-3 flex-col top-1/4 left-1/2 transform -translate-x-1/2 container w-1/3 rounded-bl rounded-br">
				<IoCloseOutline
					onClick={hideEditForm}
					className="absolute top-2 right-2 text-2xl cursor-pointer"
				/>

				<input
					placeholder="Title"
					className="p-2 rounded"
					type="text"
					onChange={(e) => props.setTitle(e.target.value)}
					value={props.title}
				/>
				<textarea
					placeholder="Description"
					className="p-2 rounded"
					value={props.description}
					onChange={(e) => props.setDescription(e.target.value)}
				>
					Descripe the situation
				</textarea>
				<input
					placeholder="Location"
					className="p-2 rounded"
					value={props.reportLocation}
					type="text"
					onChange={(e) => props.setReportLocation(e.target.value)}
				/>
				{/* Check Box */}
				<div className="flex items-center gap-3">
					<div class="slider">
						<input
							onChange={(e) => setIsUrgentChecked(e.target.checked)}
							checked={isUrgentChecked}
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
							onChange={(e) => setIsFixedChecked(e.target.checked)}
							checked={isFixedChecked}
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
					onClick={handleSubmit}
					class="bg-gray-600 text-white p-2 w-28 rounded"
				>
					Update
				</button>
				<p>Report ID: {props.id}</p>
			</form>
		</div>
	);
}

export default EditForm;
