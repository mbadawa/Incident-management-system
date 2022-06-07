import React from "react";
import IncidentByPriority from "../../components/charts/IncidentByPriority";
import IncidentsByStatus from "../../components/charts/IncidentsByStatus";
import Nav from "../../components/Nav";
import AllReports from "../../components/AllReports";

function Dashboard() {
	return (
		<div className="flex bg-gray-100 h-full ">
			<Nav />
			<div className="relative w-full">
				<div className="container grid grid-cols-2 ">
					<IncidentsByStatus />
					<IncidentByPriority />
				</div>
				{/* Data grid */}
				<AllReports />
			</div>
		</div>
	);
}

export default Dashboard;
