import React from "react";

function EditForm(props) {
  return (
    <form className="bg-gray-300 p-10 hidden editForm fixed ml-auto mr-auto">
      <input id="title" placeholder="Title" className="p-2 rounded" />
      {props.id}
    </form>
  );
}

export default EditForm;
