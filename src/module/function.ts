function modalSwitch(funcStatus: boolean, setFunc: React.Dispatch<React.SetStateAction<boolean>>) {
  setFunc(!funcStatus)
}

function afterOpen() {
  // references are now sync'd and can be accessed.
  console.log("Modal is opened.");
}

export {
  modalSwitch,
  afterOpen
}