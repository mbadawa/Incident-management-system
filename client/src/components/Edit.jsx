import axios from "axios";
import React from "react";
import { useEffect } from "react";
import EditForm from "./EditForm";
function Edit(props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [Location, setLocation] = React.useState("");
  const [date, setDate] = React.useState("");
  const [urgency, setUrgency] = React.useState("");
  const [complete, setComplete] = React.useState("");
  useEffect(() => {
    axios.get(`http://localhost:9090/report/${props.id}`).then(res => {
      console.log(res.data);
    });
  }, []);
  //   useEffect(() => {
  //     axios
  //       .put(`http://localhost:5000/api/incidents/${props.id}`, {
  //         title: props.title,
  //         description: props.description,
  //         location: props.location,
  //         status: props.status,
  //       })
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, []);

  function showEditForm() {
    // adds class to show edit form
    document.querySelector(".editForm").classList.add("flex");
    document.querySelector(".editForm").classList.remove("hidden");
  }

  return (
    <div>
      <button
        onClick={showEditForm}
        class="font-medium bg-green-500 p-2 rounded dark:text-white hover:underline"
      >
        Edit
      </button>
      <EditForm className="" id={props.id} />
    </div>
  );
}

export default Edit;
