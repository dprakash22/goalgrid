import React, { useState ,useEffect} from 'react';
import Popup from './Popup';
import Update from './Update';
import Delete from './Delete';

function Todo({ fetchfun ,id , title, description, completion}) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [todoDetails, setTodoDetails] = useState(null);
  const [editClick,seteditClick] = useState(false);
  const [delClick,setdelClick] = useState(false);
  const [delPopup,setdelPopup] = useState(false)


  const handleClick = (e) => {
    e.stopPropagation(); 
    setTodoDetails({
      title,
      description,
    });
    setPopupOpen(true);
  };

  const onDelete=(e)=>{
    e.stopPropagation();
    console.log("this is delete function")
    setdelClick(true)
    setdelPopup(true);
  }

  const onEdit=(e)=>{
    e.stopPropagation();
    console.log("this is edit function")
    seteditClick(true)
    
  }

  const handleClosePopup = (e) => {
    e.stopPropagation(); // Prevents event propagation
    setPopupOpen(false);
    setTodoDetails(null);
    setdelPopup(false);
  };

  return (
    <div
      className={`rounded-lg border-1 border-neutral-900 w-80 h-64
                  flex flex-col gap-4 pt-3 pb-4 
                  ${completion ? 'bg-orange-400' : 'bg-[#82bd6d]'}`}
                  
                  onClick={handleClick}
    >
     <div className='flex justify-end gap-6 pr-3'>
          <div onClick={onEdit} >
          <img width={"24px"} src="https://drive.google.com/thumbnail?id=1PsjgmFxB4cVz8zUCoE67fZk-hemEnnvl" alt="edit" />
          </div>

          <div onClick={onDelete}>
            <img width={"25px"} src="https://drive.google.com/thumbnail?id=11JHJuXN8SceVUgwpycDfLpn_CxSOlgqr" alt="del" />
          </div>
      </div>

      {editClick && (
        <Update
            id={id}
            title={title}
            description={description}
            completion={completion}
            updateClick={()=>{
            seteditClick(false)
            fetchfun()
          }}
        />
      )}

      {delClick && (
        <Delete
          display="center" 
          isOpen={delPopup} 
          onClose={handleClosePopup}

          DeleteClick={()=>{
            setdelClick(false)
            fetchfun()
          }}
          title={title}
          id={id}
        />
      )}

      
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
              <h2 className="text-2xl font-bold text-center">{todoDetails.title}</h2>
              <p className="text-xl">{todoDetails.description}</p>
            </div>
          )}
        </Popup>
      )}
    </div>
  );
}

export default Todo;
