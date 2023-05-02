import "./App.css";
import React from "react";
import Modal from "react-modal";
import { afterOpen, modalSwitch } from "./module/function";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alert, setAlert] = React.useState<string>();

  function turnModal() {
    modalSwitch(modalOpen, setModalOpen);
  }

  function turnAlert() {
    modalSwitch(alertOpen, setAlertOpen);
  }

  function sendAlert() {
    modalSwitch(true, setModalOpen);
    turnAlert();
  }

  const modalCard =
    "absolute translate-x-[-50%] translate-y-[-50%] right-[50%] left-[50%] top-[20%] w-[80%] h-[30%] bg-[#2e2f2f] text-[whitesmoke] rounded-[1rem] p-4 turnOn";

  return (
    <>
      <div>
        <div className="w-full h-screen flex flex-column justify-center text-center items-center">
          <div>
            <button
              onClick={turnModal}
              className="p-4 bg-[#2e2f2f] text-[whitesmoke] rounded-[1rem]"
            >
              Open Modal
            </button>
          </div>
        </div>
        <Modal
          isOpen={modalOpen}
          onAfterOpen={afterOpen}
          onRequestClose={turnModal}
          contentLabel="Alert Input!"
          className={modalCard}
        >
          {/* Card Heading */}
          <div className="flex flex-row">
            <div className="w-full">
              <h2 className="text-2xl w-full p-[1rem]">Alert Text!</h2>
            </div>
            <div className="w-full text-right pl-4">
              <button
                onClick={turnModal}
                className="bg-[#fe6e61] text-[whitesmoke] p-4 text-l rounded-[10px] duration-300 transition-all hover:scale-75"
              >
                X
              </button>
            </div>
          </div>

          <div className="px-[1rem] text-center">
            <p>Try give me something to alert?</p>
            <br />
            <form>
              <input type="text" name="alertInputBox" id="alertInputBox" className="p-2 rounded-[1rem] text-center text-[#2e2f2f]" />
              <br /><br />
              <button onClick={sendAlert} className="p-3 rounded-[1rem] bg-[#fe6e61] duration-300 hover:scale-75">
                Set Alert
              </button>
            </form>
          </div>
        </Modal>

        <Modal
          isOpen={alertOpen}
          onAfterOpen={afterOpen}
          onRequestClose={turnAlert}
          contentLabel="Alert!"
          className={modalCard}
        >
          {/* Modal Header */}
          <div className="flex flex-row">
            <div className="w-full">
              <h2 className="text-2xl w-full p-[1rem]">Alert Text!</h2>
            </div>
            <div className="w-full text-right pl-4">
              <button
                onClick={turnModal}
                className="bg-[#fe6e61] text-[whitesmoke] p-4 text-l rounded-[10px] duration-300 transition-all hover:scale-75"
              >
                X
              </button>
            </div>
          </div>

          <div className="px-[1rem] text-center">
            <h1 className="font-bold text-xl">
              {alert}
            </h1>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
