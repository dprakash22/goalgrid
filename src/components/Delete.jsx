import React from 'react';
import api from '../services/api';

const Delete = ({ display, isOpen, onClose, DeleteClick, title, id }) => {
  console.log("Popup isOpen:", isOpen);
  
  if (!isOpen) return <></>;

  const handledel = async(e)=>{
    e.stopPropagation();
    e.preventDefault();
    try{
        const res = await api.handleDelete(id);
        DeleteClick();
    }catch(err){
        console.error('Error deleting todo:', err);
        alert('Error deleting todo');
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50" 
        onClick={(e)=>e.stopPropagation()}
        >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-32" 
        style={{ display: display }}
        onClick={(e)=>e.stopPropagation()}
        >

        
        <div className='flex flex-col justify-between h-full pb-4'>
        <p className='text-center pb-4'>Are you sure want to Delete <strong> {title} </strong> </p>
          {/* <div className="overflow-auto max-h-[300px] scrollbar-hidden">
            
          </div> */}


          <div className='flex justify-center gap-5'>
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded mt-2"
            >
              cancel
            </button>

            <button 
              onClick={handledel}
              className="px-4 py-2 bg-red-500 text-white rounded mt-2"
            >
              Delete
            </button>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Delete;
