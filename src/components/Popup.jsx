import React from 'react';

const Popup = ({ display, isOpen, onClose, children }) => {
  console.log("Popup isOpen:", isOpen);
  
  if (!isOpen) return <></>;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-96 " style={{ display: display }}>

        
        <div className='flex flex-col justify-between h-full pb-4'>
          <div className="overflow-auto max-h-[300px] scrollbar-hidden">
            {children}
          </div>


          <div className='flex justify-center'>
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded mt-2"
            >
              Close
            </button>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Popup;
