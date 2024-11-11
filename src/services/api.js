// services/api.js
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:9000/todo';

const api = {
  signup: async (email, password) => {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });
    if (!response.ok) throw new Error('Signup failed');
    return response.json();
  },

  login: async (email, password) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  },

  fetchTodos: async () => {
    const response = await fetch(`${BASE_URL}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (!response.ok) throw new Error('Failed to fetch todos');
    const data = await response.json();
    console.log(data.data)
    return data.data;
  },

  createTodo: async (todoData) => {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies for authentication
      body: JSON.stringify(todoData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create todo: ${response.statusText}`);
    }
    return response.json();
  },

  handleUpdate : async(todo) => {
    // const token = Cookies.get('authToken');
    try {
      // console.log(todo.title,"this is textinput")

        const response = await fetch(`${BASE_URL}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
            body: JSON.stringify({
                id: todo.Id,
                title : todo.title,
                description: todo.description,
                completed : todo.completed,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            // onUpdate();
            alert(data.message);
        } else {
            alert('Failed to update todo');
        }
    } catch (error) {
        console.error('Error updating todo:', error);
        alert('Error updating todo');
    }
  },


  handleDelete: async (todoId) => {
    try {
        const res = await fetch(`${BASE_URL}/${todoId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Include credentials like cookies if necessary
        });

        if (!res.ok) {
            throw new Error('Failed to delete todo');
        }

        const data = await res.json();
        alert(data.message); // Show success message
        // Optionally, update the UI to reflect the deletion
    } catch (err) {
        console.error('Error deleting todo:', err);
        alert('Error deleting todo');
    }
},


};



export default api;
