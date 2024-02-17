
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx';

const Modal = ({ buttonCaption }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = () => {
    closeModal();
    // Additional logic on button click if needed
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      {createPortal(
        showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              {/* Your modal content goes here */}
              <Button onClick={handleButtonClick}>{buttonCaption}</Button>
            </div>
          </div>
        ),
        document.body
      )}
    </>
  );
};

export default Modal;

// import { forwardRef, useImperativeHandle, useRef } from 'react';
// import { createPortal } from 'react-dom';
// import Button from "./Button.jsx";

// const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open() {
//         dialog.current.showModal();
//       }
//     };
//   });

//   return createPortal(
//     <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
//       {children}
//       <form method="dialog" className="mt-4 text-right">
//         <Button>{buttonCaption}</Button>
//       </form>
//     </dialog>,
//     document.getElementById('modal-root')
//   );
// }

// export default Modal;
