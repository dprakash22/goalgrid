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
};

export default api;
