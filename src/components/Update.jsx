import React, { useState } from 'react';
import api from '../services/api';

function Update({ updateClick ,id , title , description, completion}) {
    const [textInput, setTextInput] = useState(title);
    const [textareaInput, setTextareaInput] = useState(description);
    const [complete,setcomplete] = useState(completion)

    // Submit new todo to the API
    const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!textInput || !textareaInput) {
            alert('Both title and description are required');
            return;
        }
        console.log(complete,"this is complete")

        const data = {
            Id: id,
            title: textInput,
            description: textareaInput,
            completed: complete
        };

        try {
            const response = await api.handleUpdate(data);
            console.log('Successfully created todo');
            updateClick();  // Close the popup after successful submission
        } catch (error) {
            alert(error.message || 'Failed to create todo');
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-white rounded-lg shadow-lg flex justify-center items-center w-5/12 h-96"
                onClick={(e) => e.stopPropagation()}
            >
                <form className="flex flex-col gap-1 w-full pl-3" onSubmit={handleSubmit}>
                    <div className="flex flex-row pl-10 gap-24">
                        <label className="text-xl font-semibold flex gap-4">
                            Title
                        </label>
                        <input
                            type="text"
                            className="border-2 text-black w-72 p-1 pl-2"
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                        />
                    </div>

                    <br />
                    <div className="flex flex-row pl-10 gap-7 ">
                        <label className="text-xl font-semibold flex gap-4">
                            Description 
                        </label>
                        <textarea
                            value={textareaInput}
                            className="border-2 w-96 h-32 p-1 pl-2"
                            onChange={(e) => setTextareaInput(e.target.value)}
                        />
                    </div>

                    <br />
                    <div className="flex flex-row pl-10 gap-8 ">
                        <label className="text-xl font-semibold flex gap-4">
                            Completed
                        </label>
                        <input
                            type="checkbox"
                            checked={complete}
                            className="border-2 w-6 h-6"
                            onChange={(e) => setcomplete(e.target.checked)}
                        />
                    </div>

                    <br />

                    <div className="flex gap-6 place-content-center">
                        {/* <button 
                            onClick={(e)=>{
                                // e.preventDefault()
                                // e.stopPropagation()
                                setTextInput('');
                                setTextareaInput('');
                                onClose()}}
                            className="px-4 py-2 bg-red-500 text-white rounded mt-4"
                        >
                            Cancel
                        </button> */}

                        <button className="px-4 py-2 bg-green-600 text-white rounded mt-4" type="submit">
                            Modify
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update;
