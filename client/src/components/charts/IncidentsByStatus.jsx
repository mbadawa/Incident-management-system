import React from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

export default function IncidentsByStatus() {
	const [fixed, setFixed] = useState(0);
	const [notFixed, setNotFixed] = useState(0);
	useEffect(() => {
		let data = [];
		axios.get("http://localhost:9090/report/").then((res) => {
			for (let i = 0; i < res.data.length; i++) {
				data.push({
					value: res.data[i].fixed,
				});
			}
			// loop through the data and count the number of true and false values
			let trueCount = 0;
			let falseCount = 0;
			for (let i = 0; i < data.length; i++) {
				if (data[i].value) {
					trueCount++;
					setFixed(trueCount);
				} else {
					falseCount++;
					setNotFixed(falseCount);
				}
			}
		});
	});

	ChartJS.register(ArcElement, Tooltip, Legend);

	const options = {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {},
		},
	};
	const data = {
		labels: ["Fixed", "Not Fixed"],
		datasets: [
			{
				label: "Fixed",
				data: [fixed, notFixed],
				backgroundColor: ["rgb(34 197 94)", "rgb(239 68 68)"],
				borderColor: ["rgba(36, 248, 107, 0.5)", "rgba(255, 0, 0, 0.4)"],
				borderWidth: 1,
			},
		],
	};
	return (
		<div
			style={{ height: "100%", width: "90%" }}
			className="bg-gray-200 m-5  p-10 border border-l-gray-300 rounded"
		>
			<h1 className="text-center font-bold text-lg">Incidents by status</h1>
			<div
				style={{
					height: "20%",
					width: "50%",
					marginTop: "auto",
					MarginBottom: "auto",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				{" "}
				<Doughnut options={options} data={data} />
			</div>
		</div>
	);
}
