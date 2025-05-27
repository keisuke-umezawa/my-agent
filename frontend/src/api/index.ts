
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export interface User {
  id?: number;
  name: string;
  email: string;
}

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
  user_id: number;
}

export const checkHealth = async (): Promise<{ status: string; message: string }> => {
  const response = await fetch(`${API_URL}/api/health`);
  if (!response.ok) {
    throw new Error('API health check failed');
  }
  return response.json();
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_URL}/api/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

export const getUser = async (id: number): Promise<User> => {
  const response = await fetch(`${API_URL}/api/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user with id ${id}`);
  }
  return response.json();
};

export const createUser = async (user: User): Promise<User> => {
  const response = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
};

export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${API_URL}/api/tasks`);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
};

export const getTask = async (id: number): Promise<Task> => {
  const response = await fetch(`${API_URL}/api/tasks/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch task with id ${id}`);
  }
  return response.json();
};

export const createTask = async (task: Task): Promise<Task> => {
  const response = await fetch(`${API_URL}/api/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
  return response.json();
};

export const updateTask = async (id: number, task: Task): Promise<Task> => {
  const response = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error(`Failed to update task with id ${id}`);
  }
  return response.json();
};
