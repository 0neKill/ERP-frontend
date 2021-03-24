import axios from 'axios';

const token: string | null = window.localStorage.getItem('Authorization');
if (token) axios.defaults.headers.common['x-access-token'] = `Bearer ${token}`;

export default axios;
