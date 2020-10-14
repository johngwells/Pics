import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Qwq8MQIcjcNXNBxrmOD9Nt0tHBssOB-xQb1zwtppvw0'
  }
});
