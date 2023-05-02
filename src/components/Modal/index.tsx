import { ReactNode } from "react";
import Modal from "react-modal";

export type ModalProps = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  textPositiveButton?: string;
  textNegativeButton?: string;
  customStyle?: string;
  onCloseModal: () => void;
  onClickPositiveButton: () => void;
  onClickNegativeButton?: () => void;
};

export const BaseModal = ({
  children,
  title,
  isOpen,
  textPositiveButton,
  textNegativeButton,
  onCloseModal,
  onClickPositiveButton,
  onClickNegativeButton,
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        onCloseModal();
      }}
      style={{
        overlay: {
          backgroundColor: "rgb(0, 0, 0, 0.6)",
        },
        content: {
          color: "lightsteelblue",
        },
      }}
      className={
        "absolute translate-x-[-50%] translate-y-[-50%] right-[50%] left-[50%] top-[40%] w-[80%] h-auto bg-white text-[whitesmoke] rounded-[1rem] p-4 turnOn"
      }
    >
      <div className="flex flex-row">
        <div className="w-full">
          <h2 className="text-2xl w-full p-[1rem]">{title}</h2>
        </div>
        <div className="w-full text-right pl-4">
          <button
            onClick={() => {
              onCloseModal();
            }}
            className="bg-[#fe6e61] text-[whitesmoke] p-4 text-l rounded-[10px] duration-300 transition-all hover:scale-75"
          >
            X
          </button>
        </div>
      </div>
      <div className="min-h-[300px] flex justify-center items-center">
        {children}
      </div>
      <div className="flex justify-end my-4 mx-4 gap-4">
        <button
          className="py-2 px-4 bg-neutral-500 rounded min-w-[100px]"
          onClick={() => {
            onCloseModal();
            onClickNegativeButton && onClickNegativeButton();
          }}
        >
          {textNegativeButton || "Cancel"}
        </button>
        <button
          className="py-2 px-4 bg-slate-300 rounded min-w-[100px]"
          onClick={() => {
            onClickPositiveButton();
          }}
        >
          {textPositiveButton || "OK"}
        </button>
      </div>
    </Modal>
  );
};
