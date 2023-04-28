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

  const modalCard =
    "absolute translate-x-[-50%] translate-y-[-50%] right-[50%] left-[50%] top-[20%] w-[80%] h-[30%] bg-[#2e2f2f] text-[whitesmoke] rounded-[1rem] p-4 turnOn";

  return (
    <>
      <div>
        <div className="w-full h-screen flex flex-column justify-center text-center items-center">
          <div>
            <button onClick={openModal} className="p-4 bg-[#2e2f2f] text-[whitesmoke] rounded-[1rem]">Open Modal</button>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className={modalCard}
        >
          <div className="flex flex-row">
            <div className="w-full">
              <h2 className="text-2xl w-full p-[1rem]">Hello, Modal</h2>
            </div>
            <div className="w-full text-right pl-4">
              <button
                onClick={closeModal}
                className="bg-[#fe6e61] text-[whitesmoke] p-4 text-l rounded-[10px] duration-300 transition-all hover:text-sm"
              >
                X
              </button>
            </div>
          </div>
          <div className="pl-[1rem]">I am a modal</div>
        </Modal>
      </div>
    </>
  );
}

export default App;
