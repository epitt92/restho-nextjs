import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onComplete: () => void;
}

const LoadingModal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  onComplete,
}) => {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setPercentage((prevPercentage) =>
          prevPercentage < 100 ? prevPercentage + 1 : prevPercentage
        );
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  useEffect(() => {
    if (percentage === 100) {
      setTimeout(() => {
        closeModal(); // Close the modal after 4 seconds
        onComplete(); // Signal that the loading is complete
      }, 1000); // Adjust the delay as needed
    }
  }, [percentage, closeModal, onComplete]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in-out duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-70"
            leave="transition-opacity ease-in-out duration-1000"
            leaveFrom="opacity-70"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle"></span>
          <Transition.Child
            as={Fragment}
            enter="transition-transform ease-in-out duration-1000"
            enterFrom="translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="translate-y-0 sm:scale-100"
            leave="transition-transform ease-in-out duration-1000"
            leaveFrom="translate-y-0 sm:scale-100"
            leaveTo="translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transform bg-white shadow-xl rounded-lg">
              <div className="text-center">
                <p className="text-lg font-semibold">Loading...</p>
                <div className="my-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-indigo-200 text-indigo-600">
                          App Loading
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-indigo-600">
                          {percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="relative flex mb-2 items-center justify-between">
                      <div className="flex-grow">
                        <div className="w-full bg-gray-200 rounded-full">
                          <div
                            className="bg-indigo-500 text-xs leading-none py-1 text-center text-white rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoadingModal;
