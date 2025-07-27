import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const PurchaseModal = ({ closeModal, isOpen }) => {
  // Total Price Calculation

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center leading-6 text-gray-900"
            >
              Review Apartment Info Before Agreement
            </DialogTitle>

            {/* Apartment Info */}
            <div className="mt-3">
              <p className="text-sm text-gray-500">
                <strong>Apartment No:</strong> 205
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                <strong>Floor:</strong> 2
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                <strong>Block:</strong> B
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                <strong>Rent:</strong> ৳12,000
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                <strong>Requested By:</strong> John Doe
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3 justify-center">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Confirm Agreement
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PurchaseModal;
