import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { useState, useEffect } from "react";
import axios from "axios";
import EditForm from "./EditForm";
import Delete from "./Delete";
function Incidents() {
	const [id, setID] = useState();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [reportLocation, setReportLocation] = useState("");
	const [reportDate, setReportDate] = useState("");
	const [isUrgent, setIsUrgent] = useState(false);
	const [isFixed, setIsFixed] = useState(false);

	// get the data from the api
	const [incidents, setIncidents] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:9090/report/")
			.then((res) => {
				setIncidents(res.data);
				// formats the date from YYYY-MM-DD to DD/MM/YYYY
				res.data.map((incident) => {
					incident.reportDate = new Date(
						incident.reportDate
					).toLocaleDateString();
					return incident;
				});
			})
			.catch((err) => {
				document.getElementById("noReports").innerHTML =
					err.response.data.message;
				document.getElementById("noReports").classList.add("text-gray-50");
				document.getElementById("noReports").classList.add("flex");
				document.getElementById("noReports").classList.add("flex-col");
				document.getElementById("noReports").classList.add("bg-gray-600");
				document.getElementById("noReports").classList.add("p-5");
				document.getElementById("noReports").classList.add("text-center");
				document.getElementById("noReports").classList.add("gap-3");
				// creates a button inside the div
				document.getElementById("noReports").innerHTML +=
					"<a class='bg-green-600 hover:bg-green-700 ml-auto mr-auto text-white font-bold py-2 px-4 rounded' href='http://localhost:3000/add'>Add Reports</a>";
			});
	});

	function showEditForm(id) {
		// adds class to show edit form
		document.querySelector(".editForm").classList.add("flex");
		document.querySelector(".editForm").classList.remove("hidden");
		// makes the background blury
		console.log(id);
		axios.get(`http://localhost:9090/report/${id}`).then((res) => {
			console.log(res.data);
			setTitle(res.data.title);
			setDescription(res.data.reportDescription);
			setReportLocation(res.data.reportLocation);
			setReportDate(res.data.reportDate);
			setID(res.data.id);
			setIsUrgent(res.data.urgent);
			setIsFixed(res.data.fixed);
		});
		console.log(title, description, reportLocation, reportDate);
	}
	return (
		<div className=" gap-5 flex incidents ml-5 mr-5 mt-5">
			<div class="relative overflow-x-auto shadow-md sm:rounded-lg container ml-auto mr-auto mt-5 ">
				<table class="w-full text-sm text-left text-white">
					<thead class="text-xs  uppercase  bg-gray-600 ">
						<tr>
							<th scope="col" class="px-6 py-3">
								id
							</th>
							<th scope="col" class="px-6 py-3">
								Title
							</th>
							<th scope="col" class="px-6 py-3">
								Description
							</th>
							<th scope="col" class="px-6 py-3">
								Location
							</th>
							<th scope="col" class="px-6 py-3">
								Report Date
							</th>
							<th scope="col" class="px-6 py-3">
								Urgency
							</th>
							<th scope="col" class="px-6 py-3">
								Complete
							</th>
							<th scope="col" class="px-6 py-3">
								<span class="sr-only">Edit</span>
							</th>
							<th scope="col" class="px-6 py-3">
								<span class="sr-only">Delete</span>
							</th>
						</tr>
					</thead>

					{incidents.map((data) => (
						<tbody>
							<tr class="border-b bg-gray-700  border-gray-600 text-white">
								<th
									scope="row"
									class="px-6 py-4 font-medium dark:text-white whitespace-nowrap"
								>
									{data.id}
								</th>

								<td class="px-6 py-4">{data.title}</td>
								<td class="px-6 py-4">{data.reportDescription}</td>
								<td class="px-6 py-4">{data.reportLocation}</td>
								<td class="px-6 py-4">{data.reportDate}</td>
								<td class="px-6 py-4 text-2xl">
									{data.urgent !== true ? <VscError /> : <AiOutlineCheck />}
								</td>
								<td class="px-6 py-4 text-2xl">
									{data.fixed !== true ? <VscError /> : <AiOutlineCheck />}
								</td>
								<td class="px-6 py-4 text-right">
									<button
										onClick={(e) => showEditForm(data.id)}
										className="font-medium bg-green-600 p-2 rounded dark:text-white hover:underline"
									>
										Edit
									</button>{" "}
								</td>
								<td class="px-6 py-4 text-right w-28">
									<Delete id={data.id} />
								</td>
							</tr>
						</tbody>
					))}
				</table>
				<p id="noReports"></p>
			</div>

			<EditForm
				title={title}
				description={description}
				reportLocation={reportLocation}
				reportDate={reportDate}
				urgent={isUrgent}
				fixed={isFixed}
				setTitle={setTitle}
				setDescription={setDescription}
				setReportLocation={setReportLocation}
				id={id}
			/>
		</div>
	);
}

export default Incidents;
