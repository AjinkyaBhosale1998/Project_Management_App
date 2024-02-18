import React,{ useRef } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancel }) => {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        

        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }
        
        
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            duedate: enteredDueDate,
        });
    }

  return (
    <>
  <Modal ref={modal} buttonCaption="Okay">
    <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
    <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
    <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
  </Modal>
  <div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4 ">
      <li>
        <button className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-400" onClick={onCancel}>Cancel</button>
      </li>
      <li>
        <button className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-400 " onClick={handleSave}>Save</button>
      </li>
    </menu>
    <div>
      <Input type="text" ref={title} label="Title" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4" />
      <Input ref={description} label="Description" textarea className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4" />
      <Input type="date" ref={dueDate} label="Due Date" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
    </div>
  </div>
</>

  );
};

export default NewProject;
