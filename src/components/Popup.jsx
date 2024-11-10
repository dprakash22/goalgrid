import React from 'react';

const Popup = ({ display, isOpen, onClose, children }) => {
  console.log("Popup isOpen:", isOpen);
  
  if (!isOpen) return <></>;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg" style={{ display: display }}>
        {children}
        <button 
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
