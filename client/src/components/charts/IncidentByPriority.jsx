import React, { useEffect } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { useState } from "react";
function IncidentByPriority() {
	const [urgent, setUrgent] = useState(0);
	const [notUrgent, setNotUrgent] = useState(0);
	useEffect(() => {
		axios.get("http://localhost:9090/report/").then((res) => {
			let trueCount = 0;
			let falseCount = 0;
			for (let i = 0; i < res.data.length; i++) {
				if (res.data[i].urgent === true) {
					trueCount++;
				}
				if (res.data[i].urgent === false) {
					falseCount++;
				}
			}
			setUrgent(trueCount);
			setNotUrgent(falseCount);
		});
	});

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	const options = {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {},
		},
	};

	const labels = ["Urgent", "Not Urgent"];

	const data = {
		labels,
		datasets: [
			{
				data: [urgent, notUrgent],
				backgroundColor: ["rgb(234 179 8)", "rgb(34 197 94"],
			},
		],
	};
	return (
		<div
			style={{ width: "90%", height: "100%" }}
			className="bg-gray-200 m-5 p-10 rounded"
		>
			<h1 className="text-center font-bold text-lg">Incidents by Urgency</h1>
			<div
				style={{
					height: "100%",
					width: "100%",
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "auto",
					marginBottom: "auto",
				}}
			>
				<Bar options={options} data={data} />
			</div>
		</div>
	);
}

export default IncidentByPriority;
