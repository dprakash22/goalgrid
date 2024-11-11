import React, { useEffect, useState } from 'react';
import Todo from '../components/Todo';
import Createtodo from '../components/Createtodo';
import api from '../services/api'; // Import the API service
import Cookies from 'js-cookie';

function Todoapp() {
  const [isCreate, setIsCreate] = useState(false);
  const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
    try {
      const fetchedTodos = await api.fetchTodos();  // Fetch data from API
      console.log("Fetched todos:", fetchedTodos);  // Log the data to verify it
      setTodos(Array.isArray(fetchedTodos) ? fetchedTodos : []);  // Update the todos state
    } catch (error) {
      console.error('Error fetching data:', error);  // Handle error
      alert(error.message || 'Failed to fetch todos');
      setTodos([]);  // Reset todos in case of an error
    }
  };

  // Fetch todos on component mount or when `isCreate` state changes
  useEffect(() => {
    fetchTodos();  // Call fetchTodos function
  }, [isCreate]); 

  const handleCreate = () => {
    setIsCreate(true);
  };

  const handleClosePopup = (e) => {
    // e.preventDefault();
    // e.stopPropagation(); // Prevents event propagation
    setIsCreate(false);
  };

  return (
    <div className="w-full h-screen bg-orange-200 p-14">
      <div className="w-full flex flex-row-reverse">
        <button className="px-4 py-2 bg-orange-500 text-white rounded mt-4" onClick={handleCreate}>
          Create
        </button>
      </div>

      {isCreate && (
        <Createtodo
          onClose={handleClosePopup}
        />
      )}

      <p className="text-3xl font-bold pb-4 text-[#cf5b34]">Todo List</p>
      <div className="flex justify-start gap-14 flex-wrap">
        {todos.map((todo) => (
          <Todo
            // key={todo.id}
            id={todo.ID}
            fetchfun={fetchTodos}
            title={todo.Title}
            description={todo.Description}
            completion={todo.Completed}
          />
        ))}
      </div>

      {/* <div className="mt-20"></div>

      <p className="text-3xl font-bold pb-4 text-[#cf5b34]">Upcoming Work</p>
      <div className="flex justify-start gap-14 flex-wrap">
        {todos.map((todo) => (
          <Todo
            // key={todo.id}
            // id={todo.id}
            title={todo.Title}
            description={todo.Description}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Todoapp;



// import React, { useEffect, useState } from 'react'
// import Todo from '../components/todo'
// import { url } from '../utils/urlpath';
// import Createtodo from '../components/Createtodo';

// function Todoapp() {

//   const [iscreate,setiscreate] = useState(false)
//   const [todos, setTodos] = useState([]);


//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const res = await fetch(`${url}/todo`);
//         if (!res.ok) {
//           throw new Error(`HTTP error ${res.status}`);
//         }
//         const data = await res.json();
//         setTodos(Array.isArray(data) ? data : []);
//       } catch (e) {
//         console.error("Error fetching data:", e);
//         setTodos([]);
//       }
//     };

//     fetchTodos(); // Call the async function to fetch data
//   }, [iscreate]);
  


//   const handlecreate=()=>{
//     setiscreate(true);
//   }

//   const handleClosePopup = (e) => {
//     e.stopPropagation(); // Prevents event propagation
//     setiscreate(false);
//   };


//   return (
//     <div className='w-full h-screen bg-orange-200 p-14'>

//       <div className='w-full flex flex-row-reverse'>
//         <button className="px-4 py-2 bg-orange-500 text-white rounded mt-4" onClick={handlecreate}>Create</button>
//       </div>
      

//       {iscreate && (
//         <Createtodo
//           onClose={handleClosePopup}
//         />

//       )}

//       <p className='text-3xl font-bold pb-4 text-[#cf5b34]'>Today works</p>
//       <div className='flex justify-start gap-14 flex-wrap'>
//         {todos.map(todo => (
//         <Todo
//           key={todo.id}
//           id={todo.id}
//           title={todo.title}
//           description={todo.description}

//         />
//       ))}
//       </div>

//       <div className='mt-20'></div>

//       <p className='text-3xl font-bold pb-4 text-[#cf5b34]'>Upcoming works</p>
//       <div className='flex justify-start gap-14 flex-wrap'>
//       {Array.isArray(todos) && todos.map(todo => (
//         <Todo
//           key={todo.id}
//           id={todo.id}
//           title={todo.title}
//           description={todo.description}
//         />
//       ))}     
//       </div>

//     </div>
//   )
// }

// export default Todoapp