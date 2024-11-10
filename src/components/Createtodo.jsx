import React, { useState } from 'react';
import api from '../services/api';

function Createtodo({ onClose }) {
    const [textInput, setTextInput] = useState('');
    const [textareaInput, setTextareaInput] = useState('');

    // Submit new todo to the API
    const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!textInput || !textareaInput) {
            alert('Both title and description are required');
            return;
        }

        const data = {
            title: textInput,
            description: textareaInput,
        };

        try {
            const response = await api.createTodo(data);
            setTextInput('');
            setTextareaInput('');
            console.log('Successfully created todo');
            onClose();  // Close the popup after successful submission
        } catch (error) {
            alert(error.message || 'Failed to create todo');
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg flex justify-center items-center w-5/12 h-96">
                <form className="flex flex-col gap-1 w-full pl-3" onSubmit={handleSubmit}>
                    <div className="flex flex-row pl-10 gap-24">
                        <label className="text-xl font-semibold flex gap-4">
                            Title
                        </label>
                        <input
                            type="text"
                            className="border-2 text-black w-72"
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                        />
                    </div>

                    <br />
                    <div className="flex flex-row pl-10 gap-7">
                        <label className="text-xl font-semibold flex gap-4">
                            Description 
                        </label>
                        <textarea
                            value={textareaInput}
                            className="border-2 w-96 h-32"
                            onChange={(e) => setTextareaInput(e.target.value)}
                        />
                    </div>

                    <br />

                    <div className="flex gap-6 place-content-center">
                        <button 
                            onClick={(e)=>{
                                // e.preventDefault()
                                // e.stopPropagation()
                                setTextInput('');
                                setTextareaInput('');
                                onClose()}}
                            className="px-4 py-2 bg-red-500 text-white rounded mt-4"
                        >
                            Cancel
                        </button>

                        <button className="px-4 py-2 bg-green-600 text-white rounded mt-4" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Createtodo;
