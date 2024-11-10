import React, { useState ,useEffect} from 'react';
import Popup from './Popup';

function Todo({ title, description }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [todoDetails, setTodoDetails] = useState(null);

  const handleClick = () => {
    setTodoDetails({
      title,
      description,
    });
    setPopupOpen(true);
  };

  const handleClosePopup = (e) => {
    e.stopPropagation(); // Prevents event propagation
    setPopupOpen(false);
    setTodoDetails(null);
  };

  return (
    <div
      className='rounded-lg border-1 border-neutral-900 w-80 h-56 
                  flex flex-col gap-4 pt-3 pb-4 bg-[#82bd6d]'
      onClick={handleClick}
    >
      <div className='text-2xl font-semibold text-center'>{title}</div>
      <div className='text-wrap px-4 overflow-y-hidden'>
        <p>{description}</p>
      </div>

      {isPopupOpen && (
        <Popup 
          display="center" 
          isOpen={isPopupOpen} 
          onClose={handleClosePopup}
        >
          {todoDetails && (
            <div>
              <h2 className="text-2xl font-bold">{todoDetails.title}</h2>
              <p className="text-xl">{todoDetails.description}</p>
            </div>
          )}
        </Popup>
      )}
    </div>
  );
}

export default Todo;
