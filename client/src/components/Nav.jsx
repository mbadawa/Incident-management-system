import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
function Nav() {
  return (
    <div className="flex items-center gap-5 container ml-auto mr-auto pt-5">
      <h1 className="text-3xl font-bold bg-blue-500 p-3 rounded text-white">
        IMS
      </h1>
      <nav className="flex items-center gap-3">
        <span className="flex items-center gap-1 border border-gray-600 p-2 rounded ">
          <AiOutlineSearch />{" "}
          <input
            type="text"
            placeholder="Search for any incidients border"
            className="flex-grow focus:outline-none"
          />
        </span>

        <ul className="flex items-center gap-3">
          <li>
            <Link to="/incident" className="bg-gray-600 p-2 rounded text-white">
              View All
            </Link>
          </li>
          {/* <li>
            <Link href="" className="bg-green-600 p-2 rounded text-white">
              Add Incident
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
