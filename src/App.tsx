import "./App.css";
import React from "react";
import Modal from "react-modal";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalCard = 'absolute translate-x-[-50%] translate-y-[-50%] right-[50%] left-[50%] top-[20%] w-[80%] h-[30%] bg-[#2e2f2f] text-[whitesmoke] rounded-[1rem] p-4 turnOn'

  return (
    <>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className={modalCard}
        >
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    </>
  );
}

export default App;
