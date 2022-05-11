import React from "react";
import Nav from "../../components/Nav";
import { AiOutlineCheck } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { useState, useEffect } from "react";
import axios from "axios";
import Edit from "../../components/Edit";
function Incidents() {
  // get the data from the api
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/report/").then(res => {
      setIncidents(res.data);
    });
  }, []);

  return (
    <div className="relative">
      <Nav />
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg container ml-auto mr-auto mt-5">
        <table class="w-full text-sm text-left text-gray-500 dark:text-white">
          <thead class="text-xs text-gray-300 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-500">
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
          {incidents.map(data => (
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-300">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
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
                  {data.fixed !== true ? (
                    <VscError className="text-2xl text-red-400" />
                  ) : (
                    <AiOutlineCheck />
                  )}
                </td>
                <td class="px-6 py-4 text-right">
                  <Edit id={data.id} />
                </td>
                <td class="px-6 py-4 text-right w-28">
                  <a
                    href="#"
                    class="font-medium bg-red-500 p-2 rounded dark:text-white hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Incidents;
