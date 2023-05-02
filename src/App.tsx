import "./App.css";
import React, { useState } from "react";
import { BaseModal } from "./components/Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAlertModalOpen, setAlertModalOpen] = useState(false);
  const [messageAlertModal, setMessageAlertModal] = useState<string>();

  const onInputAlertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageAlertModal(e.target.value);
  };

  const renderContentModal1 = () => {
    return (
      <div className="px-[1rem] text-center">
        <p>Try give me something to alert?</p>
        <br />
        <form>
          <input
            type="text"
            name="alertInputBox"
            id="alertInputBox"
            className="p-2 rounded-[1rem] text-center text-[#2e2f2f]"
            onChange={onInputAlertChange}
          />
          <br />
          <br />
          <button
            type="button"
            onClick={() => {
              setAlertModalOpen(true);
            }}
            className="p-3 rounded-[1rem] bg-[#fe6e61] duration-300 hover:scale-75"
          >
            Set Alert
          </button>
        </form>
      </div>
    );
  };

  const renderContentModal2 = () => {
    return (
      <div className="px-[1rem] text-center w-full h-full my-[5rem]">
        <h1 className="font-bold text-xl">{messageAlertModal}</h1>
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="w-full h-screen flex flex-column justify-center text-center items-center">
          <div>
            <button
              onClick={() => {
                setModalOpen(true);
              }}
              className="p-4 bg-[#2e2f2f] text-[whitesmoke] rounded-[1rem]"
            >
              Open Modal
            </button>
          </div>
        </div>

        <BaseModal
          key={"modal_1"}
          isOpen={isModalOpen}
          title={"Modal 1"}
          onCloseModal={() => {
            setModalOpen(false);
          }}
          onClickPositiveButton={() => {
            // TODO: handle after clicked button here
          }}
        >
          {renderContentModal1()}
        </BaseModal>

        // TOD: create a new component file
        <BaseModal
          key={"modal_2"}
          isOpen={isAlertModalOpen}
          title="Modal 2"
          onCloseModal={() => {
            setAlertModalOpen(false);
          }}
          onClickPositiveButton={() => {
            // TODO: handle after clicked button here
          }}
        >
          {renderContentModal2()}
        </BaseModal>
      </div>
    </>
  );
}

export default App;
